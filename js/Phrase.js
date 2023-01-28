/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }
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
    // checkLetter() {

    // }
    // showMatchedLetter() {
        
    // }
}