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

const ConferenceMenu = (props) => {
    const pageTitle = `Конференции`;
    const [isError, setIsError] = useState(false);
    const [userConferences, setUserConferences] = useState([])
    useEffect(() => {
        getCurrentUserConferences().then(r => {
            if (r.error) {
                setIsError(true);
            }
            else {
                console.log(r);
                setUserConferences(r);

            }
        })
    },[]);
    if (isError) {
        return (<NotFoundPage reason="Отказано в доступе"></NotFoundPage>);
    }
    return (
        <Wrapper>
            <PageTitle title={pageTitle}/>
            <CreateConferenceForm></CreateConferenceForm>
            <ConferencesList conferencesFull={userConferences}></ConferencesList>
        </Wrapper>
    );
}

export default ConferenceMenu;