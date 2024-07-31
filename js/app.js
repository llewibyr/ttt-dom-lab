/*-------------------------------- Constants --------------------------------*/
const squareEls = documents.querySelectorAll(".sqr")

const messageEls = document.querySelector(".message")


/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = 'X'
let tie = false
let winner = false






/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/


function init () {
 board = ['', '', '', '', '', '', '', '', '']
 turn = 'X'
 tie = false
 winner = false 
render();
}

function render () {
    updateBoard()
    updateMessage()
}

function updateBoard () {
    board.forEach((cell, idx) => {
         if (cell === 'X') {
            squareEls[idx].textContent =  'X'
         } else if (cell === 'O') {
            squareEls[idx].textContent = 'O'
         } else {
            squareEls[idx].textContent ='' 
         }
    }
    )}

  

  function updateMessage () {
        if (winner) {
            messageEls.textContent = 'Player ' + turn + 'Wins!'
        } else if (tie) {
            messageEls.textContent = 'The game is tied.'
        } else {
            messageEls.textContent = 'Player ' + turn + "'s Turn"
        }
  }

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
/*----------------------------- Event Listeners -----------------------------*/
function handleClick(event) {
    const squareIndex = Array.from(squareEls).indexOf(event.target)

    if (board[squareIndex] !== '' || winner) {
    return 
    } 

    placePiece(squareIndex) 
        checkForWinner()
        checkForTie()
        switchPlayerTurn()
        render()
    }

    squareEls.forEach(squareEl => {
        squareEl.addEventListener("click", handleClick);
    });

function placePiece (idx) {
    board[idx] = turn 
}    

function checkForWinner () {
    winningCombos.forEach(winningCombo => {
if (board[winningCombo[0]] !=='' &&        
    board[winningCombo[0]] === board [winningCombo[1]] && board[winningCombo[1]] === board[winningCombo[2]]){
        winner = true
        }    
    })
}
    function checkForTie () {
        if (winner) {
            return
        }
        tie = board.every(cell => cell !== '')
        console.log('Tie state:', tie)
        }  

        function switchPlayerTurn () {
            if (winner) {
                return
            }
            turn = turn === 'X' ? 'O' : 'X'
            console.log('Current turn:', turn)
        } 
        document.getElementById('reset').addEventListener('click', init);
            
        const resetBtnEl = document.getElementById('reset');
        resetBtnEl.addEventListener('click', init);
        


