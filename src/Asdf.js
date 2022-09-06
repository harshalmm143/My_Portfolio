import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Asdf.css'

function Asdf() {
  return (
    <div>
    <Container>
        <Row>
            <Col>
            <div class="col-sm-4">
                        <div class="main-service text-right">
                            <div class="rectange">
                                <i class="fa fa-calendar" aria-hidden="true"></i>
                            </div>
                            <h3>We Meet Deadlines</h3>
                            <p>Your deadline is the most important value for us. Our job is to make sure the job is done
                                perfectly before the deadline.</p>
                        </div>
                        <div class="main-service text-right">
                            <div class="rectange">
                                <i class="fa fa-comments" aria-hidden="true"></i>
                            </div>
                            <h3>Communication Is Key</h3>
                            <p>Our team is available to check on your questions and take in feedback as soon as
                                possibly.</p>
                        </div>
                    </div>
            </Col>
            
            <Col>
            <div class="col-sm-4">
                        <div class="main-service text-right">
                            <div class="rectange">
                                <i class="fa fa-calendar" aria-hidden="true"></i>
                            </div>
                            <h3>We Meet Deadlines</h3>
                            <p>Your deadline is the most important value for us. Our job is to make sure the job is done
                                perfectly before the deadline.</p>
                        </div>
                        <div class="main-service text-right">
                            <div class="rectange">
                                <i class="fa fa-comments" aria-hidden="true"></i>
                            </div>
                            <h3>Communication Is Key</h3>
                            <p>Our team is available to check on your questions and take in feedback as soon as
                                possibly.</p>
                        </div>
                    </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Asdf