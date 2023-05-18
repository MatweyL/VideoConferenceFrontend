import React, {useEffect, useState} from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";
import LabeledInput from "../base/LabeledInput";
import ReadOnlyInput from "../base/ReadOnlyInput";
import {getCurrentUserConferences} from "../../services/conference";
import NotFoundPage from "./NotFoundPage";

const ConferenceMenu = (props) => {
    const pageTitle = `Конференции`;
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        getCurrentUserConferences().then(r => {
            if (r.error) {
                setIsError(true);
            }
            else {

            }
        })
    },[]);
    if (isError) {
        return (<NotFoundPage reason="Отказано в доступе"></NotFoundPage>);
    }
    return (
        <Wrapper>
            <PageTitle title={pageTitle}/>

        </Wrapper>
    );
}

export default ConferenceMenu;