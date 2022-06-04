import React from 'react';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Title } from './interfaces';

const links = [
    { id: "Home", href: "#Home" },
    { id: "About", href: "#About" },
    { id: "Projects", href: "#Projects" },
    { id: "Tools", href: "#Tools" },
    { id: "Contact", href: "#Contact" }
]


const Header = ({ title }: Title) =>
    <Container className="Header container">
        <Row className="justify-content-md-center">
            <Col>
                <h1 className="text-left">{title}</h1>
                <h2 className="text-left">Full Stack Developer</h2>
                <NavBar links={links} />
            </Col>
        </Row>
        {/* <h1>{ title }</h1>
            <NavBar links={ links }/> */}
    </Container>

export default Header;