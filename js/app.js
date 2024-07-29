/*-------------------------------- Constants --------------------------------*/
const squareEls = documents.querySelectorAll(".sqr")

const messageEls = document.querySelector(".message")


/*---------------------------- Variables (state) ----------------------------*/
let board 


let turn 

let tie 

let winner 






/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/


function init () {
    let board = [(''), (''), (''), (''), (''), (''), (''), (''), ('')]


let turn = x

let tie = false

let winner = false 

    render();
}

console.log(init)

function render () {

}

function UpdateBoard () {
    board.forEach((cell, idx) => {
         if (cell === 'x') {
            squareEls[idx].textContent =  'X'
         } else if (cell === 'O') {
            squareEls[idx].textContent = 'O'
         } else {
            squareEls[idx].textContent ='' 
         }
    }
    )}

  

  function updateMessage () {
        if (winner !== fale && tie !== false) {

        } else if (winner !== false && tie !== true) {
            return 'game is tied'
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



