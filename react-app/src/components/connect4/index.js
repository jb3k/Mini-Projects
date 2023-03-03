import React, { useState } from "react"
import './connectFour.css'

function ConnectFour() {

    let [spots, setSpots] = useState(Array(42).fill(''))
    let [red, setRed] = useState(true)
    let moves = [
        { x: 0, y: 0, player: 'red' },
        { x: 0, y: 1, player: 'red' },
        { x: 0, y: 2, player: 'red' }
    ]

    let handleClick = (i) => {
        if (calculateWinner(spots || spots[i])) return
        if (spots[i] !== '') return
        // spots[i] = (red ? player1 : player2)
        setSpots(spots)
        setRed(!red)
    }

    let calculateWinner = () => {


    }

    
    let getPiece = (x, y) => {

        const list = moves.filter((item) => {
            return (item.x === x && item.y === y)
        })
        return list[0]
    }


    let GameBoard = () => {
        let rows = 6
        let cols = 7
        let rowViews = []

        for (let r = 0; r < rows; r++) {
            let colViews = []
            for (let c = 0; c < cols; c++) {
                let piece = getPiece(c, r)
                colViews.push(
                    <div className="c4-board" >
                        <div className="c4-board-spots">
                            {piece ? <div className="p1-board-spot"></div> : undefined}
                        </div>
                    </div>
                )
            }
            rowViews.push(
                <div className="c4-board-rows">{colViews}</div>
            )
        }

        return (
            <>
                <div style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'column' }}>
                    {rowViews}
                </div>

            </>
        )

    }


    return (
        <>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}> Connect Four: </h1>
            <div className="game-board">
                {GameBoard()}
            </div>

        </>
    )




}

export default ConnectFour
