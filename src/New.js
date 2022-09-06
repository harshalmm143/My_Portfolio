import React from 'react'
import './New.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { BiCodeAlt, BiCodeCurly, BiPlus } from "react-icons/bi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import 'animate.css';

// import { Link } from "react-router-dom";

function New() {
    return (
        <div>
            <Container className='asdf'>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <div className='ACards'>
                            <div className='icon-div'>
                                <BiCodeCurly className="animate__tada" />
                            </div>
                            <div className="clr1">
                                <h2>PROGRAMMING<br />
                                    LANGUAGES
                                </h2>
                            </div>
                            <div className="wbox">
                                <strong>Programming</strong>
                                <p>C Programming<br />
                                    C++ Programming<br />
                                    Python Programming<br />
                                    Java Programming</p>
                            </div>
                            <a to="/Home.js"
                                className="clr1-a"
                            >
                                <BiPlus className='animate__shakeY' />
                            </a>

                        </div>

                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className='ACards'>
                            <div className='icon-div'>
                                <BiCodeAlt className="animate__tada" />
                            </div>
                            <div className="clr2">
                                <h2>PROGRAMMING<br />
                                    LANGUAGES
                                </h2>
                            </div>
                            <div className="wbox">
                                <strong>Programming</strong>
                                <p>C Programming<br />
                                    C++ Programming<br />
                                    Python Programming<br />
                                    Java Programming</p>


                            </div>
                            <a to="/Home.js"
                                className="clr2-a"
                            >
                                <BiPlus className='animate__shakeY' />
                            </a>


                        </div>

                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className='ACards'>
                            <div className='icon-div'>
                                <MdOutlinePhoneAndroid className="animate__tada" />

                            </div>
                            <div className="clr3">
                                <h2>PROGRAMMING<br />
                                    LANGUAGES
                                </h2>
                            </div>
                            <div className="wbox">
                                <strong>Programming</strong>
                                <p>C Programming<br />
                                    C++ Programming<br />
                                    Python Programming<br />
                                    Java Programming</p>


                            </div>

                            <a to="/Home.js"
                                className="clr3-a"
                            >
                                <BiPlus className='animate__shakeY' />
                            </a>

                        </div>

                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className='ACards'>
                            <div className='icon-div'>
                                <FaLaptopCode className="animate__tada" />
                            </div>
                            <div className="clr4">
                                <h2>PROGRAMMING<br />
                                    LANGUAGES
                                </h2>

                            </div>



                            <div className="wbox">

                                <strong>Programming</strong>
                                <p>C Programming<br />
                                    C++ Programming<br />
                                    Python Programming<br />
                                    Java Programming</p>

                            </div>
                            <a to="/Home.js"
                                className="clr4-a"
                            >
                                <BiPlus className='animate__shakeY' />
                            </a>


                        </div>

                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default New