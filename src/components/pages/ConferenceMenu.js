import React from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";
import LabeledInput from "../base/LabeledInput";
import ReadOnlyInput from "../base/ReadOnlyInput";

const ConferenceMenu = (props) => {
    const pageTitle = `Конференции`;
    return (
        <Wrapper>
            <PageTitle title={pageTitle}/>

        </Wrapper>
    );
}

export default ConferenceMenu;