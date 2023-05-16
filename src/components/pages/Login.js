import React, {useState} from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";

const Login = (props) => {
    const pageTitle = `Вход в ${process.env.REACT_APP_SITE_NAME}`;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <Wrapper>
            <PageTitle title={pageTitle}/>
            <CenteredBlock>
                <form className="col-lg-6 col-md-6">
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">Имя пользователя</label>
                        <input type="text" id="username" className="form-control" defaultValue="user" placeholder="Username "/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Пароль</label>
                        <input type="password" id="password" className="form-control" defaultValue="user" placeholder="Password"/>
                    </div>


                    <div className="text-center">
                        <button type="button" className="btn btn-primary btn-block mb-4">Войти</button>

                        <p>Нет аккаунта? <a href="/#">Зарегистрироваться</a></p>
                    </div>
                </form>
            </CenteredBlock>
        </Wrapper>
    );
}

export default Login;