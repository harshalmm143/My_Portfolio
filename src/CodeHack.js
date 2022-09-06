import React from 'react'
import './CodeHack.css'
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import downline from "./img/downline.jpg"
import {FaArrowRight} from 'react-icons/fa';
import 'animate.css';

function CodeHack() {
    return (
        <div>
            <Container className="aboutcontainer">
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Cards'>
                            <Card.Img className="timg" variant="top" src={'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                            <Card.Body className="t-box">
                                <Card.Title className='Ctitle'>C PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    C is an imperative procedural language supporting structured
                                    programming, lexical variable scope, and recursion, with a
                                    static type system.
                                </Card.Text>
                            </Card.Body>


                            <Image className='Downline' src={downline} />

                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Cards'>
                            <Card.Img className="timg" variant="top" src={'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                            <Card.Body className="t-box">
                                <Card.Title className='Ctitle'>C++ PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    C++ is a cross-platform language that can be used to create
                                    high-performance applications.
                            
                                </Card.Text>
                            </Card.Body>
                            <Image className='Downline' src={downline} />

                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Cards'>
                            <Card.Img className="timg" variant="top" src={'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                            <Card.Body className="t-box">
                                <Card.Title className='Ctitle'>PYTHON PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    Python is a computer programming language often used to build
                                    websites and software, automate tasks, and conduct data
                                    analysis.
                                </Card.Text>
                                
                            </Card.Body>
                            <Image className='Downline' src={downline} />

                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Cards'>
                            <Card.Img className="timg" variant="top" src={'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                            <Card.Body className="t-box">
                                <Card.Title className='Ctitle'>JAVA PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    Java is an object-oriented programming language that produces
                                    software for multiple platforms.
                                    
                                </Card.Text>
                                
                            </Card.Body>
                            <Image className='Downline' src={downline} />

                        </Card>
                    </Col>
                </Row>
                <a to="/codehacks" >
                    <Button className="Button">
                        EXPLORE
                            <FaArrowRight className='animate__pulse'/>
                    </Button>

                </a>
            </Container>

        </div>
    )
}

export default CodeHack