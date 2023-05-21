import React, {useEffect, useRef, useState} from 'react';
import Body from "../layouts/Body";
import {changeConferenceJoinAccess, finishConference, getConference} from "../../services/conference";
import NotFoundPage from "./NotFoundPage";
import ConferenceBar from "./components/ConferenceBar";
import ConferenceVideoGrid from "./components/ConferenceVideoGrid";
import {io} from "socket.io-client";
import ConferenceVideo from "./components/ConferenceVideo";
import {getToken} from "../../services/utils";


const Conference = (props) => {
    const [isError, setIsError] = useState({error: false});
    const [user, setUser] = useState({});
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const [isAudioMuted, setIsAudioMuted] = useState(false);
    const [isConferenceBlocked, setIsConferenceBlocked] = useState(false);


    const myVideoRef = useRef(null);
    let myRoomID;

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    let myID;
    let myUsername;
    const socket = io(process.env.REACT_APP_API_URL, {autoConnect: true});
    useEffect(() => {
        getConference(document.location.pathname).then(r => {
            if (r.error) {
                setIsError(r);
            } else {
                const u = r;
                myUsername = r.user_id;
                myRoomID = r.conference_id;
                setUser(u);
                let is_creator = u.role === "creator";
                const redirectURL = `${process.env.REACT_APP_CONFERENCE_URL}/join?room_id=${u.conference_id}&display_name=${u.user_id}&is_creator=${is_creator}&mute_audio=0&mute_video=0&video_token=${getToken()}`;
                // alert(redirectURL)
                sleep(2000).then(r => window.location.replace(redirectURL))

                // startCamera();

                console.log("CONFERENCE PARAMS", `${myRoomID} ${myUsername}`);
                socket.on("connect", ()=>{
                    console.log("socket connected....", myRoomID);
                    socket.emit("join-room", {
                        "room_id": myRoomID,
                        "name": myUsername
                    });
                });
                socket.on("user-connect", (data)=>{
                    console.log("user-connect ", data);
                    let peer_id = data["sid"];
                    let display_name = data["name"];
                    _peer_list[peer_id] = undefined; // add new user to user list
                    addVideoElement(peer_id, display_name);
                });
                socket.on("user-disconnect", (data)=>{
                    console.log("user-disconnect ", data);
                    let peer_id = data["sid"];
                    closeConnection(peer_id);
                    removeVideoElement(peer_id);
                });
                socket.on("user-list", (data)=>{
                    console.log("user list recvd ", data);
                    myID = data["my_id"];
                    if( "list" in data) // not the first to connect to room, existing user list recieved
                    {
                        let recvd_list = data["list"];
                        // add existing users to user list
                        if (recvd_list) {
                            Array.of(recvd_list).forEach(peer_id => {
                                let display_name = recvd_list[peer_id];
                                _peer_list[peer_id] = undefined;
                                addVideoElement(peer_id, display_name);
                            });
                        }
                        start_webrtc();
                    }
                });
            }
        });
    }, []);

    if (isError.error) {
        return <NotFoundPage></NotFoundPage>
    }

    var _peer_list = {};

    var myVideo;

    var camera_allowed=false;
    var mediaConstraints = {
        audio: true,
        video: {
            height: 360
        }
    };

    function startCamera()
    {
        navigator.mediaDevices.getUserMedia(mediaConstraints)
            .then((stream)=>{
                myVideoRef.current.srcObject = stream;
                console.log(stream);
                camera_allowed = true;
                socket.connect();
            })
            .catch((e)=>{
                console.log("getUserMedia Error! ", e);
            });
    }


    function closeConnection(peer_id)
    {
        console.log("ATTENTION, peer_id in _peer_list: ", peer_id in _peer_list, peer_id, _peer_list)
        if(peer_id in _peer_list && _peer_list[peer_id])
        {
            _peer_list[peer_id].onicecandidate = null;
            _peer_list[peer_id].ontrack = null;
            _peer_list[peer_id].onnegotiationneeded = null;

            delete _peer_list[peer_id]; // remove user from user list
        }
    }

//---------------[ webrtc ]--------------------

    var PC_CONFIG = {
        iceServers: [
            {
                urls: ['stun:stun.l.google.com:19302',
                    'stun:stun1.l.google.com:19302',
                    'stun:stun2.l.google.com:19302'
                ]
            },
        ]
    };

    function log_error(e){console.log("[ERROR] ", e);}
    function sendViaServer(data){socket.emit("data", data);}

    socket.on("data", (msg)=>{
        switch(msg["type"])
        {
            case "offer":
                handleOfferMsg(msg);
                break;
            case "answer":
                handleAnswerMsg(msg);
                break;
            case "new-ice-candidate":
                handleNewICECandidateMsg(msg);
                break;
        }
    });

    function start_webrtc()
    {
        // send offer to all other members
        for(let peer_id in _peer_list)
        {
            invite(peer_id);
        }
    }


    async function invite(peer_id)
    {
        if(_peer_list[peer_id]){console.log("[Not supposed to happen!] Attempting to start a connection that already exists!")}
        else if(peer_id === myID){console.log("[Not supposed to happen!] Trying to connect to self!");}
        else
        {
            console.log(`Creating peer connection for <${peer_id}> ...`);
            createPeerConnection(peer_id);
            await sleep(2000);

            let local_stream = myVideoRef.current.srcObject;
            if (local_stream) {
                local_stream.getTracks().forEach((track) => {
                    try {
                        _peer_list[peer_id].addTrack(track, local_stream);
                    } catch (e) {
                        console.log(e)
                    }
                });
            }

        }
    }

    function createPeerConnection(peer_id)
    {
        _peer_list[peer_id] = new RTCPeerConnection(PC_CONFIG);

        _peer_list[peer_id].onicecandidate = (event) => {handleICECandidateEvent(event, peer_id)};
        _peer_list[peer_id].ontrack = (event) => {handleTrackEvent(event, peer_id)};
        _peer_list[peer_id].onnegotiationneeded = () => {handleNegotiationNeededEvent(peer_id)};
    }


    function handleNegotiationNeededEvent(peer_id)
    {
        _peer_list[peer_id].createOffer()
            .then((offer)=>{return _peer_list[peer_id].setLocalDescription(offer);})
            .then(()=>{
                console.log(`sending offer to <${peer_id}> ...`);
                sendViaServer({
                    "sender_id": myID,
                    "target_id": peer_id,
                    "type": "offer",
                    "sdp": _peer_list[peer_id].localDescription
                });
            })
            .catch(log_error);
    }

    function handleOfferMsg(msg)
    {
        let peer_id = msg['sender_id'];

        console.log(`offer recieved from <${peer_id}>`);

        createPeerConnection(peer_id);
        let desc = new RTCSessionDescription(msg['sdp']);
        _peer_list[peer_id].setRemoteDescription(desc)
            .then(()=>{
                let local_stream = myVideoRef.current.srcObject;
                local_stream.getTracks().forEach((track)=>{_peer_list[peer_id].addTrack(track, local_stream);});
            })
            .then(()=>{return _peer_list[peer_id].createAnswer();})
            .then((answer)=>{return _peer_list[peer_id].setLocalDescription(answer);})
            .then(()=>{
                console.log(`sending answer to <${peer_id}> ...`);
                sendViaServer({
                    "sender_id": myID,
                    "target_id": peer_id,
                    "type": "answer",
                    "sdp": _peer_list[peer_id].localDescription
                });
            })
            .catch(log_error);
    }

    function handleAnswerMsg(msg)
    {
        let peer_id = msg['sender_id'];
        console.log(`answer recieved from <${peer_id}>`);
        let desc = new RTCSessionDescription(msg['sdp']);
        _peer_list[peer_id].setRemoteDescription(desc)
    }


    function handleICECandidateEvent(event, peer_id)
    {
        if(event.candidate){
            sendViaServer({
                "sender_id": myID,
                "target_id": peer_id,
                "type": "new-ice-candidate",
                "candidate": event.candidate
            });
        }
    }

    function handleNewICECandidateMsg(msg)
    {
        console.log(`ICE candidate recieved from <${msg["sender_id"]}>`);
        var candidate = new RTCIceCandidate(msg.candidate);
        _peer_list[msg["sender_id"]].addIceCandidate(candidate)
            .catch(log_error);
    }


    function handleTrackEvent(event, peer_id)
    {
        console.log(`track event recieved from <${peer_id}>`);

        if(event.streams)
        {
            getVideoObj(peer_id).srcObject = event.streams[0];
        }
    }


    //
    // document.addEventListener("DOMContentLoaded", (event) => {
    //     myVideo = document.getElementById("local_vid");
    //     myVideo.onloadeddata = () => { console.log("W,H: ", myVideo.videoWidth, ", ", myVideo.videoHeight); };
    //
    // });

    function makeVideoElementCustom(element_id, display_name) {
        let vid = document.createElement("video");
        vid.id = "vid_" + element_id;
        vid.autoplay = true;
        return vid;
    }

    function addVideoElement(element_id, display_name) {
        if (display_name) {
            document.getElementById("video_grid").appendChild(makeVideoElementCustom(element_id, display_name));
        }}
    function removeVideoElement(element_id) {
        let v = getVideoObj(element_id);
        if (!v) {
            return;
        }
        if (v.srcObject) {
            v.srcObject.getTracks().forEach(track => track.stop());
        }
        v.removeAttribute("srcObject");
        v.removeAttribute("src");

        document.getElementById("vid_" + element_id).remove();
    }

    function getVideoObj(element_id) {
        return document.getElementById("vid_" + element_id);
    }

    function setAudioMuteState(flag) {
        let local_stream = myVideoRef.current.srcObject;
        console.log("setAudioMuteState: ", local_stream);
        local_stream.getAudioTracks().forEach((track) => { track.enabled = !flag; });
        // switch button icon
        document.getElementById("mute_icon").innerText = (flag) ? "mic_off" : "mic";
    }
    function setVideoMuteState(flag) {
        let local_stream = myVideoRef.current.srcObject;
        local_stream.getVideoTracks().forEach((track) => { track.enabled = !flag; });
        // switch button icon
        document.getElementById("vid_mute_icon").innerText = (flag) ? "videocam_off" : "videocam";
    }

    function handleConferenceFinishing() {
        finishConference(document.location.pathname).then(r => {
            window.location.replace("/conferences");
        })
    }

    function handleChangeConferenceJoinAccess() {
        setIsConferenceBlocked(!isConferenceBlocked);
        changeConferenceJoinAccess(document.location.pathname, isConferenceBlocked).then(
            r => {
                if (r.error) {
                    alert("Ошибка")
                }
            }
        )
    }

    function handleVideoChange() {
        setIsVideoMuted(!isVideoMuted);
    }

    function handleAudioChange() {
        setIsAudioMuted(!isAudioMuted);

    }

    function handleDisconnection() {
        window.location.replace("/conferences");
    }

    return (
        <Body fullPageMode={true} fullWidthMode={true}> <div className="row">
            <ConferenceVideoGrid isVideoMuted={isVideoMuted} isAudioMuted={isAudioMuted}>

                <ConferenceVideo ref={myVideoRef} id="local_vid" username="You" autoplay={isVideoMuted} muted={isAudioMuted}/>

            </ConferenceVideoGrid>
            <ConferenceBar
                handleAudioChange={handleAudioChange}
                isAudioMuted={isAudioMuted}
                handleVideoChange={handleVideoChange}
                isVideoMuted={isVideoMuted}
                user={user}
                handleConferenceFinishing={handleConferenceFinishing}
                handleDisconnection={handleDisconnection}
                handleChangeConferenceJoinAccess={handleChangeConferenceJoinAccess}
                isConferenceBlocked={isConferenceBlocked}
            />
        </div>
        </Body>
    );
}

export default Conference;