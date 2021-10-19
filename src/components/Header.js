import React from 'react';
import {Container, Dropdown} from 'react-bootstrap';

import Logo from '../assets/images/logo.png';

function Header() {
    return (
        <header className="header bg-black">
            <Container className="d-flex align-items-center justify-content-between">
                <a href="/" className="header-logo"><img src={Logo} alt="logo" /></a>
                <Dropdown>
                    <Dropdown.Toggle className="btn btn-outline-white" id="dropdown-basic">
                        WHITEPAPER
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item rel="noreferrer" target="_blank" href="https://github.com/BLACKCOLLATERAL/Whitepaper/blob/main/ProjectBlack_WhitepaperV2.1.pdf">WHITEPAPER</Dropdown.Item>
                        <Dropdown.Item rel="noreferrer" target="_blank" href="https://github.com/BLACKCOLLATERAL/Whitepaper/blob/main/BLACKCOLLATERAL_LitePaper.pdf">Lite Paper</Dropdown.Item>
                        <Dropdown.Item rel="noreferrer" target="_blank" href="https://bit.ly/3wnNWMz">Token Metrics</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
            </Container>
        </header>
    );
}

export default Header;