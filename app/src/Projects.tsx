import React from 'react';
import Section from './Section';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Subsection from './Subsection';

const projectTitle = "projects";

const projectBody = "Some of the work I have created.";

const projectOneTitle = "workout app";

const projectOneBody = "Built a web application for tracking workouts and weightlifting progress. Users can create multiple \
                        exercises with multiple sets, save workouts, and view all previously saved workouts. User interface \
                        built with Vue.js. Backend built using Express.js integrated with a MongoDB collection.";

const projectTwoBody = "Created a web interface for exploring a music record collection. The inspiration for the database came \
                        from my own personal collection of vinyl records. All information of records, that are also on Spotify, \
                        were collected using the Spotify API and inserted into a PostgreSQL database. The database was then integrated \
                        with Django serving both the front-end and back-end. I also utilized Spotify's embedded widget allowing users \
                        to play the record they were browsing from Spotify.";

const projectTwoTitle = "vinyl record database";

const projectThreeTitle = "league of legends discord bot";

const projectThreeBody = "A Discord bot made for a user's recent league of legends statistics. Users can call commands to display  \
                          graphs of recent champions played with corresponding win/loss ratio, their current ranked tier and LP if  \
                          applicable, and average kills, deaths, assists, and gold. Bot commands created using Discord's python \
                          library with a custom module for calling the League of Legends API for data retrieval.";

const Projects = () =>
    <Container id="Projects" className="d-flex align-items-center flex-wrap" fluid>
        <Row>
            <Section title={ projectTitle } body={ projectBody }/>
        </Row>
        <Row>
            <Subsection title={ projectOneTitle } body={ projectOneBody }/>
        </Row>
        <Row>
            <Subsection title={ projectTwoTitle } body={ projectTwoBody }/>
        </Row>
        <Row>
            <Subsection title={ projectThreeTitle } body={ projectThreeBody }/>
        </Row>
    </Container>

export default Projects;