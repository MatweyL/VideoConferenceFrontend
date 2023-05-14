import React, {useState} from 'react';
import Header from "./components/layouts/Header";
import BasePage from "./components/layouts/BasePage";
import Body from "./components/layouts/Body";
import Footer from "./components/layouts/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/styles.css';
import Login from "./components/pages/Login";
import Main from "./components/pages/Main";

function App() {
    const [fullPageMode, setFullPageMode] = useState(false);
    return (
            <BasePage>
                <Header></Header>
                <Body fullPageMode={fullPageMode} setFullPageMode={setFullPageMode}>
                    <Main/>
                </Body>
                <Footer></Footer>
            </BasePage>
        );
}

export default App;
