// press begin button
    // begin timer countdown (with a var (timeLeft) to decrement)
    // hide intro and go to question 1

// Question 1
    // format question 1 css



// GLOBAL VARS
var timeLeft = 100;
var timerDivEl = document.getElementById("timer-div");
var start = document.getElementById("begin");
var homeScreen = document.getElementById("homescreen");
var start = document.getElementById("begin");
var correctEl = document.querySelector("correct1");
var incorrectEl1 = document.querySelector("incorrect1");
var incorrectEl2 = document.querySelector("incorrect2");;
var incorrectEl3 = document.querySelector("incorrect3");;
var firstEl = document.getElementById("first");
var secondEl = document.getElementById("second");
var thirdEl = document.getElementById("third");
var fourthEl = document.getElementById("fourth");
var fifthEl = document.getElementById("fifth");

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