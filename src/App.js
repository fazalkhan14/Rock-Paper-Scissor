import {React,useState} from 'react';
import Header from './Header/Header';
import GameBoard from './Game/GameBoard';
import styled from 'styled-components';
import Rules from './Button/Button';
import './App.css';
import RulesImg from './images/image-rules.svg';
import Close from './images/icon-close.svg';
import Card from './UI/Card';


const Container = styled.div`
  margin: 2rem auto;
  width: 42rem;
  max-width: 95%;
`;

const Wrapper = styled.div`
  position: relative;
`;

function App() {

  const [score,setScore] = useState(12);
  const [show,setShow] = useState(false);

  function scoreHandler(totalScore){
    setScore(totalScore);
  }
  function showForm(){
      setShow(true);
  }
  function dontShowForm(){
      setShow(false);
  }
  return (
    <Wrapper>
    <Container>
      <Header scoreDisplay={score}></Header>
      <GameBoard changeScore={scoreHandler} score={score}></GameBoard>
    </Container>
    {show && <Card className="rules">
        <div style={{display:'flex',justifyContent:'space-between', margin:'10px 17px'}}>
            <p>RULES</p>
            <img onClick={dontShowForm} src={Close} alt="x" width="15px" height="15px" style={{alignSelf: 'center'}}></img>
        </div>
        <img src={RulesImg} alt="rules" style={{padding:'15px 25px', width:"15rem", height:"15rem"}}></img>
    </Card>}
    <Rules onClick={showForm}></Rules>
    </Wrapper>
  )
}

export default App;
