import React, { useState } from "react"
import './tictactoe.css'

function TicTacToe() {

    let [square, setSquare] = useState(Array(9).fill(null))
    let [isX, setIsX] = useState(true)


    let handleClick = (i) => {
        square[i] = isX ? "X" : "O"
        setSquare(square)
        setIsX(!isX)
    }

    let board = (
        <div className="game-board">
            <div className="board-row">
                <div className="game-box" onClick={() => handleClick(0)}>{square[0]}</div>
                <div className="game-box" onClick={() => handleClick(1)}>{square[1]}</div>
                <div className="game-box" onClick={() => handleClick(2)}>{square[2]}</div>

            </div>
            <div className="board-row">
                <div className="game-box" onClick={() => handleClick(3)}>{square[3]}</div>
                <div className="game-box" onClick={() => handleClick(4)}>{square[4]}</div>
                <div className="game-box" onClick={() => handleClick(5)}>{square[5]}</div>

            </div>
            <div className="board-row">
                <div className="game-box" onClick={() => handleClick(6)}>{square[6]}</div>
                <div className="game-box" onClick={() => handleClick(7)}>{square[7]}</div>
                <div className="game-box" onClick={() => handleClick(8)}>{square[8]}</div>
            </div>
        </div>

    )

    let playerTurn = (
        <>
            <div>
                { }'s move!
            </div>
        </>
    )


    return (
        <>
            <div>
                {board}
            </div>
        </>
    )



}

export default TicTacToe
