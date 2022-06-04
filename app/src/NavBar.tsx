import React from 'react';
import { ILink } from './interfaces';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
        <Navbar className="justify-content-center" id="NavBar" bg="light" expand="sm">
                { navList }
        </Navbar>
    )
};

export default NavBar;
