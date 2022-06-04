import React from "react";
import { ISection } from './interfaces';
import Col from 'react-bootstrap/Col';

const Subsection = ({ title, body}: ISection) =>
    <Col>
        <h3>{ title }</h3>
        <p>{ body }</p>
    </Col>

export default Subsection;