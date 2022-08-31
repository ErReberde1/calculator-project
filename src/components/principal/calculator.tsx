import React, { useEffect, useRef, useState } from 'react'
import './calculator.css'

export default function Calculator() {

  

 

    type tipo = "suma" | "resta" | "multiplicación" | "division" | "porcentaje"
    const [result, setResult] = useState(0)
    const [input, setInput] = useState(0)

    const onChangeHandler = (e: any)=>{
      setInput(Number(e.target.value))
    }

    const operacion = (tipo: tipo)=>{
      switch(tipo){
        case "suma":
          setResult(result + input)
      }
    }

    

  return (
    <div className='container-calculator'>
        <div className='container-calculator-pantalla'>
          <input ref={input => input && input.focus()}autoFocus onChange={onChangeHandler} type= "text" className='container-calculator-pantalla-input'/>
        </div>
        <div className='container-calculator-botones'>
            <button>{"("}</button>
            <button>{")"}</button>
            <button>%</button>
            <button>AC</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>x</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
            <button onClick={()=>operacion("suma")}>+</button>
        </div>
        
    </div>
  )
}
