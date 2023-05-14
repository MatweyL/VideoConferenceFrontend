import React from 'react';
import CenteredBlock from "../base/CenteredBlock";
import Wrapper from "../base/Wrapper";
import PageTitle from "../base/PageTitle";

const Register = (props) => {
    const pageTitle = `Создание аккаунта в ${process.env.REACT_APP_SITE_NAME}`;
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

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password_confirmation">Пароль (повторно)</label>
                        <input type="password" id="password_confirmation" className="form-control" defaultValue="user" placeholder="Password"/>
                    </div>


                    <div className="text-center">
                        <button type="button" className="btn btn-primary btn-block mb-4">Создать аккаунт</button>

                        <p>Есть аккаунт? <a href="/#">Войти</a></p>
                    </div>
                </form>
            </CenteredBlock>
        </Wrapper>
    );
}

export default Register;