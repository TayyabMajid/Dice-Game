import './Start.css'
const Start = ({toggle}) => {
  return (
    <div className='main-container'>
    <img src='/Images/dices 1.png'></img> 
    <div className='content'>
        <h1>Dice Game</h1>
        <button onClick={toggle} className='start-btn'>Play Now</button>
    
    </div>
    </div>
  )
}

export default Start