import React, { FunctionComponent } from 'react';
import './Header.css';
import { NavBar } from './NavBar';
import { TextProp } from './interfaces';

export const Header: FunctionComponent<TextProp> = ({ title }) => 
    <div className="Header">    
        <h1>{ title }</h1>
            <NavBar items={["About Me", "Projects","Tools"]}/>
    </div>
