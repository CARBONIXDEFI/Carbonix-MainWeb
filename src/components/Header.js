import React from 'react';
import {Container} from 'react-bootstrap';

import Logo from '../assets/images/logo-svg.svg';

function Header() {
    return (
        <header className="header bg-black">
            <Container className="d-flex align-items-center justify-content-between">
                <a href="/" className="header-logo"><img src={Logo} alt="logo" /></a>

                <div class="dropdown">
                    <button id="dropdown-basic" aria-expanded="true" type="button" class="btn btn-outline-white dropdown-toggle btn btn-primary">WHITEPAPER</button>
                    <div
                        x-placement="bottom-start"
                        aria-labelledby="dropdown-basic"
                        class="dropdown-menu"
                        data-popper-reference-hidden="false"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-start"
                    >
                        <a rel="noreferrer" target="_blank" href="https://github.com/CARBONIXDEFI/Whitepaper" data-rr-ui-dropdown-item="" class="dropdown-item">WHITEPAPER</a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/CARBONIXDEFI/Whitepaper/blob/main/BLACKCOLLATERAL_LitePaperV2.2.pdf" data-rr-ui-dropdown-item="" class="dropdown-item">Lite Paper</a>
                        <a rel="noreferrer" target="_blank" href="https://github.com/CARBONIXDEFI/Whitepaper" data-rr-ui-dropdown-item="" class="dropdown-item">Token Metrics</a>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;