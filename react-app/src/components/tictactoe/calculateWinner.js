
function calculateWinner({ square }) {

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
export default calculateWinner
