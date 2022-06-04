import React from "react";
import Section from "./Section";
import Container from 'react-bootstrap/Container'

const homeTitle = "Welcome To My Portfolio";

const homeBody = "Out beyond ideas of wrongdoing and rightdoing, there is a field.\n I'll meet you there. - Rumi"

const Home = () =>
    <Container id="Home" fluid>
        <Section title={ homeTitle } body={ homeBody }/>
    </Container>

export default Home;