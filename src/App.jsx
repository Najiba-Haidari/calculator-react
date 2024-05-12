// import { useState } from 'react'
// import Calculator from './components/Calculator.jsx'
import './App.css'

import { useState } from "react"

function Button(props) {
  const [buttonVal, setButtonVal] = useState([
    0, 1, 2, "+", 3, 4, 5, "-", 6, 7, 8, "*", 9, "/", "=", "AC"
  ])
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>{buttonVal.map((but) => (
      isNaN(but) ? <button onClick={props.onClick} name={but} key={but} style={{ backgroundColor: "rgba(241, 179, 13, 0.8)", margin: "0.5px", width: "20%" }}>{but}</button> :
        <button onClick={props.onClick} name={but} key={but} style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "white", margin: "0.5px", width: "20%" }}>{but}</button>


    ))}</div>
  )
}

function Calculator() {
  const [display, setDisplay] = useState("")
  const [firstOperand, setFirstOperand] = useState('');
  const [SecOperand, setSecOperand] = useState('');
  const [operator, setOperator] = useState('');

  function clickedVal(e) {
    // console.log(display + e.target.name)
    if (!isNaN(e.target.name)) {
      setDisplay((display) => display + e.target.name);

    } else if (isNaN(e.target.name)) {

      if (e.target.name === "+" || e.target.name === "-" || e.target.name === "*" || e.target.name === "/") {
        setFirstOperand(display)
        // setSecOperand(display)
        setOperator(e.target.name)
        setDisplay(display + e.target.name)
        console.log(display)
        setDisplay("")
        // setSecOperand(display)
      } else if (e.target.name === "=") {
        // setSecOperand(display)
        // if (operator && SecOperand) {
        handleOperations();
        // }
      } else if (e.target.name === "AC") {
        setDisplay("");
      }
    }
  }

  function handleOperations() {
    let SecOperand = display;
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(firstOperand) + parseFloat(SecOperand)
        break;
      case "-":
        result = parseFloat(firstOperand) - parseFloat(SecOperand)
        break;
      case "/":
        result = parseFloat(firstOperand) / parseFloat(SecOperand)
        break;
      case "*":
        result = parseFloat(firstOperand) * parseFloat(SecOperand)
        break;
      default:
        result = ""
        break;
    }
    setDisplay(result.toString())
    console.log(firstOperand)
    console.log(SecOperand)
    console.log(result.toString())
  }
  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <h2 id="text" style={{ background: "rgba(0,0,0,0.7", color: "white", height: "50px", margin: "1px 40px", borderRadius: "5px", textAlign: "left", padding: "10px" }}>{display}</h2>
      <div>
        <Button onClick={clickedVal} />
      </div>
    </div>
  )
}


export default function App() {


  return (
    <div style={{ width: "500px", height: "500px", margin: "0 auto" }}>
      <h1>React Calculator</h1>
      <Calculator ></Calculator>
    </div>
  )
}

