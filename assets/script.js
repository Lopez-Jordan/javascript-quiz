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
var correctEl = document.getElementById("q1correct");
var incorrectEl1 = document.getElementById("q1incorrect1");
var incorrectEl2 = document.getElementById("q1incorrect2");;
var incorrectEl3 = document.getElementById("q1incorrect3");;
var firstEl = document.getElementById("first");
var secondEl = document.getElementById("second");
var thirdEl = document.getElementById("third");
var fourthEl = document.getElementById("fourth");
var fifthEl = document.getElementById("fifth");
var resultsEl = document.getElementById("results");

function startTimer(){
    // TO DO --------------------------
}

function incorrect(){
    alert("Incorrect :(");
    timeLeft -= 10;
}
function correct(){
    alert("Correct :D"); //Change later
}

function questionOne (){
    homeScreen.style.display = "none";
    firstEl.style.display = "block";
    correctEl.addEventListener("click", correct);
    correctEl.addEventListener("click", questionTwo);
    incorrectEl1.addEventListener('click', incorrect);
    incorrectEl1.addEventListener("click", questionTwo);
    incorrectEl2.addEventListener('click', incorrect);
    incorrectEl2.addEventListener("click", questionTwo);
    incorrectEl3.addEventListener('click', incorrect);
    incorrectEl3.addEventListener("click", questionTwo);
}

function questionTwo (){
    correctEl = document.getElementById("q2correct");
    incorrectEl1 = document.getElementById("q2incorrect1");
    incorrectEl2 = document.getElementById("q2incorrect2");
    incorrectEl3 = document.getElementById("q2incorrect3");
    
    firstEl.style.display = "none";
    secondEl.style.display = "block";

    correctEl.addEventListener("click", correct);
    correctEl.addEventListener("click", questionThree);
    incorrectEl1.addEventListener('click', incorrect);
    incorrectEl1.addEventListener("click", questionThree);
    incorrectEl2.addEventListener('click', incorrect);
    incorrectEl2.addEventListener("click", questionThree);
    incorrectEl3.addEventListener('click', incorrect);
    incorrectEl3.addEventListener("click", questionThree);
}

function questionThree (){
    correctEl = document.getElementById("q3correct");
    incorrectEl1 = document.getElementById("q3incorrect1");
    incorrectEl2 = document.getElementById("q3incorrect2");
    incorrectEl3 = document.getElementById("q3incorrect3");

    secondEl.style.display = "none";
    thirdEl.style.display = "block"
    
    correctEl.addEventListener("click", correct);
    correctEl.addEventListener("click", questionFour);
    incorrectEl1.addEventListener('click', incorrect);
    incorrectEl1.addEventListener("click", questionFour);
    incorrectEl2.addEventListener('click', incorrect);
    incorrectEl2.addEventListener("click", questionFour);
    incorrectEl3.addEventListener('click', incorrect);
    incorrectEl3.addEventListener("click", questionFour);
}

function questionFour (){
    correctEl = document.getElementById("q4correct");
    incorrectEl1 = document.getElementById("q4incorrect1");
    incorrectEl2 = document.getElementById("q4incorrect2");
    incorrectEl3 = document.getElementById("q4incorrect3");

    thirdEl.style.display = "none";
    fourthEl.style.display = "block";

    correctEl.addEventListener("click", correct);
    correctEl.addEventListener("click", questionFive);
    incorrectEl1.addEventListener('click', incorrect);
    incorrectEl1.addEventListener("click", questionFive);
    incorrectEl2.addEventListener('click', incorrect);
    incorrectEl2.addEventListener("click", questionFive);
    incorrectEl3.addEventListener('click', incorrect);
    incorrectEl3.addEventListener("click", questionFive);
}

function questionFive (){
    correctEl = document.getElementById("q5correct");
    incorrectEl1 = document.getElementById("q5incorrect1");
    incorrectEl2 = document.getElementById("q5incorrect2");
    incorrectEl3 = document.getElementById("q5incorrect3");

    fourthEl.style.display = "none";
    fifthEl.style.display = "block";
    
    correctEl.addEventListener("click", correct);
    correctEl.addEventListener("click", results);
    incorrectEl1.addEventListener('click', incorrect);
    incorrectEl1.addEventListener("click", results);
    incorrectEl2.addEventListener('click', incorrect);
    incorrectEl2.addEventListener("click", results);
    incorrectEl3.addEventListener('click', incorrect);
    incorrectEl3.addEventListener("click", results);
}


function results(){
    fifthEl.style.display = "none";
    resultsEl.style.display = "block";  
}

start.addEventListener("click", startTimer);
start.addEventListener("click", questionOne);
