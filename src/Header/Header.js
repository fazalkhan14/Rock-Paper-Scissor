import React from 'react';
import Card from '../UI/Card';
import './Header.css';
import LogoSvg from '../images/logo.svg';

const Header = (props) => {
    return(
    <Card className="header">
        <div className="logo-text">
        <img src={LogoSvg} alt="logo"/>
        </div>
        <Card className="score-card">
            <p>SCORE</p>
            <h1>{props.scoreDisplay}</h1>
        </Card>
    </Card>)
}

export default Header;