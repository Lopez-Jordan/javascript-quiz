
// GLOBAL VARS
var timeLeft = 60;
var score = 0;
var nameInput = document.getElementById('nameInput');
var submitButton = document.getElementById('submitButton');
var timerEl = document.getElementById("timer");
var start = document.getElementById("begin");
var homeScreenEl = document.getElementById("homescreen");
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
var fillEl = document.getElementById("fill");
var startOverEl = document.getElementById("startOver")

function logInitials(){
    var userStorage = {
        initials: nameInput.value,
        userScore: score
    }
    localStorage.setItem("user " + String(localStorage.length), JSON.stringify(userStorage));
}
function refreshPage(){
    location.reload();
}

function countDown(){
    timerEl.innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft < 0){
        results();
    }
    else{
        setTimeout(countDown, 1000);
    }
}
function incorrect(){
    alert("Incorrect :(");
    timeLeft -= 10;
}
function correct(){
    score += 20;
    alert("Correct :D"); //Change later
}

function homeScreen(){
    resultsEl.style.display = "none";
    homeScreenEl.style.display = "block"
    start.addEventListener("click", countDown);
    start.addEventListener("click", questionOne);
}
function questionOne (){
    resultsEl.style.display = "none";
    homeScreenEl.style.display = "none";
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
    resultsEl.style.display = "none";
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
    resultsEl.style.display = "none";
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
    resultsEl.style.display = "none";
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
    resultsEl.style.display = "none";
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
    timeLeft = 0;
    firstEl.style.display = "none";
    secondEl.style.display = "none";
    thirdEl.style.display = "none";
    fourthEl.style.display = "none";
    fifthEl.style.display = "none";
    resultsEl.style.display = "flex";  
    fillEl.innerHTML = score + "  /100";
    submitButton.addEventListener("click", logInitials);
    startOverEl.addEventListener("click", refreshPage);
}

homeScreen();