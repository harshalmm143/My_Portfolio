import React, { useRef } from 'react'
import './Pservice.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaLaptop, FaTwitter, FaMobile, FaSistrix, FaCodepen } from 'react-icons/fa';
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/lib/styles.css';
import web from './img/web-design.jpg'
import dev from './img/web-development.jpg'
import seo from './img/seo-optimization.jpg'
import mobile from './img/timeline-img.jpg'
import social from './img/social-media.jpg'


function Pservice() {

    const car = useRef()

    const options = {
        items: 1,
        rewind: true,
        autoplay:true
    };

    const events = {
        onDragged: function (event) { },
        onChanged: function (event) { }
    };
    return (
        <div id='services'>
            <h2 className='service-head'>SERVICES WE OFFER</h2>
            <p class="service-subtitle">-Exceptional level of service-</p>
            <Container >
                <OwlCarousel ref={car} options={options} events={events} >
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <img src={web} className='Pservice-img' />
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <div className='pservice-info'>
                                    <i><FaLaptop size={40} color='purple' /></i>
                                    <h3>WEB DESIGN</h3>
                                    <p>Decorations don’t drive home messages. Content does. Reducing text-based
                                        content to a visual design element (the shape of the text) can result in
                                        bloated and unrealistic client expectations once real data replaces the
                                        dummy content. We allow our design decisions to be dictated by the on-page
                                        content and messaging, and often our designers use the actual content to
                                        inspire interesting elements that might not have been conceived without it.</p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <img src={dev} className='Pservice-img' />
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <div className='pservice-info'>
                                    <i><FaCodepen size={40} color='purple' /></i>
                                    <h3>WEB DEVELOPMENT</h3>
                                    <p>Once we have come up with a unique design and have finalized the textures and
                                        graphics to be added, the next step is to make it all come together. And
                                        that is what we aim to achieve at our web development agency India. Only a
                                        professionally designed website can justify the uniqueness of your idea and
                                        this is a fact clearly understood by our team.
                                        While a good design can impress the users, it is the codes and development
                                        process that ensures that your target users will find the browsing
                                        experience equally amazing as your design.</p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <img src={mobile} className='Pservice-img' />
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <div className='pservice-info'>
                                    <i><FaMobile size={40} color='purple' /></i>
                                    <h3>MOBILE DEVELOPMENT</h3>
                                    <p>With an increasing importance being given to smart phones, and mobile apps,
                                        it has become immensely important to include app development as part of web
                                        design services. Our team is known to provide excellent and extraordinary
                                        apps that are unique in every way. All the apps developed by our team are
                                        based on providing interesting features combined with enhanced
                                        functionality. With a mobile app in place, you can increase the reach of
                                        your brand and broaden its horizons too. You can have an easy to use
                                        professional app created that provides ease of functionality and an amazing
                                        appeal.</p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <img src={seo} className='Pservice-img' />
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <div className='pservice-info'>
                                    <i><FaSistrix size={40} color='purple' /></i>
                                    <h3>SEO OPTIMIZATION</h3>
                                    <p>Search engine optimization (SEO) is the process of improving the visibility
                                        of a web site in search engines. Consumer puts a lot of trust in search
                                        engines to find what they need. Google receives 34,000 searches per second.
                                        Those searches involve finding products, reviewing brands, and looking up
                                        business locations.</p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={6}>
                                <img src={social} className='Pservice-img' />
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <div className='pservice-info'>
                                    <i><FaTwitter size={40} color='purple' /></i>
                                    <h3>SOCIAL MEDIA</h3>
                                    <p>Social Media, has become an essential tool of marketing an online business.
                                        It gives you a platform to interact and inform people about yourself and
                                        your brand. The concept of social media basically refers to the task of
                                        promoting websites or business through social media platforms.</p>
                                </div>

                            </Col>
                        </Row>
                    </Container>



                </OwlCarousel>
            </Container>

        </div>
    )
}

export default Pservice