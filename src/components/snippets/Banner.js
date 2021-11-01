import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Video from '../../assets/video/hero-video.mp4';

const Banner = () => {
    return (
        <div className="home-banner bg-black">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-md-0 mb-5">
                        <h1 data-aos="fade-up">BLACK COLLATERAL</h1>
                        <h4 data-aos="fade-up">AN INTELLIGENT STORE OF VALUE BET AGAINST BITCOIN</h4>
                        {/* <a href="/" data-aos="fade-up" className="btn btn-outline-white">Buy Black</a> */}
                        <a data-aos="fade-up" rel="noreferrer" target="_blank" href="https://www.carbonix.finance/home" className="btn btn-sm btn-blue">BUY BLACK</a>
                        <a data-aos="fade-up" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" className="btn btn-sm btn-blue">EXPLAINER VIDEO</a>
                        <a data-aos="fade-up" rel="noreferrer" target="_blank" href="https://www.carbonix.finance/home" className="btn btn-sm btn-blue">STAKING</a>
                        <a data-aos="fade-up" rel="noreferrer" target="_blank" href="https://www.carbonix.finance/home" className="btn btn-sm btn-blue">BURN VAULT</a>
                        <a data-aos="fade-up" rel="noreferrer" target="_blank" href="https://www.carbonix.finance/home" className="btn btn-sm btn-blue">DASHBOARD</a>
                        <a data-aos="fade-up" href="https://verify-with.blockpass.org/?clientId=blackcollateralkyc_3f420&serviceName=BlackCollateral-KYC&env=prod" rel="noreferrer" target="_blank" className="btn btn-sm btn-blue">BLOCKPASS KYC</a>
                    </Col>
                    <Col md={6}>
                        <video data-aos="fade-up" data-aos-delay="300" controls={false} loop={true} autoPlay={true} muted={true} playsinline>
                            <source src={Video} type="video/mp4" />
                            <track kind="captions" srclang="en" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>

                <Row className="banner-cards-row d-none text-uppercase text-center">
                    <Col xs={6} md={3} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="banner-card">
                            <h2>1500</h2>
                            <h6>CURRENT PRICE</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="banner-card">
                            <h2>2500</h2>
                            <h6>SUPPLY</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="banner-card">
                            <h2>350</h2>
                            <h6>MARKET CAP</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="banner-card">
                            <h2>3200</h2>
                            <h6>LIQUIDITY</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;