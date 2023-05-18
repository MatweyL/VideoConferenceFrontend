import React from 'react';
import Wrapper from "../base/Wrapper";
import Body from "../layouts/Body";
import Header from "../layouts/Header";
import BasePage from "../layouts/BasePage";

const Conference = (props) => {
    return (
        <Body fullPageMode={true} fullWidthMode={true}>
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

        </Body>
    );
}

export default Conference;