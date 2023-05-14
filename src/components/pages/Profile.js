import React from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";
import LabeledInput from "../base/LabeledInput";
import ReadOnlyInput from "../base/ReadOnlyInput";

const Profile = (props) => {
    const pageTitle = `Профиль`;
    return (
        <Wrapper>
            <PageTitle title={pageTitle}/>
            <CenteredBlock>
                <div className="border">
                    <div className="col p-3">
                        <ReadOnlyInput title="Username" value="user"/>
                        <LabeledInput inputLabel="Имя" readOnly={true}/>
                        <LabeledInput inputLabel="Фамилия" readOnly={true}/>
                        <CenteredBlock>
                            <button className="btn btn-primary m-4" type="button">Редактировать</button>
                        </CenteredBlock>
                    </div>
                </div>

            </CenteredBlock>
        </Wrapper>
    );
}

export default Profile;