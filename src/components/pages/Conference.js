import React, {useEffect, useState} from 'react';
import Body from "../layouts/Body";
import {changeConferenceJoinAccess, finishConference, getConference} from "../../services/conference";
import NotFoundPage from "./NotFoundPage";
import ConferenceBar from "./components/ConferenceBar";
import ConferenceVideoGrid from "./components/ConferenceVideoGrid";
import socket from "../../services/webrtc/socket";

const Conference = (props) => {
    const [isError, setIsError] = useState({error: false});
    const [user, setUser] = useState({});
    const [isConferenceBlocked, setIsConferenceBlocked] = useState(false);
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const [isAudioMuted, setIsAudioMuted] = useState(false);


    const [localId, setLocalId] = useState('');
    const [remoteId, setRemoteId] = useState('');

    useEffect(() => {
        getConference(document.location.pathname).then(r => {
            console.log(r)
            if (r.error) {
                setIsError(r);
            } else {
                const u = r;
                setIsConferenceBlocked(!r.conference.is_joining_allowed);
                setUser(u);
                console.log(u)
                socket.emit('init', u.user_id);
            }
        });
    }, []);
    if (isError.error) {
        return <NotFoundPage></NotFoundPage>
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
        <Body fullPageMode={true} fullWidthMode={true}>
            <div className="row">


                <ConferenceVideoGrid isVideoMuted={isVideoMuted} isAudioMuted={isAudioMuted}/>
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