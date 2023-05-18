import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/layouts/Header";
import BasePage from "./components/layouts/BasePage";
import Body from "./components/layouts/Body";
import Footer from "./components/layouts/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/styles.css';
import HeaderRoutes from "./routes/HeaderRoutes";

function App() {
    return (
            <BasePage>
                <Router>
                    <Header></Header>
                    <Body>
                        <HeaderRoutes></HeaderRoutes>
                    </Body>
                    <Footer></Footer>
                </Router>
            </BasePage>
        );
}

export default App;
