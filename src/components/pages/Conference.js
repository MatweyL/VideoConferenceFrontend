import React, {useEffect, useState} from 'react';
import Wrapper from "../base/Wrapper";
import Body from "../layouts/Body";
import Header from "../layouts/Header";
import BasePage from "../layouts/BasePage";
import {finishConference, getConference} from "../../services/conference";
import NotFoundPage from "./NotFoundPage";
import ConferenceVideo from "./components/ConferenceVideo";

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

    function handleConferenceBlocking() {

    }

    function handleVideoChange() {

    }

    function handleAudioChange() {

    }

    function handleDisconnection() {

    }

    return (
        <Body fullPageMode={true} fullWidthMode={true}>
            <div className="row">
                <div id="video_grid" className="video-grid col-lg-9 col-md-12 col-sm-12">
                    <ConferenceVideo id="local_vid" username="You"/>
                </div>
                <div className="conference-actions col-lg-3 col-md-12 col-sm-12 p-3">
                    <div className="h5 text-white text-center">Действия</div>
                    <div className="mt-3">
                        <div className="text-white text-center">Параметры медиа</div>
                        <div className="d-flex justify-content-between p-3">
                            <span className="text-white mt-1">Аудио</span>
                            <button onClick={handleAudioChange} type="button" className="btn btn-secondary btn-sm">Выключено</button>
                        </div>
                        <div className="d-flex justify-content-between p-3">
                            <span className="text-white mt-1">Видео</span>
                            <button onClick={handleVideoChange}> type="button" className="btn btn-info btn-sm"
                                    Включено
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="text-white text-center">Параметры конференции</div>
                        <div className="d-flex justify-content-between mt-3">
                            <button onClick={handleConferenceBlocking} type="button" className="btn btn-warning btn-sm col-12">Заблокировать</button>
                        </div>
                        {user.role === "creator" ?
                        <div className="d-flex justify-content-between mt-3">
                            <button onClick={handleConferenceFinishing} type="button" className="btn btn-danger btn-sm col-12">Завершить</button>
                        </div> : <div></div>}
                        <div className="d-flex justify-content-between mt-3">
                            <button onClick={handleDisconnection} type="button" className="btn btn-info btn-sm col-12">Отключиться</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="text-white text-center">Участники</div>
                        <div className="d-flex justify-content-between p-3">
                            {/*<span className="text-white mt-1">user</span>*/}
                        </div>
                    </div>
                </div>
            </div>
        </Body>
    );
}

export default Conference;