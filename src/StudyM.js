import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import './StudyM.css'
import {FaArrowRight} from 'react-icons/fa';

function StudyM() {
    return (
        <div>
            <Container className='asdf'>
                <Row>
                    <Col>
                        <div className='Cards'>
                            <div className='ImageBox'>
                                <Image className='Images' src='https://images.pexels.com/photos/11431628/pexels-photo-11431628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <h1>books</h1>
                            </div>
                            <div className='Content'>
                                <Button className='sm-button'>
                                    See All &nbsp;<FaArrowRight className='icons'/>
                                </Button>

                            </div>
                        </div>

                        

                    </Col>
                    <Col>
                        <div className='Cards'>
                            <div className='ImageBox'>
                                <Image className='Images' src='https://images.pexels.com/photos/11431628/pexels-photo-11431628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                                <h1>books</h1>
                            </div>
                            <div className='Content'>
                                <Button className='sm-button'>
                                    See All &nbsp;<FaArrowRight className='icons'/>
                                </Button>

                            </div>
                        </div>

                        

                    </Col>
                    
                    
                </Row>
            </Container>
        </div>
    )
}

export default StudyM