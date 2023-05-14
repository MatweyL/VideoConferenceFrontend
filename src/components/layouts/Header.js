import React from 'react';
import logo from '../../static/images/logo_blue.png'

const Header = (props) => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img className="header-icon" src={logo} alt="logo"/>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="\#" className="nav-link px-2 text-white">Профиль</a></li>
                        <li><a href="\#" className="nav-link px-2 text-white">Конференции</a></li>
                        {/*<li><a href="\#" className="nav-link px-2 text-white">Pricing</a></li>*/}
                        {/*<li><a href="\#" className="nav-link px-2 text-white">FAQs</a></li>*/}
                        {/*<li><a href="\#" className="nav-link px-2 text-white">About</a></li>*/}
                    </ul>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-info">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
