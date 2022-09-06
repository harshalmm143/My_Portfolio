import React from 'react'
import './Contact.css'
import { Form , Button, Container, Row,Nav}from 'react-bootstrap'
import { Link } from "react-scroll"
import{FaFacebookSquare,FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'


function Contact() {
  return (
    <div> 

               
        <Container className='Contact-container'>
                <h2 className='Contact-title'>CONTACT  HARSH</h2>
                <h2 className='Contact-subtitle'>-Here i am-</h2>
            <Row className='Contact-row'>
            <Form>
                <div className='Form'>
                <Form.Control className='Form-Control'type="text" placeholder="Name" />
                <Form.Control className='Form-Control'type="email" placeholder="Email" />
                <Form.Control className='Form-Control'type="text" placeholder="Subject" />
                </div>
                 <div className='FormMassage'>
                <textarea className='Form-Control' placeholder="Your Massage"/>
                </div>
                
                   <Button className='Contact-button ' type="submit">
                   Send Message
                </Button>
            </Form>
            </Row>
         </Container>

         <div className="container-fluid bg-primary text-white mt-5 py-2 px-sm-3 px-md-5">
        <div className="container text-center py-5">
            <div className="d-flex justify-content-center mb-4">
                <FaFacebookSquare size={25} className='footer-icon'/>
                <FaLinkedin size={25} className='footer-icon'/>
                <FaInstagram size={25} className='footer-icon'/>
                <FaTwitter size={25} className='footer-icon'/>
            </div>
            <div class=" d-flex justify-content-center mb-4 ">
            <Nav >
            <Link to="frantpage" spy={true} smooth={true} offset={-100} duration={500} className='Flink'>HOME</Link>
            <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} className='Flink'>INTRO</Link>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='Flink' >ABOUT</Link>
            <Link to="skill" spy={true} smooth={true} offset={-100} duration={500} className='Flink'>SKILLS</Link>
            <Link to="team" spy={true} smooth={true} offset={-100} duration={500} className='Flink'>TEAM</Link>
            <Link to="services" spy={true} smooth={true} offset={-100} duration={500} className='Flink'>SERVICES</Link>
            <Link to="work" spy={true} smooth={true} offset={-100} duration={500} className='Flink'>WORK</Link>
            <Link to="history" spy={true} smooth={true} offset={-20} duration={500} className='Flink'>EDUCATION</Link>
            <Link to="contact" spy={true} smooth={true} offset={-20} duration={500} className='Flink'>CONTACT</Link>
            
          </Nav>
            </div>
            <p class="m-0">&copy; <a class="text-white font-weight-bold" href="http://www.technoweit.com/" target="_blank">Technoweit</a>. All Rights Reserved. Designed by <a class="text-white font-weight-bold">Harshal Mahajan.</a>
            </p>
        </div>
    </div>
    </div>
  )
}

export default Contact