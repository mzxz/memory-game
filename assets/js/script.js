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

/**
 * Get randoum images when the game start.
 */
 function shuffle(array){
    let currentIndex = array.length, temporaryValue, randomIndex;
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
shuffle(images);

/**
 * Dislay all the images
 */

 function displayImages(){
    for (let i = 0; i < images.length; i++) {
        gameArea.innerHTML += '<div><img alt="memory game images" src="'+images[i]+'"></div>';
    }
}
displayImages();

// Check for match
var flg = true;
var arr = [];
for (let i = 0; i < allDivs.length; i++){
    allDivs[i].addEventListener('click', function(){
        if(flg){
            this.firstChild.style.opacity = '1';
            this.firstChild.style.visibility = 'visible';
            if(arr.length == 0){
                arr[0] = this;
            }else if (arr.length == 1){
                arr[1] = this;
            } 

            if (arr.length == 2){
                flg = false;
                setTimeout(checkImages, 250);
            }

        } else {
            return;
        }
    })

    function checkImages (){
        if (arr[0].firstChild.getAttribute('src') === arr[1].firstChild.getAttribute('src')){
        } else{
            arr[0].firstChild.style.opacity = 0;
            arr[1].firstChild.style.opacity = 0;
        }

        arr = [];
        flg = true;
    }
}

