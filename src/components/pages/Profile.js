import React, {useState} from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";
import LabeledInput from "../base/LabeledInput";
import ReadOnlyInput from "../base/ReadOnlyInput";

const Profile = (props) => {
    const pageTitle = `Профиль`;
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [readOnlyMode, setReadOnlyMode] = useState(true);

    function updateFirstName(event) {
        setFirstName(event.target.value);
    }

    function updateLastName(event) {
        setLastName(event.target.value);
    }

    function enableUpdateProfile() {
        setReadOnlyMode(false);
    }
    function saveUpdateProfile() {
        setReadOnlyMode(true);

    }

    return (
        <Wrapper>
            <PageTitle title={pageTitle}/>
            <CenteredBlock>
                <div className="border">
                    <div className="col p-3">
                        <ReadOnlyInput title="Username" value="user"/>
                        <LabeledInput inputLabel="Имя" readOnly={readOnlyMode} onChangeHandler={updateFirstName}/>
                        <LabeledInput inputLabel="Фамилия" readOnly={readOnlyMode} onChangeHandler={updateLastName}/>
                        <CenteredBlock>
                            {readOnlyMode ?
                                <button onClick={enableUpdateProfile} className="btn btn-primary m-4" type="button">Редактировать</button>
                                :
                                <button onClick={saveUpdateProfile} className="btn btn-primary m-4" type="button">Сохранить</button>}

                        </CenteredBlock>
                    </div>
                </div>

            </CenteredBlock>
        </Wrapper>
    );
}

export default Profile;