import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Section from './Section';
import linkedInLogo from './assets/images/LinkedIn_icon.svg';
import githubLogo from './assets/images/Octicons-mark-github.svg';

const contactTitle = "connect";
const contactBody = "Different ways to connect with me";

const githubTitle = "Github";
const githubBody = "";

const Connect = () =>
    <Container id="Connect" className="connect d-flex justify-content-center flex-column" fluid>
        <Row>
            <Section title={ contactTitle } body={ contactBody }/>
        </Row>
        <Row className="my-4">
            <Col className="d-flex ps-2" sm={{ span: 2, offset: 4 }}>    
                <Figure>
                    <Figure.Image
                    className="rounded mx-auto"
                    width={100}
                    height={100}
                    alt="100x100"
                    src={githubLogo}
                    />
                </Figure>
            </Col>
            <Col className="d-flex justify-content-start align-items-center">
                <Nav.Item> 
                    <Nav.Link href="https://github.com/a-camarillo" rel="noopener noreferrer">
                        Github
                    </Nav.Link>
                </Nav.Item>
            </Col>
        </Row>
        <Row className="my-4">
            <Col className="d-flex ps-2" sm={{ span: 2, offset: 4 }}>
                <Figure>
                    <Figure.Image
                    className="rounded mx-auto"
                    width={100}
                    height={100}
                    alt="100x100"
                    src={linkedInLogo}
                    />
                </Figure>
            </Col>
            <Col className="d-flex justify-content-start align-items-center" rel="noopener noreferrer">
                <Nav.Item>
                    <Nav.Link href="https://www.linkedin.com/in/anthony-camarillo/">
                        LinkedIn
                    </Nav.Link>
                </Nav.Item>
            </Col>
        </Row>
    </Container>

export default Connect;
