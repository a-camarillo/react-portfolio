import React from "react";
import { ISection } from './interfaces';
import Col from 'react-bootstrap/Col';

const Section = ({ title, body}: ISection) =>
    <Col>
        <h2>{ title }</h2>
        <p>{ body }</p>
    </Col>

export default Section;