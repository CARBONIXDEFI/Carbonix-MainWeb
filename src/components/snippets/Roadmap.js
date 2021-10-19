import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


const Roadmap = () => {
    return (
        <div className="py-100 road-map bg-black">
            <Container>
                <div className="section-title text-center text-uppercase" data-aos="fade-up">
                    <h2>Roadmap</h2>
                </div>

                <Row className="justify-content-between text-center roadmap-row">
                    <Col md={'auto'} xs={12} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="roadmap-info">
                            <div className="number_circle">Q4<br /> 2020</div>
                            <p>Proof of Concept Technical Whitepaper Finalize Platform</p>
                        </div>
                    </Col>
                    <Col md={'auto'} xs={12} className="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="roadmap-info">
                            <div className="number_circle">Q1<br /> 2021</div>
                            <p>Finalize Solution Architecture Complete development</p>
                        </div>
                    </Col>
                    <Col md={'auto'} xs={12} className="mb-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="roadmap-info">
                            <div className="number_circle">Q2<br /> 2021</div>
                            <p>Setup Social Platform Deploy TestNet Certik Audit Digital Marketing Public Sale Deploy Smart Contracts Token Generation</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col md={5} xs={12} className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="roadmap-info">
                            <div className="number_circle">Q3<br /> 2021</div>
                            <p>CoinMarketCap & CoinGecko Listings DEX Listing Governance Launch Dashboard Launch</p>
                        </div>
                    </Col>
                    <Col md={5} xs={12} className="mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="roadmap-info">
                            <div className="number_circle">Q4<br /> 2021</div>
                            <p>Additional Marketing Staking Platform Launch CARBON FINANCE Launch CentralizedEX Listings BLACK - DEFI Protocols Partnerships</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Roadmap;