import React, {useEffect, useState} from 'react';
import Wrapper from "../base/Wrapper";
import Body from "../layouts/Body";
import Header from "../layouts/Header";
import BasePage from "../layouts/BasePage";
import {finishConference, getConference} from "../../services/conference";
import NotFoundPage from "./NotFoundPage";

const Conference = (props) => {
    const [isError, setIsError] = useState({error: false});
    const [user, setUser] = useState({})
    useEffect(() => {
        getConference(document.location.pathname).then(r => {
            console.log(r)
            if (r.error) {
                setIsError(r);
            } else {
                setUser(r);
            }
        })
    }, []);
    if (isError.error) {
        return <NotFoundPage></NotFoundPage>
    }

    function handleConferenceFinishing() {
        finishConference(document.location.pathname).then(r => {
            window.location.replace("/conferences");
        })
    }

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
            {user.role === "creator" ? <button onClick={handleConferenceFinishing}>Завершить</button> : <span></span>}


        </Body>
    );
}

export default Conference;