import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import TeamIcon1 from '../../assets/images/team_icon1.png';
import TeamIcon2 from '../../assets/images/team_icon2.png';
import TeamIcon3 from '../../assets/images/team_icon3.png';
import TeamIcon4 from '../../assets/images/team_icon4.png';
import TeamIcon5 from '../../assets/images/team_icon5.png';

const Roadmap = () => {
    return (
        <div className="py-100 pt-0 bg-black">
            <Container>
                <div className="section-title text-center text-uppercase" data-aos="fade-up" data-aos-delay="200">
                    <h2>Team</h2>
                </div>

                <p className="text-center" data-aos="fade-up" data-aos-delay="200">We're from one of the world-class institutions specialized in blockchain development, economics, and decentralized finance. Our objective is to create a frictionless world by redefining the way people build and use finance applications. Team BLACK has collective experience from leading Fortune 500 tech companies to high-growth blockchain firms.</p>

                <hr className="my-80" />
                
                <Row className="align-items-center team-logos justify-content-around">
                    <Col xs={'auto'} className="mb-3" data-aos="fade-up" data-aos-delay="100">
                        <img src={TeamIcon1} alt="team icon" className="img-fluid" />
                    </Col>
                    <Col xs={'auto'} className="mb-3" data-aos="fade-up" data-aos-delay="200">
                        <img src={TeamIcon2} alt="team icon" className="img-fluid" />
                    </Col>
                    <Col xs={'auto'} className="mb-3" data-aos="fade-up" data-aos-delay="300">
                        <img src={TeamIcon3} alt="team icon" className="img-fluid" />
                    </Col>
                    <Col xs={'auto'} className="mb-3" data-aos="fade-up" data-aos-delay="400">
                        <img src={TeamIcon4} alt="team icon" className="img-fluid" />
                    </Col>
                    <Col xs={'auto'} className="mb-3" data-aos="fade-up" data-aos-delay="500">
                        <img src={TeamIcon5} alt="team icon" className="img-fluid" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Roadmap;