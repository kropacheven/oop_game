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

startBtn.addEventListener('click', () => {
    game.startGame();
    game.missed = 0; // for resetting a game - when start button is clicked(win or lose)
    let hearts = document.querySelectorAll('.tries'); // for resetting a game - when start button is clicked(win or lose)
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].firstChild.src = "images/liveHeart.png";
    }
});


// 1. Event listener for "Start Game" button:

// 2. Event listener for keyboard buttons:






// ------------------- Extra Credit ------------------- //