import React from 'react';
import {Container} from 'react-bootstrap';

import Logo from '../assets/images/logo-svg.svg';
// import Reddit from '../assets/images/reddit-icon.svg';
import Telegram from '../assets/images/telegram-icon.svg';
import Micon from '../assets/images/m-icon.svg';
import Github from '../assets/images/github-icon.svg';
import Gitbook from '../assets/images/gitbook-icon-1.svg';
import Twitter from '../assets/images/twitter.svg';
// import Linked from '../assets/images/linkedin-svg.svg';

function Footer() {
    return (
        <div className="footer text-center">
            <Container>
                <img src={Logo} alt="logo" style={{width: '80px'}} data-aos="fade-up" />
                <div className="social-media d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    {/* <a rel="noreferrer" target="_blank" href="https://www.reddit.com/r/BlackCollateral/"><img src={Reddit} alt="icon" /></a> */}
                    <a rel="noreferrer" target="_blank" href="https://t.me/carbonixfi"><img src={Telegram} alt="icon" /></a>
                    <a rel="noreferrer" target="_blank" href="https://medium.com/@BLACKCOLLATERAL"><img src={Micon} alt="icon" /></a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/CARBONIXDEFI"><img src={Github} alt="icon" /></a>
                    <a rel="noreferrer" target="_blank" href="http://docs.blackcollateral.com/"><img src={Gitbook} alt="icon" /></a>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/carbonixfi"><img src={Twitter} alt="icon" /></a>
                    {/* <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/boson-labs"><img src={Linked} alt="icon" /></a> */}
                    <a rel="noreferrer" target="_blank" href="https://t.me/blackcollateralannouncements"><img src={Telegram} alt="icon" /></a>
                </div>
                <p className="copyright">
                    Copyright © 2021 Black
                </p>
            </Container>
        </div>
    );
}

export default Footer;