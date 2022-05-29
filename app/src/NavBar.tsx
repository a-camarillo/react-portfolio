import React from 'react';
import './NavBar.css';
import { TextList } from './interfaces';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = ({ items }: TextList) => {
    const itemList = items.map((item:string) => 
        <Nav.Link className="NavText">
            { item }
        </Nav.Link>
    )
    return (
        <Navbar className="NavBar" bg="light" expand="lg">
                { itemList }
        </Navbar>
    )
}

export default NavBar;
