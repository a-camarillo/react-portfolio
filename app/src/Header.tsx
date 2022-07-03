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
    { id: "Connect", href: "#Connect" }
]


const Header = ({ title }: Title) =>
    <Container className="header">
        <Row className="justify-content-md-center">
            <Col>
                <h1 className="text-left">{title}</h1>
                <h2 className="text-left">full stack developer</h2>
            </Col>
        </Row>
        {/* <Row className="nav">
            <NavBar links={links} />
        </Row>     */}
    </Container>

export default Header;