
import { styled } from "styled-components";

const Roll = ({rollDice, currentDice}) => {


    return (
    <DiceContainer>
    <div className="dice" onClick={rollDice}>
        <img  className="img-1" src={`/roll/dice_${currentDice}.png`} alt="dice 1" />
    </div>
    <p>Click on Dice To Roll</p>
    </DiceContainer>
  )
}

export default Roll;
const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 80px;
gap: 20px;
.dice{
    cursor: pointer;
}
p{
    font-size:24px;

}
`