import { React, useState, useEffect } from 'react';
import Card from '../UI/Card';
import './GameBoard.css';
import styled from 'styled-components';
import triangleSvg from '../images/bg-triangle.svg';
import Svg1 from '../images/icon-rock.svg';
import Svg2 from '../images/icon-paper.svg';
import Svg3 from '../images/icon-scissors.svg';

const Container = styled.div`
    display: grid;
    height: 20rem;
    width: 20rem;
    margin: 1rem auto;
    position: absolute;
    transform:translate(50%, 0%);
    grid-template-column: repeat(3,1fr);
    row-gap: 3rem;
    /* text-align: center; */
    align-content: center;
    justify-items: center;

      
    
    .item1{
        position:relative;
        grid-column: 1/2;
        grid-row: 1;
        display: flex;
        align-items: center;
    }
    .item1::before{
        content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -1rem; /* !importanté */
            border-radius: inherit; /* !importanté */
            background: linear-gradient(to right, 	#4865f4, #5671f5);
    }
    .item2{
        position:relative;
        display: flex;
        align-items: center;
        grid-column: 3/4;
        grid-row: 1;
    }
    .item2::before{
        content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -1rem; /* !importanté */
            border-radius: inherit; /* !importanté */
            background: linear-gradient(to right, #ec9e0e,#eca922);
    }
    .item3{   
        position:relative; 
        display: flex;
        align-items: center;
        grid-column: 2/3;
        grid-row: 2;
    }
    .item3::before{
        content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -1rem; /* !importanté */
            border-radius: inherit; /* !importanté */
            background: linear-gradient(to right,#dc2e4e,#dd405d);
    }
`;

const ImgContainer = styled.div`
        width: 6rem;
        height: 6rem;
        background:#DCDFDE;
        justify-content: center;
        align-content: center;
        border-radius: 50%;
`;

const TextConatiner = styled.div`
    margin: 1.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 8rem;

    p {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        color: #FFFFFF;
    }
`;

const ReactionContainer = styled.div`
display: grid;
height: 8rem;
width: 8rem;
margin: 6rem auto;
position: absolute;
transform: translate(50%,0%);
grid-template-column: repeat(3,1fr);
gap: 3.3rem;
align-content: center;
justify-items: center;

    .picked1,.picked2 img{
        width: 50%;
    }

    .picked1{   
        position:relative; 
        display: flex;
        height: 12rem;
        width: 10rem;
        align-items: center;
        grid-column: 1/2;
        grid-row: 1;
    }
    .picked1::before{
        content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -1.4rem; /* !importanté */
            border-radius: inherit; /* !importanté */
            background: linear-gradient(to right,#dc2e4e,#dd405d);
    }
    .picked2Wrapper{   
        position:relative; 
        display: flex;
        height: 12rem;
        width: 10rem;
        align-items: center;
        grid-column: 3/4;
        grid-row: 1;
    }
    .picked2{
        display:flex;
        position:relative; 
        height: 12rem;
        width: 10rem;
        align-items: center;
    }
    .picked2::after{
        content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -1.4rem; /* !importanté */
            border-radius: inherit; /* !importanté */
            background: linear-gradient(to right,#dc2e4e,#dd405d);
    }    
`;
const Picked2Shadow = styled.div`
::after{
    content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -0.4rem; /* !importanté */
        border-radius: 50%; /* !importanté */
        background: grey;
}
`;

const SVG_MAP = {
    rock: Svg1,
    paper: Svg2,
    scissors: Svg3
}
const OPTIONS = ['rock', 'paper', 'scissors'];

const GameBoard = (props) => {
    const [result, setResult] = useState();
    const [housePick, setHousePick] = useState();
    const [isPicked, setIsPicked] = useState(false);
    const [userPicked, setUserPicked] = useState();
    const [showHousePick, setHouseShow] = useState(false);
    const [showResult, setResultShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHouseShow(true);
            setResultShow(true);
        }, 2000)
    }, [showHousePick])

    function HouseRandom(index) {
        let userPick = index + 1;
        let random = Math.floor(Math.random() * 3) + 1;
        if (random === 1) {
            setHousePick('rock');
        } else if (random === 2) {
            setHousePick('paper');
        } else {
            setHousePick('scissors');
        }
        if (userPick === random) {
            setResult('DRAW');
        } else {
            if (userPick < 3) {
                if (userPick + 1 === random) {
                    setResult('YOU LOST');
                    props.changeScore(props.score - 1);
                } else {
                    setResult('YOU WIN');
                    props.changeScore(props.score + 1);
                }
            } else {
                if (userPick - 1 === random) {
                    setResult('YOU WIN');
                    props.changeScore(props.score + 1);
                } else {
                    setResult('YOU LOST');
                    props.changeScore(props.score - 1);
                }
            }
        }
    }

    function init() {
        setIsPicked(false);
        setHousePick('');
        setHouseShow(false);
        setResultShow(false);
    }

    function Game(e, index) {
        setIsPicked(true);
        setUserPicked(e);
        HouseRandom(index);
    }

    if (isPicked === false) {
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', transform: 'translate(60%, 25%)' }}><img src={triangleSvg} alt="triangle" width="90%" height="90%" /></div>
                <Container>
                    {
                        OPTIONS.map((value, index) => <ImgContainer onClick={() => Game(value, index)} className={`item${index + 1}`}><img src={SVG_MAP[value]} alt="logo" /></ImgContainer>)
                    }
                </Container>
            </div>
        )
    }
    else {
        return (
            <div>
                <TextConatiner>
                    <p>YOU PICKED</p>
                    <p>THE HOUSE PICKED</p>
                </TextConatiner>
                <ReactionContainer>
                    <ImgContainer className="picked1"><img src={SVG_MAP[userPicked]} alt="logo" /></ImgContainer>
                    {showResult && <div>
                        <p style={{ color: '#FFFF', padding: '0.1rem 0' }}>{result}</p>
                        <Card className="playAgain" onClick={init}><p>PLAY AGAIN</p></Card>
                    </div>}
                    <div className="picked2Wrapper">
                        <Picked2Shadow></Picked2Shadow>
                        {showHousePick && <ImgContainer className="picked2"><img src={SVG_MAP[housePick]} alt="logo" /></ImgContainer>}
                    </div>
                </ReactionContainer>
            </div>
        )
    }
}

export default GameBoard;