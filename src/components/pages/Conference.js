import React from 'react';
import Wrapper from "../base/Wrapper";

const Conference = (props) => {
    return (
        <Wrapper>
            <div id="video_grid" className="video-grid">
                <div className="video-wrapper">
                    <div className="video-username">You</div>
                    <video id="local_vid" className="video" autoPlay muted></video>
                </div>
                <div className="video-wrapper">
                    <div className="video-username">You</div>
                    <video id="local_vid" className="video" autoPlay muted></video>
                </div>
                <div className="video-wrapper">
                    <div className="video-username">You</div>
                    <video id="local_vid" className="video" autoPlay muted></video>
                </div>
            </div>

        </Wrapper>
    );
}

export default Conference;