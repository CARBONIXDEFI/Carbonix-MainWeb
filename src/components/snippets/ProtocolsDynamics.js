import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import PD_icon1 from '../../assets/images/pd_icon1.png';
import PD_icon2 from '../../assets/images/pd_icon2.png';
import PD_icon3 from '../../assets/images/pd_icon3.png';
import PD_icon4 from '../../assets/images/pd_icon4.png';
import PD_icon5 from '../../assets/images/pd_icon5.png';

const ProtocolsDynamics = () => {
    return (
        <div className="py-100 about-section">
            <Container>
                <div className="section-title text-center text-uppercase"  data-aos="fade-up">
                    <h2>PROTOCOL DYNAMICS</h2>
                </div>

                <div className="pt-5 text-center">
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

export default ProtocolsDynamics;