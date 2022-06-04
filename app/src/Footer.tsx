import './Footer.css';
import { Title } from "./interfaces";
import bootlogo from './assets/images/Bootstrap_logo.svg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from "react";
import reactlogo from './assets/images/React-icon.svg'
import Stack from 'react-bootstrap/Stack';
import tslogo from './assets/images/typescript.svg';

const Footer = ({ title}: Title) =>
    <Container>
        <Stack direction="horizontal">
            <Row className="justify-content-center">
                <Col>
                    <h4>{ title }</h4>
                    <Button variant="link" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <Image className="Footer-logo" rounded src={ tslogo }>
                        </Image>
                    </Button>
                    <Button variant="link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <Image className="Footer-logo" rounded src={ reactlogo }>
                        </Image>
                    </Button>
                    <Button variant="link" href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                        <Image className="Footer-logo" rounded src={ bootlogo }>
                        </Image>
                    </Button>
                </Col>
            </Row>
        </Stack>
    </Container>

export default Footer;