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
                runGame(gametype);
            }
        } )
    }

    runGame("addition")
})

/**
 * The main loop of the game, called when the script is first loaded
 * after the user's answer has been processed
 */

function runGame(gametype){

    //Getting two operators with random numbers 1 - 25//
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    if( gametype === "addition"){
        displayAdditionQuestion(num1, num2);
    } else{
        alert(`Unknwon game type ${gametype}`);
        throw `Unknwon game type ${gametype} Aborting`;
    }
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){

    document.getElementById("operand-one").textContent = operand1;
    document.getElementById("operand-two").textContent = operand2;
    document.getElementById("operator").textContent = "+";


}

function displaySubtractQuestion(){

}

function displayMultiplyQUestion(){

}

function displayDivisionQuestion(){

}
