import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import AboutBlock1 from '../../assets/images/about_black_1.svg';
import AboutBlock2 from '../../assets/images/about_black_2.png';
import PD_icon1 from '../../assets/images/pd_icon1.png';
import PD_icon2 from '../../assets/images/pd_icon2.png';
import PD_icon3 from '../../assets/images/pd_icon3.png';
import PD_icon4 from '../../assets/images/pd_icon4.png';
import PD_icon5 from '../../assets/images/pd_icon5.png';

const AboutBlack = () => {
    return (
        <div className="py-100 about-section">
            <Container>
                <div className="section-title text-center text-uppercase"  data-aos="fade-up">
                    <h2>ABOUT BLACK</h2>
                </div>

                <Row className="align-items-center mb-md-4 mb-5">
                    <Col md={5} className="order-md-2 mb-md-0 mb-4 text-center" data-aos="fade-left" data-aos-delay="200">
                        <img src={AboutBlock1} alt="AboutBlock1" className="img-fluid" />
                    </Col>
                    <Col md={7}>
                        <h3 data-aos="fade-up">A BETTER ALTERNATIVE TO GOLD</h3>
                        <p data-aos="fade-up" data-aos-delay="100">BLACK aims to be the world's first NON-DEPRECIATING Smart Money with all the characteristics of GOLD by introducing three innovative protocol operations that help increase the purchasing power over time significantly</p>
                    </Col>
                </Row>

                <Row className="align-items-center justify-content-between mb-md-4 mb-5">
                    <Col md={5} className="mb-md-0 mb-4 text-center" data-aos="fade-right" data-aos-delay="200">
                        <img src={AboutBlock2} alt="AboutBlock2" className="img-fluid" />
                    </Col>
                    <Col md={6} data-aos="fade-up">
                        <h3 data-aos="fade-up">SAFE DEFI ASSET</h3>
                        <p data-aos="fade-up" data-aos-delay="100">The protocol dynamics are structured to increase the purchase power linearly after every transaction making it one of the robust candidates as a minimum guarantee collateral for DEFI protocols and long-term investors.</p>
                    </Col>
                </Row>

                <div className="pt-5 text-center d-none">
                    <h3 className="mb-5 mt-3 pb-md-3" data-aos="fade-up">PROTOCOL DYNAMICS</h3>

                    <Row className="text-center justify-content-center">
                        <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="100">
                            <div className="card-info px-1">
                                <img src={PD_icon1} alt="icon" />
                                <p>Regulates purchase power by enforcing a time-lock on the holder's wallet, due to which one can't sell more than 1% of the asset in 24 hours.</p>
                            </div>
                        </Col>
                        <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
                            <div className="card-info px-1">
                                <img src={PD_icon2} alt="icon" />
                                <p>Regulates supply after every transaction by burning 4% of the transaction amount forever from circulation.</p>
                            </div>
                        </Col>
                        <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="300">
                            <div className="card-info px-1">
                                <img src={PD_icon3} alt="icon" />
                                <p>Regulates exponential rewards by distributing 4% of the transaction amount equally among holders.</p>
                            </div>
                        </Col>
                        <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="100">
                            <div className="card-info px-1">
                                <img src={PD_icon4} alt="icon" />
                                <p>Regulates selling pressure fluctuations by accumulating 1% of the transaction amount in Burn Vault.</p>
                            </div>
                        </Col>
                        <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
                            <div className="card-info px-1">
                                <img src={PD_icon5} alt="icon" />
                                <p>Regulates exchange liquidity fluctuations by locking 1% of the transaction amount in LP.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AboutBlack;