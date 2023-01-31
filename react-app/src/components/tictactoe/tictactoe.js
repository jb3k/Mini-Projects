import React, { useState } from "react"
import './tictactoe.css'
import calculateWinner from "./calculateWinner"

function TicTacToe() {

    let [square, setSquare] = useState(Array(9).fill(null))
    let [isX, setIsX] = useState(true)

    let handleClick = (i) => {
        if (calculateWinner(square || square[i])) return


        square[i] = isX ? "X" : "O"
        setSquare(square)
        setIsX(!isX)
    }


    let calculateWinner = () => {

        let horizontalWinner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ]
        let veritcalWinner = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ]
        let diagonalWinner = [
            [0, 4, 8],
            [2, 4, 6]
        ]

        let allWinners = horizontalWinner.concat(veritcalWinner).concat(diagonalWinner)
        for (let i = 0; i < allWinners.length; i++) {
            const [a, b, c] = allWinners[i]

            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a]
            }
        }
        return null
    }

    let handleRestart = () => {
        setIsX(true)
        setSquare(Array(9).fill(null))
    }



    let winner = calculateWinner(square)
    let status

    winner ? status = `Winner is ${winner}!` : status = `Next player: ${isX ? 'X' : 'O'}`

    let board = (
        <>
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
                <div className="game-status">
                    <div className="status-text">{status}</div>
                    <button className="restart-game" onClick={handleRestart}>Restart</button>
                </div>
            </div>
        </>

    )

    return (
        <>
            {board}
        </>
    )



}

export default TicTacToe
