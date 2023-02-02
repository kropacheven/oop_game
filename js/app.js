/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

// a. Event listener for "Start Game" button:
const startBtn = document.getElementById('btn__reset');
startBtn.addEventListener('click', () => {
    game.startGame();
});

// b. Event listener for keyboard buttons:
const keyBoard = document.getElementById('qwerty');
keyBoard.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        //console.log(event.target);
        game.handleInteraction(event.target);
    }
    
});


// ------------------- Extra Credit ------------------- //

// c. Adding computer(laptop) keybord (keyup event) listener:
const buttons = document.getElementsByClassName('key');
console.log(buttons);
document.addEventListener('keyup', (event) => {
    for (let i=0; i < buttons.length; i++ ) {
    if ( buttons[i].innerHTML === event.key) {
    console.log(event.key);
    game.handleInteraction(buttons[i]);   
    }
}
});