import ConferenceVideo from "./ConferenceVideo";
import React from "react";

const ConferenceVideoGrid = ({isVideoMuted, isAudioMuted, ...props}) => {
    return (
        <div id="video_grid" className="video-grid col-lg-9 col-md-12 col-sm-12">
            {props.children}      </div>
    );
}


export default ConferenceVideoGrid;