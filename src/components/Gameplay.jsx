import Numbers from './Numbers'
import Roll from './Roll';
import { useState } from 'react';
import TotalScore from './TotalScore';
import { styled } from 'styled-components';
import { Button } from './Button';
import Rules from './Rules';


const Gameplay = () => {
  
const [score, setScore] = useState(0); 
const [selectedNumber,setSelectedNumber] = useState();
const [currentDice, setCurrentDice] = useState(1);
const [error, setError] = useState("");

const [showRules,setShowRules] = useState(false);

const generateRandomNumber = (min,max) => {
  return Math.floor(Math.random() * (max - min) + min);
  };
  
  const rollDice = () => {

    if(!selectedNumber)
    { 
        setError("You Have Not Slected Any Number");
        return;
    }
    setError("");
        
    const randomNumber = generateRandomNumber(1, 7);
  setCurrentDice((prev) => randomNumber);


  if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);    
  } else {
    setScore((prev) => prev - 2);
    
  }
    setSelectedNumber(undefined); 
  };
const resetScore = () => {
  setScore(0);
}


  return (
    <Maincontainer className='main-container'>
    <TotalScore score={score}/>
    <div>
    <Numbers 
      error={error}
      setError={setError}
      selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber}
    />
    </div>
    <div><Roll currentDice={currentDice}
      rollDice={rollDice}
    /></div>
    <div className='btns-1'>

    <Button onClick={resetScore}> Reset Score</Button>

    <Button onClick={()=> setShowRules(prev => !prev)}>{showRules ? "Hide":"Show"} Rules</Button>

    </div>
    {showRules && <Rules />}
    </Maincontainer>
  )
}

export default Gameplay;
const Maincontainer = styled.main`
padding-top: 70px ;
.main-container{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btns-1 {
  max-width: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 40%;
  margin-right: 10%;

}


`