import React from 'react';
import logo from '../../static/images/logo_blue.png'
import {Link} from "react-router-dom";
import {isUserAuthenticated, logout} from "../../services/auth";

const Header = (props) => {

    function logoutUser() {
        logout();
        window.location.replace("/");
    }

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img className="header-icon" src={logo} alt="logo"/>
                    </Link>
                    {isUserAuthenticated() ?
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link className="nav-link px-2 text-white" to="/profile">Профиль</Link></li>
                        <li><Link className="nav-link px-2 text-white" to="/conferences">Конференции</Link></li>
                    </ul>
                    : <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>}
                    <div className="text-end">
                        {isUserAuthenticated() ?
                            <button onClick={logoutUser} className="btn btn-outline-light me-2">Logout</button>
                            :
                            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                        }

                        <Link to="/register" className="btn btn-info">Sign-up</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
