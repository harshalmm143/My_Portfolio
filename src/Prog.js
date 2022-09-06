import React, { useEffect, useState } from 'react'
import { ProgressBar, Container, Row, Col } from "react-bootstrap"
import "./Prog.css"

let ProgressInterval = null;
let cssInterval = null;
let phpInterval = null;
let javaInterval = null;
let reactInterval = null;
let angularInterval = null;


function Prog() {

    const [progress, setprogress] = useState(0)
    const [css, setcss] = useState(0)
    const [php, setphp] = useState(0)
    const [java, setjava] = useState(0)
    const [react, setreact] = useState(0)
    const [angular, setangular] = useState(0)


    useEffect(() => {
        ProgressInterval = setInterval(() => {
            setprogress(prev => prev + 2);

        }, 100);
    }, []);

    useEffect(() => {
        if (progress >= 90) {
            clearInterval(ProgressInterval);
        }
    }, [progress])
    // 8888888888888888888888888888888

    useEffect(() => {
        cssInterval = setInterval(() => {
            setcss(prev => prev + 4);

        }, 100);
    }, []);

    useEffect(() => {
        if (css >= 95) {
            clearInterval(cssInterval);
        }
    }, [css])
    // 8888888888888888888888888888888888
    useEffect(() => {
        phpInterval = setInterval(() => {
            setphp(prev => prev + 5);

        }, 100);
    }, []);

    useEffect(() => {
        if (php >= 80) {
            clearInterval(phpInterval);
        }
    }, [php])
    // 0000000000000000000000000000
    useEffect(() => {
        javaInterval = setInterval(() => {
            setjava(prev => prev + 2);

        }, 100);
    }, []);

    useEffect(() => {
        if (java >= 90) {
            clearInterval(javaInterval);
        }
    }, [java])
    // 000000000000000000000000000000000000000
    useEffect(() => {
        reactInterval = setInterval(() => {
            setreact(prev => prev + 2);

        }, 100);
    }, []);

    useEffect(() => {
        if (react >= 94) {
            clearInterval(reactInterval);
        }
    }, [react])
    // 00000000000000000000000000
    useEffect(() => {
        angularInterval = setInterval(() => {
            setangular(prev => prev + 2);

        }, 100);
    }, []);

    useEffect(() => {
        if (angular >= 85) {
            clearInterval(angularInterval);
        }
    }, [angular])
    return (
        <div id='skill'>
            <h2 className='Skill-head'> MY SKILLS</h2>
            <Container className='Skill-c'>
                <Row>
                    <Col sm={12} md={12} lg={6}>

                        <div className='skill-col'>
                            <div class="Phead">
                                <h6 className="font-weight-bold">HTML</h6>
                                <h6 className="font-weight-bold">90%</h6>
                            </div>
                            <ProgressBar variant="info" className='html' now={progress} />
                        </div>
                        <div className='skill-col'>
                            <div className="Phead">
                                <h6 className="font-weight-bold">CSS</h6>
                                <h6 className="font-weight-bold">95%</h6>
                            </div>
                            <ProgressBar variant="warning" className='css' now={css} />
                        </div >
                        <div className='skill-col'>
                            <div className="Phead">
                                <h6 className="font-weight-bold">Mongodb</h6>
                                <h6 className="font-weight-bold">80%</h6>
                            </div>
                            <ProgressBar variant="primary" className='php' now={php} />
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className='skill-col'>
                            <div class="Phead">
                                <h6 className="font-weight-bold">Javascript</h6>
                                <h6 className="font-weight-bold">90%</h6>
                            </div>
                            <ProgressBar variant="danger" className='javascript' now={java} />
                        </div>
                        <div className='skill-col'>
                            <div className="Phead">
                                <h6 className="font-weight-bold">React JS</h6>
                                <h6 className="font-weight-bold">94%</h6>
                            </div>
                            <ProgressBar variant="success" className='react' now={react} />
                        </div>
                        <div className='skill-col'>
                            <div className="Phead">
                                <h6 className="font-weight-bold">React Native</h6>
                                <h6 className="font-weight-bold">85%</h6>
                            </div>
                            <ProgressBar variant="dark" className='angular' now={angular} />
                        </div>
                    </Col>
                </Row>


            </Container>

        </div>
    )
}

export default Prog