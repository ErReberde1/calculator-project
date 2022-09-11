import e from 'express'
import React, { useEffect, useRef, useState } from 'react'
import { createTypeParameterDeclaration } from 'typescript'
import './calculator.css'

export default function Calculator() {

    type tipo = "suma" | "resta" | "multiplicacion" | "division" | "porcentaje" | "resultado" | "AC"
    const [reserva, setReserva] = useState(0)
    const [valor, setValor]: [number|string, any] = useState("")
    const [result, setResult] = useState(0)
    const [input, setInput] = useState(0)
    const [operador, setOperador] = useState("")

    const onChangeHandler = (e: any)=>{
      setInput(Number(e.target.value))
    }

    const operacion = (tipo: tipo)=>{
      switch(tipo){
        case "suma":
          setReserva(reserva+Number(valor))
          setValor("")
          setOperador("suma")
          break
        case "resta":
          setReserva(reserva-Number(valor))
          setValor("")
          setOperador("resta")
          break
        case "multiplicacion":
          if (reserva !== 0 && !valor){
            setOperador("multiplicacion")
          }else if(reserva==0) {
            setReserva(Number(valor))
            setValor("")
            setOperador("multiplicacion")
          } else {
            setReserva(reserva * Number(valor))
          }
          break
        case "division":
          if (reserva !== 0 && !valor){
            setOperador("division")
          }else if(reserva==0) {
            setReserva(Number(valor))
            setValor("")
            setOperador("division")
          } else {
            setReserva(reserva / Number(valor))
          }
          break
        case "porcentaje":
          if (reserva !== 0 && !valor){
            setOperador("porcentaje")
            setReserva(reserva* 0.01)
          }else if(reserva==0 && valor) {
            setReserva(Number(valor)*0.01)
            setValor("")
            setOperador("")
          } else {
            setReserva(Number(valor)*0.01)
          }
          break
        case "resultado":
          if(operador == "multiplicacion"){
            setReserva(reserva * Number(valor))
            setValor("")
          }else if(operador == "division"){
            setReserva(reserva / Number(valor))
            setValor("")}
          else if(operador == "suma"){
            setReserva(reserva + Number(valor))
            setValor("")
          }
          else if(operador == "porcentaje"){
            setReserva(Number(valor)*0.01)
            setValor("")
          }
          else if(operador == "resta"){
            setReserva(reserva - Number(valor))
            setValor("")
          }
          break
        case "AC":
            setValor("")
            setReserva(0)
            setOperador("")
      }
    }

    const onClickKeyBoard =(caracter:string )=>{
      if (caracter == "Enter") return operacion("resultado")
      if (valor == "" && caracter == ".") setValor("0"+caracter)
      if(valor=="" && caracter !==".")setValor(caracter)
      else {
        setValor(valor+caracter)
      }
      
    }

    const handleKeyPress =(event: any)=>{
      console.log(event.key)
      if(event.key== "-") return operacion("resta")
      if(event.key== "+") return operacion("suma")
      if(event.key== "*") return operacion("multiplicacion")
      if(event.key== "/") return operacion("division")
      if(event.key== "Enter") return operacion("resultado")
      if(event.key== "Escape") return operacion("AC")
      onClickKeyBoard(event.key)
    }

    const focus =()=>{
      let inputNumber:any = document.getElementById("input")
      inputNumber.focus()
    }
    
    useEffect(()=>{
      focus()
    })

  return (
    <div onClick={focus}>
      
      <h1>Calculator App to movile phone</h1>
    <div className='container-calculator'  onClick={focus}>
        <div className="elemento_after_1"></div>
        <div className="elemento_after_2"></div>
        <div className="elemento_after_3"></div>
        <div className="elemento_after_4"></div>
        <div className='container-calculator-pantalla'>
          <p>{reserva}</p>
          <input inputMode='none' onKeyPress={handleKeyPress} value={valor} autoFocus onChange={onChangeHandler} type= "text" id="input"className='container-calculator-pantalla-input' pattern='[0-9]{9}'/>
        </div>
          
        <div className='container-calculator-botones'>
            <button
            className='container-calculator-botones-button'
            >{"("}</button>
            <button
            className='container-calculator-botones-button'
            >{")"}</button>
            <button
            className='container-calculator-botones-operador'
            onClick={()=>operacion("porcentaje")}>
              %
            </button>
            <button 
            className='container-calculator-botones-operador'
            onClick={()=>operacion("AC")}>
              AC
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("7")}>
              7
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("8")}>
              8
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("9")}>
              9
            </button>
            <button 
            className='container-calculator-botones-operador'
            onClick={()=>operacion("division")}>
              /
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("4")}>
              4
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("5")}>
              5
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("6")}>
              6
            </button>
            <button 
            className='container-calculator-botones-operador'
            onClick={()=>operacion("multiplicacion")}>
              x
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("1")}>
              1
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("2")}>
              2
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard("3")}>
              3
            </button>
            <button 
            className='container-calculator-botones-operador'
            onClick={()=>operacion("resta")}>
              -
            </button>
            <button 
            className='container-calculator-botones-button'
            onKeyPress ={(e)=>console.log(e)}
            onClick={()=>onClickKeyBoard("0")}>
              0
            </button>
            <button 
            className='container-calculator-botones-button'
            onClick={()=>onClickKeyBoard(".")}>
              .
            </button>
            <button 
            className='container-calculator-botones-operador'
            onClick={()=>operacion("resultado")}>
              =
            </button>
            <button 
            className='container-calculator-botones-operador'
            onClick={()=>operacion("suma")}>
              +
            </button>
        </div>
        
    </div>

    </div>
  )
}
