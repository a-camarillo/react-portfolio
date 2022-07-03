import { Figure } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import me from './assets/images/me_sleep.jpg';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Section from './Section';

const aboutTitle = "about me";

const aboutBody = "My name is Anthony Camarillo and I am a full stack developer with a strong interest in working on the backend, \
                   specifically REST APIs. After graduating in Mechanical Engineering I decided to learn a little bit about programming \
                   and discovered a passion in writing code. To me, programming is like solving a puzzle without a concrete solution and \
                   there is beauty in the various approaches people can take to tackle the same problem; it is the ultimate combination of \
                   logic and creativity. \n\nIn my free time I enjoy: exploring and appreciating music, discovering new recipes to cook, \
                   lifting weights, running, playing soccer, spending time with my loved ones, and most importantly cheering on the Philadelphia \
                   Eagles when it's Football season. GO BIRDS!";

const About = () =>
    <Container id="About" className="d-flex justify-content-center align-items-center" fluid>
        <Row>
            <Col className="text-break">
                <Section title={ aboutTitle } body={ aboutBody }/>
            </Col>
            <Col sm={3}>
                    <Figure>
                        <Figure.Image
                            className="rounded mx-auto d-block"
                            width={75}
                            height={100}
                            alt="75x100"
                            src={me}
                        />
                        <Figure.Caption className="caption">
                            Me, after fixing a minor bug in my code. 
                        </Figure.Caption>
                    </Figure>
            </Col>
        </Row>
    </Container>

export default About;