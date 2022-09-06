import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Team.css'
import ashish from './img/ashish.jpeg'
import diksha from './img/diksha.jpeg'
import vidya from './img/vidya.jpeg'
import harshad from './img/HARSHAD.jpeg'




function Team() {
    return (
        <div>
            <h1 className='Team-head'>MEET MY TEAM</h1>
            <h1 className='Team-line'>This is the team that is working with me</h1>
            <Container className='Team-container'>
                <Row className="team">
                    <Col sm={12} md={12} lg={3}>
                        <div className="team-member">
                            <div className="flipper">
                                <div className="team-member-front">
                                    <Card >
                                        <Card.Img className="team-member-Image" src={ashish} />
                                        <Card.Title className="team-member-front-name">ASHISH BENDALE</Card.Title>
                                    </Card>
                                </div>
                                <div className="team-member-back">
                                    <div className="team-member-info">
                                        <h3 className="team-member-back-name">ASHISH BENDALE</h3>
                                        <p className="team-member-back-position">Android Developer</p>
                                        <p className="team-member-back-info">An Android Developer is a Software Developer who specializes in designing applications for the Android marketplace.
                                         The Android marketplace is the direct competitor to Apple's app store. </p>
                                        <div className='Icon'>
                                            <a href='https://www.facebook.com/Technoweit-261828089010737/' target="_blank" className="Social-icon-small"> <FaFacebookF size={23} /></a>
                                            <a href='https://www.instagram.com/technoweit/' target="_blank" className="Social-icon-small"> <FaInstagram size={23} /></a>
                                            <a href='https://twitter.com/AshishBendale77?s=09' target="_blank" className="Social-icon-small"> <FaTwitter size={23} /></a>
                                            <a href='https://www.linkedin.com/in/ashish-bendale-526243195' target="_blank" className="Social-icon-small"> <FaLinkedinIn size={23} /></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={3}>
                        <div className="team-member">
                            <div className="flipper">
                                <div className="team-member-front">
                                    <Card >
                                        <Card.Img className="team-member-Image" src={vidya} />
                                        <Card.Title className="team-member-front-name">VIDYA SONAWANE</Card.Title>
                                    </Card>
                                </div>
                                <div className="team-member-back">
                                    <div className="team-member-info">
                                        <h3 className="team-member-back-name">VIDYA SONAWANE</h3>
                                        <p className="team-member-back-position">React Native Developer</p>
                                        <p className="team-member-back-info">React Native is an open-source UI software framework created by Meta Platforms, Inc. It is widely used to develop 
                                        applications for Android, Android TV, tvOS, Web, Windows, iOS, macOS, and UWP.  </p>
                                        <div className='Icon' >
                                            <a href='https://www.facebook.com/login/' target="_blank" className="Social-icon-small"> <FaFacebookF size={23} /></a>
                                            <a href='https://www.instagram.com/invites/contact/?i=1d6tis02kr2lm&utm_content=lyjpykw' target="_blank" className="Social-icon-small"> <FaInstagram size={23} /></a>
                                            <a href='https://twitter.com/i/flow/login' target="_blank" className="Social-icon-small"> <FaTwitter size={23} /></a>
                                            <a href='https://www.linkedin.com/in/vidya-sonawane-233486207' target="_blank" className="Social-icon-small"> <FaLinkedinIn size={23} /></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={3}>
                        <div className="team-member">
                            <div className="flipper">
                                <div className="team-member-front">
                                    <Card >
                                        <Card.Img className="team-member-Image" src={diksha} />
                                        <Card.Title className="team-member-front-name">DIKSHA CHAUDHARI</Card.Title>
                                    </Card>
                                </div>
                                <div className="team-member-back">
                                    <div className="team-member-info">
                                        <h3 className="team-member-back-name">DIKSHA CHAUDHARI</h3>
                                        <p className="team-member-back-position">Web Designer</p>
                                        <p className="team-member-back-info">Web designing is the creation of websites and pages to reflect a 
                                        company's brand and information and ensure a user-friendly experience.  </p>
                                        <div className='Icon' >
                                            <a href='https://www.facebook.com/diksha.chaudhari.58' target="_blank" className="Social-icon-small"> <FaFacebookF size={23} /></a>
                                            <a href='https://instagram.com/dikshaaa.chaudhari.kolambe?igshid=YmMyMTA2M2Y=' target="_blank" className="Social-icon-small"> <FaInstagram size={23} /></a>
                                            <a href='https://twitter.com/AshishBendale77?s=09' target="_blank" className="Social-icon-small"> <FaTwitter size={23} /></a>
                                            <a href='https://www.linkedin.com/in/diksha-chaudhari-4931171a1' target="_blank" className="Social-icon-small"> <FaLinkedinIn size={23} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={3}>
                        <div className="team-member">
                            <div className="flipper">
                                <div className="team-member-front">
                                    <Card >
                                        <Card.Img className="team-member-Image" src={harshad} />
                                        <Card.Title className="team-member-front-name">HARSHAD DANDVEKAR</Card.Title>
                                    </Card>
                                </div>
                                <div className="team-member-back">
                                    <div className="team-member-info">
                                        <h3 className="team-member-back-name">HARSHAD DANDVEKAR</h3>
                                        <p className="team-member-back-position">Data Scientist</p>
                                        <p className="team-member-back-info">Data scientists are analytical experts who utilize their skills in
                                         both technology and social science to find trends and manage data. </p>
                                        <div className='Icon'>
                                            <a href='https://www.facebook.com/login/' target="_blank" className="Social-icon-small"> <FaFacebookF size={23} /></a>
                                            <a href='https://www.instagram.com/' target="_blank" className="Social-icon-small"> <FaInstagram size={23} /></a>
                                            <a href='https://twitter.com/i/flow/login' target="_blank" className="Social-icon-small"> <FaTwitter size={23} /></a>
                                            <a href='https://in.linkedin.com/' target="_blank" className="Social-icon-small"> <FaLinkedinIn size={23} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team



