import React, { useEffect, useState } from 'react'
import './RecentWork.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import portfolio1 from './img/portfolio-1.jpg'
import portfolio2 from './img/portfolio-2.jpg'
import portfolio3 from './img/portfolio-3.jpg'
import portfolio4 from './img/portfolio-4.jpg'
import portfolio5 from './img/portfolio-5.jpg'
import portfolio6 from './img/portfolio-6.jpg'
import portfolio7 from './img/portfolio-7.jpg'
import portfolio8 from './img/portfolio-8.jpg'

const images = [
    { "id": '1', "imageName": portfolio1, "tag": "Web Devloper" },
    { "id": '2', "imageName": portfolio2, "tag": "Mobile App" },
    { "id": '3', "imageName": portfolio3, "tag": "Mobile App" },
    { "id": '4', "imageName": portfolio4, "tag": "Web Devloper" },
    { "id": '5', "imageName": portfolio5, "tag": "Web Devloper" },
    { "id": '6', "imageName": portfolio6, "tag": "Web Design" },
    { "id": '7', "imageName": portfolio7, "tag": "Web Design" },
    { "id": '8', "imageName": portfolio8, "tag": "Web Design" }
];


function RecentWork() {





    const [tag, settag] = useState('All');
    const [filterImage, setfilterImage] = useState([]);

    useEffect(() => {
        tag === 'All' ? setfilterImage(images) : setfilterImage(images.filter(image => image.tag === tag))
    }, [tag]
    );



    return (
        <div id='work'>
            <h1 className='Work-head'>RECENT WORKS</h1>
            <h2 className='Work-line'>- OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY -</h2>
            <Container className='tags'>
                <TabButton name="All" handleSetTag={settag} tagActive={tag === "All" ? true : false} />
                <TabButton name="Web Design" handleSetTag={settag} tagActive={tag === "WebDesign" ? true : false} />
                <TabButton name="Web Devloper" handleSetTag={settag} tagActive={tag === "WebDevloper" ? true : false} />
                <TabButton name="Mobile App" handleSetTag={settag} tagActive={tag === "MobileApp" ? true : false} />
                <Row>
                    {filterImage.map((image) => {
                        return (
                            <Col sm={12} md={6} lg={3} key={image.id} className="imagediv">
                                <img src={image.imageName} alt=" " />
                            </Col>
                        )
                    }

                    )
                    }
                </Row>
            </Container>


            <section className="section-background section-me background-overlay text-center">
                <div className='qwert'>
                    <h2>Are You Impressed By My Work?</h2>
                </div>
            </section>

        </div>
    )
}

const TabButton = ({ name, handleSetTag, tagActive }) => {
    return <button onClick={() => handleSetTag(name)} className={" Workfiltter ${tagActive ? 'actives' : null}"}>{name.toUpperCase()}</button>
}
export default RecentWork

