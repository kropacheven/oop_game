/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * 1. Display phrase on game board
    */
     addPhraseToDisplay() {
        const letters = this.phrase.split('');
        //console.log(letters);
        let html = '';
        for (let i = 0; i <letters.length; i++) {
            if (letters[i] === ' ') {
                html += `<li class='space'> </li>`;
            } 
            else {
                html += `<li class='hide letter'>${letters[i]}</li>`;
            }
        }
        console.log(html);
        document.querySelector('#letters').innerHTML = html;
     }
    /**
    * 2. Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const letters = this.phrase.split('');
        for (let i = 0; i < letters.length; i++) {
            if ( letter === letters[i] ) {
                console.log(true);
                //return true;
            } else {
                console.log(false);
                //return false;
            }
        }
    }
    /**
    * 3. Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const lettersDisplayed = document.getElementsByClassName('letter');
        //console.log(lettersDisplayed);
        for (let i = 0; i < lettersDisplayed.length; i++) {
            if ( letter === lettersDisplayed[i].textContent ) {
                lettersDisplayed[i].classList.remove('hide');
                lettersDisplayed[i].classList.add('show');
            } 
            
        }
    }
}