import React from 'react';
import logo from '../../static/images/logo_black.png';
import github from '../../static/images/github.png';
import vk from '../../static/images/vk.png';
import telegram from '../../static/images/telegram.png';

const Footer = (props) => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img className="footer-icon" src={logo} alt="logo"/>
                    </a>
                    <span className="text-muted">© 2023 {process.env.REACT_APP_SITE_NAME}</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="\#">
                        <img className="footer-icon" src={vk} alt="vk"/>
                    </a></li>
                    <li className="ms-3"><a className="text-muted" href="\#">
                        <img className="footer-icon" src={telegram} alt="telegram"/>
                    </a></li>
                    <li className="ms-3"><a className="text-muted" href="https://github.com/MatweyL">
                        <img className="footer-icon" src={github} alt="github"/>
                    </a></li>

                </ul>
            </footer>
        </div>
    );
};


export default Footer;
