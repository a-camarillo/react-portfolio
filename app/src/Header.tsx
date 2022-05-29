import React from 'react';
import './Header.css';
import  NavBar from './NavBar';
import { TextProp } from './interfaces';

const itemList = ["About Me", "Projects","Tools", "Contact Me"]

const Header = ({ title }: TextProp) => 
    <div className="Header">    
        <h1>{ title }</h1>
            <NavBar items={itemList}/>
    </div>

export default Header;