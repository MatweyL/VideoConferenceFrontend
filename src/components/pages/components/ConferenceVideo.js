import React from "react";
const ConferenceVideo = ({id, username, ...props}) => {
    return (
        <div className="video-wrapper">
            <div className="video-username">{username}</div>
            <video id={id} className="video" autoPlay muted></video>
        </div>
    );
}

export default ConferenceVideo;
