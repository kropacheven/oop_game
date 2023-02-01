/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Gold fields'),
            new Phrase('Blue sky'),
            new Phrase('Green grass'),
            new Phrase('Colorful flowers'),
            new Phrase('Red sunset')
        ];
        this.activePhrase = null;
    }
    /**
     * 1. Selects random phrase from phrases property
     * @returns {Object} Phrase object (string - ?) chosen to be used
     */
     getRandomPhrase() {
         const randomIndex = Math.floor(Math.random() * 5); // creates random numbers from 0 to 5
         //console.log(randomIndex);
         return this.phrases[randomIndex]; // chooses random phrase from this.phrases array;   
     }

    /**
    * 2. Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        // a. Changing start overlay on game overlay:
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        // b. Getting new random phrase and initializing phrase class with it:
        this.activePhrase = this.getRandomPhrase();

        // c. Displaying random phrase on display:
        this.activePhrase.addPhraseToDisplay();

        // d. Reseting a new game after playing is done:
        this.missed = 0; // for resetting a game - when start button is clicked(win or lose)
        let hearts = document.querySelectorAll('.tries'); // for resetting a game - when start button is clicked(win or lose)
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].firstChild.src = "images/liveHeart.png";
        }
        const buttons = document.getElementsByTagName('button'); // clearing buttons classes after game reset
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = 'key';
        }
        //const li = document.getElementsByClassName('letter'); // clearing buttons classes after game reset
        //for (let i = 0; i < li.length; i++) {
        //    li[i].remove();
        // }
    }
    /**
    * 3. Checks for winning move
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
    * 4. Displays game over message
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
    /**
    * 5. Increases the value of the missed property
    * Removes a life from the scoreboard
    */
    removeLife() {
        const overlay = document.getElementById('overlay');
        const overlayMessage = document.getElementById('game-over-message');
        let hearts = document.querySelectorAll('.tries');
        hearts[this.missed - 1].firstChild.src = "images/lostHeart.png";
       // Checks if player has remaining lives and ends game if player is out
       if (this.missed === 5) {
        //console.log('Game over');
        overlay.style.display = 'block';
        overlay.removeAttribute('class');
        overlay.className = 'lose';
        overlayMessage.textContent = 'Sorry, better luck next time!';
     }
    }
    // 6. Handle interaction: 
    handleInteraction(button) {
    let letter = button.textContent;
       if ( this.activePhrase.checkLetter(letter) === true ) {
        this.activePhrase.showMatchedLetter(letter);
        button.className = 'chosen';
       } else {
        this.missed++;
        button.className = 'wrong';
        this.removeLife();
       }
     this.checkForWin();
     this.gameOver();
    }
};
