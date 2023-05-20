import React from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";

const NotFoundPage = (props) => {
    const pageTitle = `Не найдено`;
    return (
        <Wrapper>
            <PageTitle title={pageTitle}/>
            <CenteredBlock>
                <div>
                    {props.reason}
                </div>
            </CenteredBlock>
        </Wrapper>
    );
}

export default NotFoundPage;