import React from 'react';
import CenteredBlock from "../base/CenteredBlock";
import PageTitle from "../base/PageTitle";
import mainPicture from "../../static/images/main.png";
import BasePage from "../layouts/BasePage";
import Header from "../layouts/Header";
import Body from "../layouts/Body";
import Footer from "../layouts/Footer";

const Main = (props) => {
    const pageTitle = `Сервис видеоконференцсвязи ${process.env.REACT_APP_SITE_NAME}`;
    return (
        <BasePage>
            <Header></Header>
            <Body>
                <PageTitle title={pageTitle}/>
                <CenteredBlock>
                   <div>
                       <CenteredBlock>
                           <img src={mainPicture} className="main-image" alt="main image"/>
                       </CenteredBlock>
                       Добро пожаловать на наш сервис видеоконференций! Мы предлагаем простой и удобный способ проводить онлайн-встречи с коллегами, друзьями или партнерами, без необходимости покидать свой офис или дом. Наш сервис позволяет установить соединение в любой точке мира в режиме реального времени с помощью всего лишь нескольких кликов.
                        <br/><br/>
                       Мы предоставляем надежную и безопасную платформу, которая поддерживает конференции нужного размера - от одного до нескольких десятков участников. Мы гарантируем высокое качество воспроизведения звука и видео.
                        <br/><br/>
                       Наша команда профессионалов всегда рада помочь вам с любыми вопросами или проблемами, которые могут возникнуть во время использования нашего сервиса видеоконференций. Регистрируйтесь сегодня и начните общаться комфортно и эффективно уже сейчас!
                   </div>
                </CenteredBlock>
            </Body>
            <Footer></Footer>
        </BasePage>
    );
}

export default Main;