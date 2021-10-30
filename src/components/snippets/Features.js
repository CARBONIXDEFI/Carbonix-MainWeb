import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import FeatureBlock1 from '../../assets/images/feature_image_1.png';
import FeatureBlock2 from '../../assets/images/feature_image_2.png';
import FeatureBlock3 from '../../assets/images/feature_image_3.png';

import TokenImage from '../../assets/images/token_metrics.png';

const Features = () => {
    return (
        <div className="py-100 features-section">
            <Container>
                <div className="section-title text-center text-uppercase" data-aos="fade-up">
                    <h2>FEATURES</h2>
                </div>

                <Row className="align-items-center mb-md-4 mb-5">
                    <Col md={5} className="order-md-2 mb-md-0 mb-4 text-center" data-aos="fade-left" data-aos-delay="200">
                        <img src={FeatureBlock1} alt="AboutBlock1" className="img-fluid" />
                    </Col>
                    <Col md={7} data-aos="fade-up">
                        <h3 data-aos="fade-up">TIME-LOCK MECHANISM</h3>
                        <p data-aos="fade-up" data-aos-delay="100">A novel design that prevents investors from selling their assets in large quantities. By enabling the time-lock, asset holders, especially whales, can't manipulate the price significantly, resulting in a long-regulated purchase power increase.</p>
                    </Col>
                </Row>
                <Row className="align-items-center mb-md-4 mb-5">
                    <Col md={5} className="mb-md-0 mb-4 text-center" data-aos="fade-right" data-aos-delay="200">
                        <img src={FeatureBlock2} alt="AboutBlock1" className="img-fluid" />
                    </Col>
                    <Col md={7} data-aos="fade-up">
                        <h3 data-aos="fade-up">BURN VAULT</h3>
                        <p data-aos="fade-up" data-aos-delay="100" style={{maxWidth: '100%'}}>A decentralized crypto reserve design that provides minimum collateral price guarantee irrespective of the market condition during the panic period. Burn Vault accumulates the transaction fees in a separate contract address where users may choose to cash out at any point in time, similar to the Federal Gold Reserve, without impacting the market price. The assets stored in the Vault always grow and proportional to the daily transaction volume. Moreover, the tokens swapped via Burn Vault will be removed permanently from circulation.</p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-md-4 mb-5">
                    <Col md={5} className="order-md-2 mb-md-0 mb-4 text-center" data-aos="fade-left" data-aos-delay="200">
                        <img src={FeatureBlock3} alt="AboutBlock1" className="img-fluid" />
                    </Col>
                    <Col md={7} data-aos="fade-up">
                        <h3 data-aos="fade-up">AUTOMATED LIQUIDITY POOL</h3>
                        <p data-aos="fade-up" data-aos-delay="100">prevents exchange liquidity fluctuation to a greater extent by locking 0.5% of every transaction back in the liquidity pool. The price stability of the crypto assets is vital from the investor's standpoint, where ALM plays a vital role.</p>
                    </Col>
                </Row>

                <div className="pt-5 d-none text-center">
                    <div className="section-title text-center text-uppercase" data-aos="fade-up" data-aos-delay="200">
                        <h3>TOKEN METRICS</h3>
                    </div>

                    <img src={TokenImage} alt="token" className="img-fluid" data-aos="fade-up" data-aos-delay="300" />
                </div>
            </Container>
        </div>
    );
};

export default Features;