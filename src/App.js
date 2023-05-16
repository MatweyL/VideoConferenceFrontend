import React, {useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/layouts/Header";
import BasePage from "./components/layouts/BasePage";
import Body from "./components/layouts/Body";
import Footer from "./components/layouts/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/styles.css';
import GuestRoutes from "./routes/GuestRoutes";

function App() {
    return (
            <BasePage>
                <Router>
                    <Header></Header>
                    <Body>
                        <GuestRoutes></GuestRoutes>
                    </Body>
                    <Footer></Footer>
                </Router>
            </BasePage>
        );
}

export default App;
