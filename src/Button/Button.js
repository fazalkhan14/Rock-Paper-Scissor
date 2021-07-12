import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';
import './Button.css';
import RulesImg from '../images/image-rules.svg';

const Rules = (props) => {
    return <button className="button" onClick={props.onClick}>
        <p>RULES</p>
    </button>
}

export default Rules;