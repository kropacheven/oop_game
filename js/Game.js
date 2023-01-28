/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
        'gold fields',
        'blue sky',
        'green grass',
        'colorful flowers',
        'red sunset'
        ];           // an array of Phrase objects to use with the Game - empty for now
        this.activePhrase = 'null'; //this is the Phrase object that's currently in play
    }
    // startGame() {

    // }
        /**
         * Selects random phrase from phrases property
         * @returns {Object} Phrase object (string - ?) chosen to be used
         */
        getRandomPhrase( ) {
            const randomIndex = Math.floor(Math.random() * 5); // creates random numbers from 0 to 5
            //console.log(randomIndex);
            return this.phrases[randomIndex]; // chooses random phrase from this.phrases array;
            //console.log(typeof randomPhrase);
            ;
         }
    // handleInteraction() {

    // }
    // removeLofe() {

    // }
    // checkForWin() {

    // }
    // gameOver() {

        
    // }
}