import React, { useState } from "react"
import './connectFour.css'

function ConnectFour() {

    let [spots, setSpots] = useState(Array(7).fill(''))
    let [red, setRed] = useState(true)


    let player1 = (
        <div className="p1-checker"></div>
    )
    let player2 = (
        <div className="p2-checker"></div>
    )
    let handleClick = (i) => {
        if (calculateWinner(spots || spots[i])) return
        if (spots[i] !== '') return
        spots[i] = (red ? player1 : player2)
        setSpots(spots)
        setRed(!red)
    }

    let calculateWinner = () => {


    }


    let board = (
        <div className="connect-four-board-row">
            <div className="connect-four-game-box" onClick={() => handleClick(0)}>{spots[0] === '' ? <div className="blank-spot"></div> : spots[0]}</div>
            <div className="connect-four-game-box" onClick={() => handleClick(1)}>{spots[1] === '' ? <div className="blank-spot"></div> : spots[1]}</div>
            <div className="connect-four-game-box" onClick={() => handleClick(2)}>{spots[2] === '' ? <div className="blank-spot"></div> : spots[2]}</div>
            <div className="connect-four-game-box" onClick={() => handleClick(3)}>{spots[3] === '' ? <div className="blank-spot"></div> : spots[3]}</div>
            <div className="connect-four-game-box" onClick={() => handleClick(4)}>{spots[4] === '' ? <div className="blank-spot"></div> : spots[4]}</div>
            <div className="connect-four-game-box" onClick={() => handleClick(5)}>{spots[5] === '' ? <div className="blank-spot"></div> : spots[5]}</div>
            <div className="connect-four-game-box" onClick={() => handleClick(6)}>{spots[6] === '' ? <div className="blank-spot"></div> : spots[6]}</div>
        </div>
    )

    return (
        <>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}> Connect Four: </h1>
            <div className="game-board">
                {board}

                {/* <div className="game-status">
                    <div className="status-text">{status}</div>
                    <button className="restart-game" onClick={handleRestart}>Restart</button>
                </div> */}
            </div>

        </>
    )




}

export default ConnectFour
