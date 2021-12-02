// waits until the DOM finish to load then will start to run the game//
//function to get the event listeners aiming to use the minimal of global varibles

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === 'submit'){
                checkAnswer();
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

    } else if(gametype === "multiply"){
        displayMultiplyQUestion(num1, num2);
    } else{
        alert(`Unknwon game type ${gametype}`);
        throw `Unknwon game type ${gametype} Aborting`;
    }
}

/**
 * Checks the user answer with the first element on the
 * array returned calculateCorrecAnswer() and check if is correct
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("Congrats.. your answer is correct");
        incrementScore();
    } else{
        incrementWrongAnswer();
        alert(`Sorry but your answer ${userAnswer} is wrong. The right would be ${calculatedAnswer[0]}`);
       throw `Sorry but your answer ${userAnswer} is wrong. The right would be ${calculatedAnswer[0]} Aborting...`;
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (numbers) ands the operator
 * returns an array with two elemns, the correct answer and the gametype
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand-one").innerText);
    let operand2 = parseInt(document.getElementById("operand-two").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+"){
        return [operand1 + operand2, "addition"];
    } else if(operator === "x"){
        return [operand1 * operand2, "multiply"];
    } else{
        alert(`Unknown operator ${operator}`);
    }



}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
    document.getElementById("correct").textContent = parseInt(document.getElementById("correct").innerText) + 1;
    
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
    document.getElementById("incorrect").textContent = parseInt(document.getElementById("incorrect").innerHTML) + 1;


}

function displayAdditionQuestion(operand1, operand2){

    document.getElementById("operand-one").textContent = operand1;
    document.getElementById("operand-two").textContent = operand2;
    document.getElementById("operator").textContent = "+";


}

function displaySubtractQuestion(){

}

function displayMultiplyQUestion(operand1, operand2){
    document.getElementById("operand-one").textContent = operand1;
    document.getElementById("operand-two").textContent = operand2;
    document.getElementById("operator").textContent ="x";

}

function displayDivisionQuestion(){

}
