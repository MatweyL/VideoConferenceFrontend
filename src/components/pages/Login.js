import React, {useState} from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";
import {Link} from "react-router-dom";
import {authUser} from "../../services/auth";
import {setToken} from "../../services/utils";

const Login = (props) => {
    const pageTitle = `Вход в ${process.env.REACT_APP_SITE_NAME}`;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function authenticateUser() {
        authUser({username: username, password: password}).then(r => {
            console.log(r);
            if (r.error) {
                alert("Неверные имя пользователя или пароль");
            } else {
                setToken(r);
                window.location.replace("/");
            }
        })
    }

    function updateUsername(e) {
        setUsername(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }


    return (
        <Wrapper>
            <PageTitle title={pageTitle}/>
            <CenteredBlock>
                <form className="col-lg-6 col-md-6">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">Имя пользователя</label>
                        <input onChange={updateUsername} type="text" id="username" className="form-control" placeholder="Username "/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Пароль</label>
                        <input onChange={updatePassword} type="password" id="password" className="form-control" placeholder="Password"/>
                    </div>


                    <div className="text-center">
                        <button onClick={authenticateUser} type="button" className="btn btn-primary btn-block mb-4">Войти</button>

                        <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
                    </div>
                </form>
            </CenteredBlock>
        </Wrapper>
    );
}

export default Login;