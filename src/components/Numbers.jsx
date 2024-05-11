import styled from 'styled-components';
//import './Numbers.css'
const Numbers = ({ setError,error, selectedNumber, setSelectedNumber}) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

  const selectorHandler  = (value) =>{
    setSelectedNumber(value)
    setError();
  }
    return (

    <Main >
    <p className='error'>{error}</p>
    <p>{setError}</p>
    <div className='flex'>
       {arrNumbers.map((value,i) =>
       <Box
        isSelected = {value == selectedNumber}
        key={i}
        onClick={() => {selectorHandler(value)}}>{value}   </Box> //call back
       )
       }
       </div>
       <p>Select Number</p>
       
    </Main>
  
  )
}
export default Numbers;

//styled components

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: end;
margin-bottom: 30px;

.flex{
  display: flex;
  gap:24px;

}
p{
  font-size: 24px;
  font-weight: 700px;
}
.error{
  color: red;
}
`

const Box = styled.div`

    height: 72px;
    width: 72px;
    border: 1px solid black;
    display:grid;
    place-items: center;
    font-size: 24px;   
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black":"white")};
    color: ${(props) => (!props.isSelected ? "black":"white")};
    cursor: pointer;

`