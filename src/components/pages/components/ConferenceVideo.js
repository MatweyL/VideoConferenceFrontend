import React from "react";
const ConferenceVideo = ({id, username, autoplay, muted, ...props}) => {
    return (
        <div className="video-wrapper">
            <div className="video-username">{username}</div>
            <video id={id} className="video" autoPlay={autoplay} muted={muted}></video>
        </div>
    );
}

export default ConferenceVideo;
