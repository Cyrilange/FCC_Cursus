const board = document.getElementsByClassName('boardGame');
let turn = document.getElementById('turn');
const squares = document.getElementsByClassName('squares')
const turnMessage = document.getElementsByClassName('turnMessage')
let currentPlayer;
let otherPlayer;

function choosePlayer(player) {
    currentPlayer = player;
    otherPlayer = player === 'X' ? 'O' : 'X';
    turnMessage.textContent = "It is your turn (" + currentPlayer + ") ";
    document.querySelector('choosePlayer').style.display = 'none';
    addClickEvents();
}

document.getElementById('btnX').addEventListener('click', () => choosePlayer('X'));
document.getElementById('btnO').addEventListener('click', () => choosePlayer('O'));

function addClickEvents() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function handleClick() {
            if (squares[i].textContent === '') {
                squares[i].textContent = currentPlayer;
                if (getWin(currentPlayer)) {
                    alert('The winner is ' + currentPlayer);
                    restart();
                }
                else if (getEqual()){
                    alert('No winner here');
                    restart();
                }
                switchTurn();
            }
        })
    }
}

function switchTurn() {

}


const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function getWin(currentPlayer) {
    for (let i = 0; i < winning_combinations.length; i++) {
        const [a, b, c] = winning_combinations[i];
        if (squares[a].textContent == currentPlayer && 
            squares[b].textContent == currentPlayer && 
            squares[c].textContent == currentPlayer) {
            return true;
        }
    }
    return false;
}

function getEqual(currentPlayer) {
    for (let i = 0; i < winning_combinations.length; i++) {
        if (squares[i].textContent === ' ') {
            return false;
        }
    }
    return true;
}

function choosePlayer(player) {

}

function restart() {
    
}