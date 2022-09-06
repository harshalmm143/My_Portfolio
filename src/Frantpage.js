import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './Frantpage.css'
import Typed from 'react-typed'
import Hero from './img/hero.jpg'


function Frantpage() {
  return (
    <div>
      <div className="hero background-overlay">
        {/* <Image src={Hero} /> */}

        <div className='hero-content'>
          <h1 className='Ftext'>WELCOME TO MY WORLD</h1>
          <h2 className='Stext'>Hi, I'm Harshal Mahajan.</h2>
          <Typed
            className='Ttext'
            strings={[
              'Js Developer',
              'React Developer',
              'Full Stack Developer',
              'UX / UI Developer']}
            typeSpeed={50}
            backSpeed={20}
            loop
          />
          <h4 className='Ltext'>based in INDIA .</h4>

        </div>
      </div>





    </div>
  )
}

export default Frantpage