import React from 'react';
import styled from 'styled-components';
import './Card.css';

// const Card = styled.div`
// .Card{
//    border: 1px solid #AFB3C2;
//    border-radius: 12px;
// }
// `;

const Card = (props) => {
   const classes = 'card '+props.className;
   const onClickEvents = props.onClick;
   return <div className={classes} onClick={onClickEvents}>{props.children}
   </div>
};

export default Card 