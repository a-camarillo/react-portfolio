import React from "react";
import { TextProp } from "./interfaces";
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import tslogo from './assets/images/typescript.svg';
import reactlogo from './assets/images/React-icon.svg'
import bootlogo from './assets/images/Bootstrap_logo.svg';


const Footer = ({ title}: TextProp) =>
    <div className="Footer">
        <p>{ title }</p>
        <Button href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
            <Image className="Footer-logo" rounded src={ tslogo }>
            </Image>
        </Button>
        <Button href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <Image className="Footer-logo" rounded src={ reactlogo }>
            </Image>
        </Button>
        <Button href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
            <Image className="Footer-logo" rounded src={ bootlogo }>
            </Image>
        </Button>
    </div>

export default Footer;