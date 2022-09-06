import React from 'react'
import { Container, Row, Image, Col, Button } from 'react-bootstrap'
import './About.css'
import 'animate.css'
import profile from "../src/img/Screenshot 2022-09-06 185111.png"

function About() {
    return (
        <div>
            <h2 className='About-Title'>ABOUT HARSHAL</h2>
            <h2 className='About-Subtitle'>--Our goal is to build products and services--</h2>
            <Container>

                <Row >
                    <Col sm={12} md={12} lg={6}>
                        <Image className='About-img' src={profile}></Image>
                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <div className='About-div'>
                            <h3>UI/UX Designer & Web Developer</h3>
                            <p>Creative and technical web development professional with one years of experience
                                looking for a position with Webscape Tech where I can enhance my knowledge of
                                principles and grow with the organization.</p>
                            <div class="about-details">
                                <h6>Name: <span>Harshal Mahajan.</span></h6>
                                <h6>Birthday: <span>30 Nov 1996</span></h6>
                                <h6>Degree: <span>Master In Computer Science</span></h6>
                                <h6>Experience: <span>1 Years</span></h6>
                                <h6>Phone: <span>+918975795333</span></h6>
                                <h6>Email: <span>harshalmm143@gmail.com</span></h6>
                                <h6>Address: <span>At.Post Khadke,Bhusawal.</span></h6>
                                <h6>Freelance: <span>Available</span></h6>
                            </div>
                            <Button className="btn-outline-primarys">Hire Me</Button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About