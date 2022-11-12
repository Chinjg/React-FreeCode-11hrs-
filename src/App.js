import React from "react";
import Die from "./components/dice"
import {nanoid} from "nanoid"
// import Confetti from "react-confetti"
 
function App(props) {
//  const [squares, setSquares]=React.useState(box)
//  const styles={
//   backgroundColor:props.darkMode? "#222222" : "#cccccc"
//  }

//  const sqaureElement=squares.map(square=>(
//   <Boxes key={square.id} on={square.on}/>
//  ))

const[dice, setDice]=React.useState(allNewDice());
const [tenzies, setTenzies]=React.useState(false)

React.useEffect(()=>{
  const allHeld = dice.every(die=>die.isHeld)
  const firstValue=dice[0].value
  const allSameValue=dice.every(die=> die.value===firstValue)
  if(allHeld && allSameValue){
    setTenzies(true)
    console.log("You Won!")
  }
 
},[dice])


function allNewDice(){
  const newDice=[]
  for(let i=0;i<10;i++){
      newDice.push (generateNewDie() )
  }
  return newDice
}

  function generateNewDie(){
    return{
      value:Math.ceil(Math.random()*6),
        isHeld:false,
        id:nanoid()
    }
  }
    function rollDice(){
     if(!tenzies){
      setDice(oldDice=>oldDice.map(die=>{
        return die.isHeld?  die: generateNewDie()
      }))
     }
     else{
      setTenzies(false)
      setDice(allNewDice())
    }
    }
    function holdDice(id){
      setDice(oldDice => oldDice.map(die=> {
        return die.id ===id? {...die,isHeld : !die.isHeld}:
        die
      }))
    }
    const diceElements=dice.map(die=> 
    <Die key={die.id}
    value={die.value} 
    isHeld={die.isHeld}
    holdDice={()=>holdDice(die.id)} 
    />)

  return (
    <main>
      {/* {tenzies && <Confetti/>} */}
      <h1 className="title">Tenzies</h1>
      <p className="instructions"> Roll until all dice are the same. Click each die to 
      freeze it at its current value between rolls. </p>
    <div className="dice-container" >
       {diceElements}
    </div>
    <button className="roll-dice" 
      onClick ={ rollDice}>
      {tenzies ? "New Game Roll" : "Roll"}
      </button>
    </main>
  )
}

export default App;
