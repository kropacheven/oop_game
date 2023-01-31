/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// 1. Creating Phrase object instanse: 
const phrase = new Phrase('Life is like a box of chocolates');
//console.log(phrase.phrase);


// 2. Creating Class object instanse: 
const game = new Game();
//game.phrases.forEach( (phrase, index) => {
//    console.log(`Phrase ${index} - ${phrase}`);
//} );

// 3. Picking up random phrase as a new Phrase class parameter (then put in phrase const variable):
phrase.phrase = game.getRandomPhrase();
//console.log( phrase.phrase );

// 4. Start a game: start button click activates startGame method inside Game class:
const startBtn = document.getElementById('btn__reset');

// 5. Capture keyboard as a whole element:
const keyBoard = document.getElementById('qwerty');



// a. Event listener for "Start Game" button:
startBtn.addEventListener('click', () => {
    game.startGame();
    phrase.phrase = game.getRandomPhrase();
    game.missed = 0; // for resetting a game - when start button is clicked(win or lose)
    let hearts = document.querySelectorAll('.tries'); // for resetting a game - when start button is clicked(win or lose)
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].firstChild.src = "images/liveHeart.png";
    }
});


// b. Event listener for keyboard buttons:

keyBoard.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log(event.target);
        game.handleInteraction(event.target.textContent);
    }
    
});



// ------------------- Extra Credit ------------------- //

// c. Adding computer(laptop) keybord (keyup event) listener:
//document.addEventListener('keyup', (event) => {
    //if (event.key.code === 'KeyZ') {
//        console.log(event.key);
//        game.handleInteraction(event.key);  
    //} 
//});
