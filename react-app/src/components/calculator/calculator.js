import React, { useState } from "react"
import './calc.css'

function Calulator() {
    const [result, setResult] = useState('Hello World')

    const handleClick = (e) => {
        if (result === 'Hello World') handleClear()
        else setResult(result.concat(e.target.name))
    }

    const handleClear = () => {
        setResult('')
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1))

    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())

        } catch (err) {
            setResult('Error')
        }
    }

    return (
        <>
            <div className="calc-container">
                <form>
                    <input className="calc-input" type="text" value={result} />
                </form>
                <div className="calc-keypad">
                    <button id="calc-clear" name="clear" onClick={handleClear}>Clear</button>
                    <button id="calc-backspace" name="backspace" onClick={backspace}>C</button>
                    <button name="/" className="calc-highlight" onClick={handleClick}>&divide;</button>
                    <button name="7" className="calc-bttn" onClick={handleClick}>7</button>
                    <button name="8" className="calc-bttn" onClick={handleClick}>8</button>
                    <button name="9" className="calc-bttn" onClick={handleClick}>9</button>
                    <button name="*" className="calc-highlight" onClick={handleClick}>&times;</button>
                    <button name="4" className="calc-bttn" onClick={handleClick}>4</button>
                    <button name="5" className="calc-bttn" onClick={handleClick}>5</button>
                    <button name="6" className="calc-bttn" onClick={handleClick}>6</button>
                    <button name="-" className="calc-highlight" onClick={handleClick}>&ndash;</button>
                    <button name="1" className="calc-bttn" onClick={handleClick}>1</button>
                    <button name="2" className="calc-bttn" onClick={handleClick}>2</button>
                    <button name="3" className="calc-bttn" onClick={handleClick}>3</button>
                    <button name="+" className="calc-highlight" onClick={handleClick}>+</button>
                    <button name="0" className="calc-bttn" onClick={handleClick}>0</button>
                    <button name="." className="calc-bttn" onClick={handleClick}>.</button>
                    <button id="calc-result" onClick={calculate}>=</button>


                </div>
            </div>
        </>
    )


}

export default Calulator
