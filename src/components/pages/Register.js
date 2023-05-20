import React, {useState} from 'react';
import CenteredBlock from "../base/CenteredBlock";
import PageTitle from "../base/PageTitle";
import {Link} from "react-router-dom";
import {registerUser} from "../../services/auth";
import Body from "../layouts/Body";
import Header from "../layouts/Header";
import BasePage from "../layouts/BasePage";
import Footer from "../layouts/Footer";

const Register = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const pageTitle = `Создание аккаунта в ${process.env.REACT_APP_SITE_NAME}`;

    function regUser() {
        if (password !== passwordConfirmation) {
            alert("Пароли должны совпадать!")
        } else {
            registerUser({username: username, password: password}).then(response => {
                if (response.error) {
                    if (response.statusCode === 409) {
                        alert("Выберете другое имя пользователя");
                    } else {
                        alert("Некорректные входные данные")
                    }
                } else {
                    window.location.replace("/login");
                }
            })
        }
    }

    return (
        <BasePage>
        <Header></Header>
        <Body>
            <PageTitle title={pageTitle}/>
            <CenteredBlock>
                <form className="col-lg-6 col-md-6">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">Имя пользователя</label>
                        <input onChange={e => setUsername(e.target.value)} type="text" id="username" className="form-control" placeholder="Username "/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Пароль</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="form-control" placeholder="Password"/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password_confirmation">Пароль (повторно)</label>
                        <input onChange={e => setPasswordConfirmation(e.target.value)} type="password" id="password_confirmation" className="form-control" placeholder="Password"/>
                    </div>


                    <div className="text-center">
                        <button onClick={regUser} type="button" className="btn btn-primary btn-block mb-4">Создать аккаунт</button>

                        <p>Есть аккаунт? <Link href="/login">Войти</Link></p>
                    </div>
                </form>
            </CenteredBlock>
        </Body>
            <Footer></Footer>
        </BasePage>
    );
}

export default Register;