/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Adding instances to classes:

// 1. 
const phrase = new Phrase('Life is like a box of chocolates');
//console.log(phrase.phrase);


// 2. 
const game = new Game();
//game.phrases.forEach( (phrase, index) => {
//    console.log(`Phrase ${index} - ${phrase}`);
//} );

// 3. Picking up random phrase as a new Phrase class parameter (then put in phrase const variable):
phrase.phrase = game.getRandomPhrase();
console.log( phrase.phrase );
console.log( phrase);




// 1. Event listener for "Start Game" button:

// 2. Event listener for keyboard buttons:






// ------------------- Extra Credit ------------------- //