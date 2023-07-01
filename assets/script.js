// press begin button
    // begin timer countdown (with a var (timeLeft) to decrement)
    // hide intro and go to question 1

// Question 1
    // format question 1 css



// GLOBAL VARS
var timeLeft = 100;
var start = document.getElementById("begin");
var homeScreen = document.getElementById("homescreen");
var questionOne = document.getElementById("questionOne");


function questionOne (){
    homeScreen.style.display = "none";
    questions.style.display = "block";

}




start.addEventListener("click", questionOne);

