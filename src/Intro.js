import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import './Intro.css'
import { FaHireAHelper } from 'react-icons/fa'
import { BsCalendarDay, BsFillChatQuoteFill, BsCheckLg, BsPaintBucket } from 'react-icons/bs'
import 'animate.css';


function Intro() {
  return (
    <div className='Intro-div'>
      <h1 className='Intro-head'>HELLO & WELCOME</h1>
      <h2 className='Intro-line'>- EXPLORE OUR WORLD -</h2>
      <Container className='mt-5'>
        <Row>
          <Col sm={12} md={12} lg={4}>
            <div className='Intro-info'>
              <h6><i><BsCalendarDay size={28} /></i> We Meet Deadlines</h6>
              <p> Your deadline is the most important value for us.
                Our job is to make sure the job is done perfectly before the deadline.</p>
            </div>

            <div className='Intro-info'>
              <h6> <i><BsFillChatQuoteFill size={28} /></i> Communication Is Key</h6>
              <p> Our team is available to check on your questions and take
                in feedback as soon as possibly.</p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className='animate__hinge'>
              <FaHireAHelper size={250} color='purple' />
            </div>

          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className='Intro-info'>
              <h6><i><BsCheckLg size={28} /></i> Quality Control</h6>
              <p> We test out everything to make sure that your project is fully functional,
                cross–browser compatible and meets your specifications.</p>
            </div>

            <div className='Intro-info'>
              <h6><i>< BsPaintBucket size={28} /></i>  Pixel Perfect</h6>
              <p> We develop meaningful digital products
                and experiences that matter with design thinking
                and creative craftsmanship.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="section-background section-quote background-overlay text-center">
        <div >
          <p>We make our <span>work look good</span> &amp; have experience in the creation of brand identities for
            <span>print &amp; web</span>, with a difference.</p>
        </div>
      </section>
    </div>

  )
}

export default Intro