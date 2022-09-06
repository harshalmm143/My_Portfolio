import React, { useRef } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import './Services.css'
import { FaLaptop, FaTwitter, FaMobile, FaSistrix, FaCodepen } from 'react-icons/fa';
import web from './img/web-design.jpg'
import dev from './img/web-development.jpg'
import seo from './img/seo-optimization.jpg'
import mobile from './img/timeline-img.jpg'
import social from './img/social-media.jpg'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/lib/styles.css';



function Services() {
  const car = useRef()

  const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true
  };

  const events = {
    onDragged: function (event) { },
    onChanged: function (event) { }
  };
  return (
    <div >
      
      <Container className='mt-3 mb-3'>

        <OwlCarousel ref={car} options={options} events={events} >
          <div><img src={web} alt="The Last of us" /></div>
          <div><img src={dev} alt="GTA V" /></div>
          <div><img src={seo} alt="Mirror Edge" /></div> 
        
        </OwlCarousel>
        {/* <Carousel className='d-flex'>
          <Carousel.Item interval={1000} >

            <img className="Carousel-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZ5YQcO8qbx4tNJLtzpIo7VSNeNNkiVqilA&usqp=CAU"
              alt="First slide" />
            <Carousel.Caption >
              <div><img src={web} className='Image' /></div>
              <div>
                <FaLaptop className='Carousel-icon' />
                <h3 className='Carousel-header'> WEB DESIGN</h3>
                <p className='Carousel-Disp'>Decorations don’t drive home messages. Content does. Reducing text-based
                  content to a visual design element (the shape of the text) can result in
                  bloated and unrealistic client expectations once real data replaces the
                  dummy content. We allow our design decisions to be dictated by the on-page
                  content and messaging, and often our designers use the actual content to
                  inspire interesting elements that might not have been conceived without it.</p>
              </div>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="Carousel-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZ5YQcO8qbx4tNJLtzpIo7VSNeNNkiVqilA&usqp=CAU"
              alt="Second slide" />
            <Carousel.Caption>
              <img src={dev} className='Image' />
              <FaCodepen className='Carousel-icon' />
              <h3 className='Carousel-header'>WEB DEVELOPMENT</h3>
              <p className='Carousel-Disp'>Once we have come up with a unique design and have finalized the textures and
                graphics to be added, the next step is to make it all come together. And
                that is what we aim to achieve at our web development agency India. Only a
                professionally designed website can justify the uniqueness of your idea and
                this is a fact clearly understood by our team.
                While a good design can impress the users, it is the codes and development
                process that ensures that your target users will find the browsing
                experience equally amazing as your design.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="Carousel-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZ5YQcO8qbx4tNJLtzpIo7VSNeNNkiVqilA&usqp=CAU"
              alt="Third slide" />
            <Carousel.Caption>
              <img src={mobile} className='Image' />
              <FaMobile className='Carousel-icon' />
              <h3 className='Carousel-header'>MOBILE DEVELOPMENT</h3>
              <p className='Carousel-Disp'>With an increasing importance being given to smart phones, and mobile apps,
                it has become immensely important to include app development as part of web
                design services. Our team is known to provide excellent and extraordinary
                apps that are unique in every way. All the apps developed by our team are
                based on providing interesting features combined with enhanced
                functionality. With a mobile app in place, you can increase the reach of
                your brand and broaden its horizons too. You can have an easy to use
                professional app created that provides ease of functionality and an amazing
                appeal.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="Carousel-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZ5YQcO8qbx4tNJLtzpIo7VSNeNNkiVqilA&usqp=CAU"
              alt="Forth slide" />
            <Carousel.Caption>
              <img src={seo} className='Image' />
              <FaSistrix className='Carousel-icon' />
              <h3 className='Carousel-header'>SEO OPTIMIZATION</h3>
              <p className='Carousel-Disp'>Search engine optimization (SEO) is the process of improving the visibility
                of a web site in search engines. Consumer puts a lot of trust in search
                engines to find what they need. Google receives 34,000 searches per second.
                Those searches involve finding products, reviewing brands, and looking up
                business locations.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="Carousel-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZ5YQcO8qbx4tNJLtzpIo7VSNeNNkiVqilA&usqp=CAU"
              alt="Fifth slide" />
            <Carousel.Caption>
              <img src={social} className='Image' />
              <FaTwitter className='Carousel-icon' />
              <h3 className='Carousel-header'>SOCIAL MEDIA</h3>
              <p className='Carousel-Disp'>Social Media, has become an essential tool of marketing an online business.
                It gives you a platform to interact and inform people about yourself and
                your brand. The concept of social media basically refers to the task of
                promoting websites or business through social media platforms.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </Container>


      {/* <Container>
        <Row>
          <Col>
            <div class="containerq">
              <img src={web} alt="" class="image"/>
                <div class="overlay">
                  <div class="text">WEB DESIGN
                  <p>Decorations don’t drive home messages. Content does. Reducing text-based
                  content to a visual design element (the shape of the text) can result in
                  bloated and unrealistic client expectations once real data replaces the
                  dummy content. We allow our design decisions to be dictated by the on-page
                  content and messaging, and often our designers use the actual content to
                  inspire interesting elements that might not have been conceived without it</p></div>
                  
                </div>
            </div>
          </Col>
          <Col>
            <div class="containerq">
              <img src={web} alt="" class="image"/>
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
            </div>
          </Col>
          <Col>
            <div class="containerq">
              <img src={web} alt="" class="image"/>
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="containerq">
              <img src={web} alt="" class="image"/>
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
            </div>
          </Col>
          <Col>
            <div class="containerq">
              <img src={web} alt="" class="image"/>
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
            </div>
          </Col>
          <Col>
            <div class="containerq">
              <img src={web} alt="" class="image"/>
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
            </div>
          </Col>
        </Row>
      </Container> */}

    </div>
  )
}

export default Services