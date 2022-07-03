import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import dockerlogo from './assets/images/docker.svg';
import Figure from 'react-bootstrap/Figure';
import pylogo from './assets/images/Python.svg';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Section from './Section';
import Subsection from './Subsection';
import vslogo from './assets/images/vscode.svg';

const toolsTitle = "tools";
const toolsBody = "Here are a few of the tools I enjoy using";
const firstToolTitle = "docker";
const firstToolBody = "If you're not familiar with Docker, it is software for packaging up code and all its dependencies into \"containers\". \
                       These containers include everything needed to run applications and isolates the application from its environment which allows the \
                       application to run properly regardless of the machine. The versatility of containers is what has attracted to me to Docker and although I have \
                       only scratched the surface of using Docker I am constantly eager to dive deeper into better understanding its applications.";

const secondToolTitle = "visual studio code";
const secondToolBody = "Visual Studio Code is an Integrated Development Environment by Microsoft with a ton of features for making life exponentially easier. \
                        From intellisense to git integration, Visual Studio Code has so much to offer its users including numerous extensions for customability. \
                        Although Visual Studio Code is extremely user friendly I am also trying to familiarize myself with Vim and who knows, maybe one day I too \
                        can be a keyboard wizard.";

const thirdToolTitle = "python";
const thirdToolBody = "Python was the first language I learned when I began programming and I still thoroughly enjoy it today. The simplicity of writing in Python \
                       made for a straight-forward learning experience and that was just the start. With extensive support for automation, analytics, web development, \
                       and more I have never seen a downside to Python. Currently I want to dig into Django REST framework to learn more about building APIs and REST best practices.";

const Tools = () =>
    <Container className="d-flex align-items-center flex-wrap" id="Tools" fluid>
        <Row>
            <Section title={ toolsTitle } body={ toolsBody }/>
        </Row>
        <Row>
            <Col sm={2}>
                <Figure>
                    <Figure.Image
                        className="rounded mx-auto d-block"
                        width={75}
                        height={100}
                        alt="75x100"
                        src={dockerlogo}
                    />
                </Figure>
            </Col>
            <Subsection title={ firstToolTitle } body={ firstToolBody } />
        </Row>
        <Row>
            <Col sm={2}>
                <Figure>
                    <Figure.Image
                        className="rounded mx-auto d-block"
                        width={75}
                        height={100}
                        alt="75x100"
                        src={vslogo}
                    />
                </Figure>
            </Col>
            <Subsection title={ secondToolTitle } body={ secondToolBody } />
        </Row>
        <Row>
            <Col sm={2}>
                <Figure>
                    <Figure.Image
                        className="rounded mx-auto d-block"
                        width={75}
                        height={100}
                        alt="75x100"
                        src={pylogo}
                    />
                </Figure>
            </Col>
            <Subsection title={ thirdToolTitle } body={ thirdToolBody } />
        </Row>
    </Container>

export default Tools;