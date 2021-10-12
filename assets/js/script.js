// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// Global Variables
let images = ['assets/images/approximately.png',
              'assets/images/divide.png',
              'assets/images/equal.png',
              'assets/images/percent.png',
              'assets/images/plus.png',
              'assets/images/times.png',
              'assets/images/approximately.png',
              'assets/images/divide.png',
              'assets/images/equal.png',
              'assets/images/percent.png',
              'assets/images/plus.png',
              'assets/images/times.png'];

let gameArea = document.getElementById('game-area');
let allDivs = document.getElementsByTagName('div');

function shuffle(){

}

/**
 * Dislay all the images
 */

 function displayImages(){
    for (let i = 0; i < images.length; i++) {
        gameArea.innerHTML += '<div><img src="'+images[i]+'"></div>';
    }
}
displayImages();

// Check for match
