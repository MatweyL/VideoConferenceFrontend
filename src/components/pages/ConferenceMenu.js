import React, {useEffect, useState} from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";
import LabeledInput from "../base/LabeledInput";
import ReadOnlyInput from "../base/ReadOnlyInput";
import {getCurrentUserConferences} from "../../services/conference";
import NotFoundPage from "./NotFoundPage";
import CreateConferenceForm from "./components/CreateConferenceForm";
import ConferencesList from "./components/ConferencesList";
import conferencesList from "./components/ConferencesList";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Body from "../layouts/Body";
import BasePage from "../layouts/BasePage";
import {getCurrentUser} from "../../services/user";

const ConferenceMenu = (props) => {
    const pageTitle = `Конференции`;
    const [isError, setIsError] = useState(false);
    const [userConferences, setUserConferences] = useState([])
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        getCurrentUserConferences().then(r => {
            if (r.error) {
                setIsError(true);
            }
            else {
                console.log(r);
                r.sort((a, b) => {
                    if (a.conference.created < b.conference.created) {
                        return 1;
                    }
                    return -1;
                })
                setUserConferences(r);

            }
        });
        getCurrentUser().then(r => {
            console.log("CURRENT USER:                            ", r)
            setCurrentUser(r);
        })

    },[]);
    if (isError) {
        return (<NotFoundPage reason="Отказано в доступе"></NotFoundPage>);
    }

    function addConference(conference) {
        setUserConferences([{conference: conference, participants: []}, ...userConferences])
    }
    return (
        <BasePage>
            <Header></Header>
            <Body>
                <PageTitle title={pageTitle}/>
                <CreateConferenceForm addConference={addConference}></CreateConferenceForm>
                <ConferencesList conferencesFull={userConferences} currentUser={currentUser}></ConferencesList>
            </Body>
            <Footer></Footer>
        </BasePage>
    );
}

export default ConferenceMenu;