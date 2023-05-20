var myVideo;
let usersCount = 1;

function initMyVideo() {
    document.addEventListener("DOMContentLoaded", (event) => {
        myVideo = document.getElementById("local_vid");
        myVideo.onloadeddata = () => { console.log("W,H: ", myVideo.videoWidth, ", ", myVideo.videoHeight); };
    })
}

function makeVideoElementCustom(element_id, display_name) {
    let vid = document.createElement("video");
    let vidWrapper = document.createElement("div");
    vidWrapper.className = "video-wrapper";
    let vidUsername = document.createElement("div");
    vidUsername.innerText = "user" + usersCount;
    usersCount += 1;
    vidUsername.className = "video-username";
    vidWrapper.id = "vid_" + element_id;
    vid.className = "video";
    vid.autoplay = true;
    vidWrapper.appendChild(vidUsername);
    vidWrapper.appendChild(vid);
    return vidWrapper;
}

function addVideoElement(element_id, display_name) {
    document.getElementById("video_grid").appendChild(makeVideoElementCustom(element_id, display_name));
}
function removeVideoElement(element_id) {
    let videoWrapper = getVideoWrapper(element_id);
    let v = videoWrapper.children[1];
    if (v.srcObject) {
        v.srcObject.getTracks().forEach(track => track.stop());
    }
    v.removeAttribute("srcObject");
    v.removeAttribute("src");

    document.getElementById("vid_" + element_id).remove();
}

function getVideoWrapper(element_id) {
    return document.getElementById("vid_" + element_id);
}

function getVideoObj(element_id) {
    let videoWrapper = getVideoWrapper(element_id);
    return videoWrapper.children[1];
}

function setAudioMuteState(flag) {
    let local_stream = myVideo.srcObject;
    console.log("setAudioMuteState: ", local_stream);
    local_stream.getAudioTracks().forEach((track) => { track.enabled = !flag; });
    // switch button icon
    document.getElementById("mute_icon").innerText = (flag) ? "mic_off" : "mic";
}
function setVideoMuteState(flag) {
    let local_stream = myVideo.srcObject;
    local_stream.getVideoTracks().forEach((track) => { track.enabled = !flag; });
    // switch button icon
    document.getElementById("vid_mute_icon").innerText = (flag) ? "videocam_off" : "videocam";
}
