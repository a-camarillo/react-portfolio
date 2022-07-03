import React from "react";
import Section from "./Section";
import Container from 'react-bootstrap/Container'

const homeTitle = "welcome to my portfolio";

const homeBody = "Out beyond ideas of wrongdoing and rightdoing, there is a field.\n I'll meet you there. - Rumi"

const Home = () =>
    <Container className="d-flex justify-content-center text-center align-items-center" id="Home" fluid>
        <Section title={ homeTitle } body={ homeBody }/>
    </Container>

export default Home;