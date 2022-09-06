import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import './MyNavbar.css'
import { Link } from "react-scroll"

function MyNavbar() {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div>
      <Navbar className='Site-Navigation' collapseOnSelect expand="lg" fixed='top' variant='dark' id='navbar'>

        <Navbar.Brand className='PName' href="home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-nav-bar' />
        <Navbar.Collapse id='responsive-nav-bar'>
          <Nav className="mx-auto" >
            <Link to="frantpage" spy={true} smooth={true} offset={-100} duration={500} className='nlink'>HOME</Link>
            <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} className='nlink'>INTRO</Link>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='nlink' >ABOUT</Link>
            <Link to="skill" spy={true} smooth={true} offset={-100} duration={500} className='nlink'>SKILLS</Link>
            <Link to="team" spy={true} smooth={true} offset={-100} duration={500} className='nlink'>TEAM</Link>
            <Link to="services" spy={true} smooth={true} offset={-100} duration={500} className='nlink'>SERVICES</Link>
            <Link to="work" spy={true} smooth={true} offset={-100} duration={500} className='nlink'>WORK</Link>
            <Link to="history" spy={true} smooth={true} offset={-100} duration={500} className='nlink'>EDUCATION</Link>
            <Link to="contact" spy={true} smooth={true} offset={-20} duration={500} className='nlink'>CONTACT</Link>
            
          </Nav>
          {/* <Button className='navBtn'>Hire me</Button> */}
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default MyNavbar