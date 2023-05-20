import ConferenceVideo from "./ConferenceVideo";
import React from "react";

const ConferenceVideoGrid = ({isVideoMuted, isAudioMuted}) => {
    return (
        <div id="video_grid" className="video-grid col-lg-9 col-md-12 col-sm-12">
            <ConferenceVideo id="local_vid" username="You" autoplay={isVideoMuted} muted={isAudioMuted}/>
        </div>
    );
}


export default ConferenceVideoGrid;