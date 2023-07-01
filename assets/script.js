// press begin button
    // begin timer countdown (with a var (timeLeft) to decrement)
    // hide intro and go to question 1

// Question 1
    // format question 1 css



// GLOBAL VARS
var timeLeft = 100;
var start = document.getElementById("begin");
var homeScreen = document.getElementById("homescreen");
var start = document.getElementById("begin");
var firstEl = document.getElementById("first");
var timerDivEl = document.getElementById("timer-div");

function incorrect(){
    timeLeft -= 10;
}
function correct(){

}

function questionOne (){
    homeScreen.style.display = "none";
    firstEl.style.display = "block";


}

function questionTwo (){

}

function questionThree (){

}

function questionFour (){

}

function questionFive (){

}

start.addEventListener("click", questionOne);