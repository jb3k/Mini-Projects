import React, { useState } from "react"
import './connectFour.css'

function ConnectFour() {

    let [playerTurn, setPlayerTurn] = useState(true)
    let [moves, setMoves] = useState([])



    let calculateWinner = () => {


    }



    let getPiece = (x, y) => {
        const list = moves.filter((item) => {
            return (item.x === x && item.y === y)
        })
        return list[0]
    }

    let addMove = (x, y) => {
        let nextPlayer = playerTurn ? "p1-board-spot" : "p2-board-spot"
        setPlayerTurn(!playerTurn)
        setMoves(moves.concat({ x, y, nextPlayer }))
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
                    <div className="c4-board">
                        <div className="c4-board-spots" onClick={() => { addMove(c, r) }}>
                            {piece ? <div className={moves[moves.length - 1].nextPlayer} /> : undefined}
                            {console.log(playerTurn, moves)}
                        </div>
                    </div>
                )
            }
            rowViews.push(
                <div className="c4-board-rows">{colViews}</div>
            )
        }
        console.log(rowViews)
        return (
            <>
                <div style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'column' }}>
                    {rowViews}
                </div>

            </>
        )
    }

    let resetBoard = () => {
        setMoves([])
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
