import { styled } from "styled-components"

const Rules = () => {
  return (
    <RuleContainer>
    <h2>How to play dice game</h2>
    <div className="text">
    <p> Select any number.</p>
    <p> Click on dice image.</p>
    <p> After click on dice image if selected number is equal to dice number 
        you will get same point as dice.</p>
    <p> If you guess wrong then 2 points will be deducted.</p>


    </div>
    </RuleContainer>
  )
}

export default Rules;

const RuleContainer = styled.div`
background-color: #fbf1f1;
padding: 20px;
max-width: 800px;

display: flex;
flex-direction: row;
justify-content: center;
margin: 0 auto;
 h2{
    font-size: 24px;
    
 }
.text {
    margin-top: 24px;
}


`;