import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './static/css/styles.css';
import HeaderRoutes from "./routes/HeaderRoutes";

function App() {
    return (
            <Router>
                <HeaderRoutes></HeaderRoutes>
            </Router>
        );
}

export default App;
