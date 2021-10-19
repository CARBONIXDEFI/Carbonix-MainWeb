import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import AddressIcon1 from '../../assets/images/address_icon1.svg'
import AddressIcon2 from '../../assets/images/address_icon2.svg'
import AddressIcon3 from '../../assets/images/address_icon3.svg'
import AddressIcon4 from '../../assets/images/address_icon4.svg'
import AddressIcon5 from '../../assets/images/address_icon5.svg'
import AddressIcon6 from '../../assets/images/address_icon6.svg'

const Addresses = () => {
    return (
        <div className="py-100 bg-black text-center">
            <Container fluid={'xl'}>
                <div className="section-title text-uppercase" data-aos="fade-up">
                    <h2>WHAT PROBLEMS DOES BLACK ADDRESSES?</h2>
                </div>

                <Row className="text-center">
                    <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="100">
                        <div className="card-info px-1">
                            <img src={AddressIcon1} alt="icon" />
                            <h5>WHALE-PROOF DEFI FARMING</h5>
                            <p>Whales usually eat a high percentage of all DeFi farming benefits than average users due to their extensive portfolio allocation. Black protocol fundamentals potentially limit the staking percentage across all wallets, and as a result, the benefits are evenly distributed to the users.</p>
                        </div>
                    </Col>
                    <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
                        <div className="card-info px-1">
                            <img src={AddressIcon2} alt="icon" />
                            <h5>BITCOIN CORRELATION</h5>
                            <p>The entire ethos of BLACK is a paradigm shift from price-based trading strategies to time-based trading strategies.</p>
                        </div>
                    </Col>
                    <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="300">
                        <div className="card-info px-1">
                            <img src={AddressIcon3} alt="icon" />
                            <h5>TIME BOUND SELL RATIO</h5>
                            <p>BLACK controls the time-demand equilibrium every 24 hours using the Time-Lock mechanism tied to the number of tokens each investor holds in their wallets</p>
                        </div>
                    </Col>
                    <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="100">
                        <div className="card-info px-1">
                            <img src={AddressIcon4} alt="icon" />
                            <h5>DIVERSIFIED PORTFOLIO</h5>
                            <p>BLACK offers an entirely different model to minimize portfolio classification risks, making it one of the best low-risk strategies for long-term asset holders who want to bet against bitcoin</p>
                        </div>
                    </Col>
                    <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
                        <div className="card-info px-1">
                            <img src={AddressIcon5} alt="icon" />
                            <h5>DEFLATION PROTECTION</h5>
                            <p>BLACK fundamentally has the same GOLD characteristics as a store of value, making it a worthy investment to de-risk from the value collapse</p>
                        </div>
                    </Col>
                    <Col className="mb-5" xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="300">
                        <div className="card-info px-1">
                            <img src={AddressIcon6} alt="icon" />
                            <h5>EXPONENTIAL REWARDS</h5>
                            <p>BLACK holders earn passive trustless rewards instantly and the benefits are directly proportional to the holding time, very similar to traditional bonds and certificates</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Addresses;