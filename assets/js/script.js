// waits until the DOM finish to load then will start to run the game//
//function to get the event listeners aiming to use the minimal of global varibles

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === 'submit'){
                alert("You've clicked to submit!")
            } else{
                let gametype = this.getAttribute('data-type')
                alert(`You've clicked on ${gametype}!`)
            }
        } )
    }
})

/**
 * The main loop of the game, called when the script is first loaded
 * after the user's answer has been processed
 */

function runGame(){

    //Getting two operators with random numbers 1 - 25//
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQUestion(){

}

function displayDivisionQuestion(){

}
