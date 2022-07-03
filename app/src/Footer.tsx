import { Title } from "./interfaces";
import bootlogo from './assets/images/Bootstrap_logo.svg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import React from "react";
import reactlogo from './assets/images/React-icon.svg'
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import tslogo from './assets/images/typescript.svg';

const Footer = ({ title}: Title) =>
    <Container className="footer">
        <Stack direction="horizontal" className="justify-content-center">
            <Row className="align-items-center">
                <Col>
                    <h4>{ title }</h4>
                </Col>
                <Col>
                    <Button variant="link" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                    <Figure> 
                        <Figure.Image
                            width={50}
                            height={50}
                            alt="200x200"
                            src={ tslogo }
                        />
                    </Figure>
                    </Button>
                </Col>
                <Col>
                    <Button variant="link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <Figure>
                            <Figure.Image
                                width={50}
                                height={50}
                                alt="200x200"
                                src={ reactlogo }
                            />
                        </Figure>
                    </Button>
                </Col>
                <Col>
                    <Button variant="link" href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                        <Figure>
                            <Figure.Image
                                width={50}
                                height={50}
                                alt="200x200"
                                src={ bootlogo }
                            />
                        </Figure>
                    </Button>
                </Col>
            </Row>
        </Stack>
    </Container>

export default Footer;