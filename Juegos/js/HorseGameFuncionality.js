
var btnGamePush = document.getElementById("push");
var btnGameStart = document.getElementById("start");
var horse = document.getElementById("horse");
var l = document.getElementById("counterP");
var score = document.getElementById("score");
var divCounter = document.getElementById("counter");
var btnAgain = document.getElementById("again");
var btnFinish = document.getElementById("finish");

btnGameStart.addEventListener("click", startGame);
btnGamePush.addEventListener("click", moveHorse);

count = 15;

var initialTime = 0;
var finishTime = 0;
var timeFinal = 0;

function startGame () {
    btnGameStart.classList.add("hidden");
    btnGamePush.classList.remove("hidden");
    initialTime = new Date().getSeconds();
    if (initialTime >= 50) {
        initialTime = 60 - initialTime;
    } else {
        initialTime;
    }
};

function moveHorse () {
    count+= 10;
    horse.style.left = `${count}px`;
    if (count > 506) {
        horse.style.left = "506px";
        finishTime = new Date().getSeconds();
        timeFinal = finishTime - initialTime;
        l.innerHTML = timeFinal;
        divCounter.classList.remove("hidden");
        btnGamePush.classList.add("hidden");
        if (timeFinal < 10) {
            score.classList.remove("hidden");
            score.innerHTML = "15 PUNTOS"; 
        } else if (timeFinal > 10 && timeFinal <= 15) {
            score.classList.remove("hidden");
            score.innerHTML = "10 PUNTOS";
        } else if (timeFinal > 15 && timeFinal <= 30) {
            score.classList.remove("hidden");
            score.innerHTML = "5 PUNTOS";
        } else if (timeFinal > 30 && timeFinal <= 60) {
            score.classList.remove("hidden");
            score.innerHTML = "1 PUNTO";
        }
    };
};

btnAgain.addEventListener("click", replay);

function replay () {
    btnGameStart.classList.remove("hidden");
    btnGamePush.classList.add("hidden");
    divCounter.classList.add("hidden");
    score.classList.add("hidden");
    horse.style.left = "15px";
    count = 15;
    initialTime = 0;
    finishTime = 0;
    timeFinal = 0;
};

btnFinish.addEventListener("click", close);

function close () {
    var horseGameSection = document.getElementById("horseGame");
    var plays = document.getElementById("plays");
    var bar = document.getElementById("progressBar")
    horseGameSection.classList.add("hidden");
    bar.classList.add("hidden");
    plays.classList.remove("hidden");
}

