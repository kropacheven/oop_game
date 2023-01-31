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
    /**
    * 1. Begins game by selecting a random phrase and displaying it to user
    */
     startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.getRandomPhrase();
        this.activePhrase = phrase.phrase;
        //console.log(this.activePhrase);
        phrase.addPhraseToDisplay(); // ?????
     }
    /**
     * 2. Selects random phrase from phrases property
     * @returns {Object} Phrase object (string - ?) chosen to be used
     */
    getRandomPhrase( ) {
        const randomIndex = Math.floor(Math.random() * 5); // creates random numbers from 0 to 5
        //console.log(randomIndex);
        return this.phrases[randomIndex]; // chooses random phrase from this.phrases array;
        //console.log(typeof randomPhrase);
        ;
        }
    // 3. 
    handleInteraction(letter) {
        phrase.showMatchedLetter(letter);
        phrase.checkLetter(letter);
        this.checkForWin();
        this.removeLife();
        this.gameOver();
     }
    /**
    * 4. Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const overlay = document.getElementById('overlay');
        const overlayMessage = document.getElementById('game-over-message');
        let hearts = document.querySelectorAll('.tries');
        if (phrase.checkLetter() === false) {
            this.missed++;
            console.log(this.missed);
        } else {
            this.missed;
        }

        hearts[this.missed - 1].firstChild.src = "images/lostHeart.png";
        if (this.missed === 5) {
            console.log('Game over');
            overlay.style.display = 'block';
            overlay.removeAttribute('class');
            overlay.className = 'lose';
            overlayMessage.textContent = 'Sorry, better luck next time!';
         }
    
    }
    /**
    * 5. Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
      checkForWin() {
        const letter = document.getElementsByClassName('letter');
        const show = document.getElementsByClassName('show');
        if (letter.length === show.length) {
            return true;
            console.log('The game is won!!!');
        } else {
            return false;
        }
      }
    /**
    * 6. Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver() {
        const overlay = document.getElementById('overlay');
        const overlayMessage = document.getElementById('game-over-message');
        if (this.checkForWin() === true ) {
            overlay.style.display = 'block';
            overlay.removeAttribute('class');
            overlay.className = 'win';
            overlayMessage.textContent = 'Great job!';
        }
        
    }
}