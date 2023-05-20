import React, {useEffect, useState} from 'react';
import CenteredBlock from "../base/CenteredBlock";
import PageTitle from "../base/PageTitle";
import LabeledInput from "../base/LabeledInput";
import ReadOnlyInput from "../base/ReadOnlyInput";
import {getCurrentUser, getUser, updateUser} from "../../services/user";
import NotFoundPage from "./NotFoundPage";
import Body from "../layouts/Body";
import BasePage from "../layouts/BasePage";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Profile = (props) => {
    const pageTitle = `Профиль`;
    let [isError, setIsError] = useState(false);
    let [username, setUsername] = useState();
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [readOnlyMode, setReadOnlyMode] = useState(true);

    useEffect(() => {
        getCurrentUser().then((data) => {
            if (data.error) {
                setIsError(true);
            } else {
                setUsername(data.user.username);
                setFirstName(data.user_info.first_name);
                setLastName(data.user_info.last_name);
            }
        })


     }, []);

    if (isError) {
        return (<NotFoundPage reason="Отказано в доступе"></NotFoundPage>);
    }
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
        updateUser({first_name: firstName, last_name: lastName}).then(r => {})

    }

    return (
        <BasePage>
            <Header></Header>
            <Body>
                <PageTitle title={pageTitle}/>
                <CenteredBlock>
                    <div className="border">
                        <div className="col p-3">
                            <ReadOnlyInput title="Username" value={username}/>
                            <LabeledInput inputLabel="Имя" readOnly={readOnlyMode} onChangeHandler={updateFirstName} value={firstName}/>
                            <LabeledInput inputLabel="Фамилия" readOnly={readOnlyMode} onChangeHandler={updateLastName} value={lastName}/>
                            <CenteredBlock>
                                {readOnlyMode ?
                                    <button onClick={enableUpdateProfile} className="btn btn-primary m-4" type="button">Редактировать</button>
                                    :
                                    <button onClick={saveUpdateProfile} className="btn btn-primary m-4" type="button">Сохранить</button>}

                            </CenteredBlock>
                        </div>
                    </div>

                </CenteredBlock>
            </Body>
            <Footer></Footer>
        </BasePage>
    );
}

export default Profile;