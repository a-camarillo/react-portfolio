import React from 'react';
import { ILink } from './interfaces';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

let smoothScroll = (event: React.MouseEvent<HTMLElement>, id:string) => {
    event.preventDefault();
    document.getElementById(id)!.scrollIntoView({
        behavior: "smooth",
    });
}

interface ILinks{
    links: ILink[]
}

const NavBar = ({ links }: ILinks) => {
    const navList = links.map((link: ILink) => 
            <Nav.Link className="NavText" href={ link.href }onClick={(event) => smoothScroll(event, link.id)}>
                { link.id }
            </Nav.Link>
    ) 
    return (
        <Container className="d-flex nav justify-content-md-center" fluid>
            <Navbar id="NavBar" expand="md">
                    { navList }
            </Navbar>
        </Container>
    )
};

export default NavBar;
