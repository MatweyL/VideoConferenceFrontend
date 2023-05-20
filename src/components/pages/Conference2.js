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

    useEffect(() => {
        getConference(document.location.pathname).then(r => {
            console.log(r)
            if (r.error) {
                setIsError(r);
            } else {
                const u = r;
                setUser(u);
                socket.emit('init', u.user_id);




















            }
        });
    }, []);
    if (isError.error) {
        return <NotFoundPage></NotFoundPage>
    }


    return (
        <Body fullPageMode={true} fullWidthMode={true}>

        </Body>
    );
}

export default Conference;