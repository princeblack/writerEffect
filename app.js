// const TypeWriter = function(txtElement, words, wait= 300){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = "";
//     this.wordIndex = 0;
//     this.wait = parseInt(wait , 10);
//     this.type();
//     this.isDeleting = false ;
// }

// // Type Method

// TypeWriter.prototype.type = function(){
//     // current index of word
//     const current = this.wordIndex % this.words.length;
//     // Get full text of currewnt word
//     const fullTxt = this.words[current];

//     // check if deleding 
//     if (this.isDeleting) {
//         // remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1)
//     } else {
//         // Add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1)
//     }

//     // Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
//     // Initial Type Speed
//     let typeSpeed = 300;

//     if(this.isDeleting){
//         typeSpeed /= 2;
//     }

//     // Check If word is complet
//     if (!this.isDeleting && this.txt === fullTxt) {
//         // Make pause at the and;
//         typeSpeed = this.wait;
//         // Set delete to true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === ''){
//         this.isDeleting = false;
//         // Move to the next word
//         this.wordIndex ++;
//         // pause before start typing
//         typeSpeed = 500;
//     }
//     setTimeout(()=> this.type(),typeSpeed)
// }

// // Init On Dom Load

// document.addEventListener("DOMContentLoaded", init);

// // Init App
// function init (){
//     const txtElement = document.querySelector('.text-type')
//     const words = JSON.parse(txtElement.getAttribute('data-words'))
//     const wait = txtElement.getAttribute('data-wait')
//     // Init TypeWriter
//     new TypeWriter(txtElement, words, wait)
// }

// ES6 Class

class TypeWriter{
    constructor(txtElement, words, wait= 300){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait , 10);
        this.type();
        this.isDeleting = false ;
    }
    type(){
        // current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of currewnt word
        const fullTxt = this.words[current];
        // check if deleding 
        if (this.isDeleting) {
            // remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
        // Initial Type Speed
        let typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /= 2;
        }

        // Check If word is complet
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at the and;
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            // Move to the next word
            this.wordIndex ++;
            // pause before start typing
            typeSpeed = 500;
        }
        setTimeout(()=> this.type(),typeSpeed)
    }
}


// Init On Dom Load

document.addEventListener("DOMContentLoaded", init);

// Init App
function init (){
    const txtElement = document.querySelector('.text-type')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait)
}