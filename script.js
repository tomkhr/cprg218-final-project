console.log ("Hello World!")

const startButton = document.getElementById('startButton');
const tapButton = document.getElementById('tapButton')
const restartButton = document.getElementById('restartButton');
const timer = document.getElementById('timer');
const yourScore = document.getElementById('yourScore');
const instruction = document.getElementById('instructions-div');
const hitsPerSecond = document.getElementById('hitsPerSecond');
const recordScoreAndHits = document.getElementById('record');
const numberThisRoundScore = document.getElementById('numberThisRoundScore');

let score = 0;
// Change timeLeft to 15 before submitting
let timeLeft = 2;
let intervalFunc;
let hitPerSecondCalculated;
let formatedHitsPerSecond;
let allScores = [];
let allHitsPerSec = [];
let allScoresCalculated;
let allHitsPerSecCalculated;

startButton.addEventListener('click', function(){
    startButton.style.display = 'none';
    tapButton.style.display = 'flex';
    instruction.style.display = 'none';
    startGame();
});

tapButton.addEventListener('click', function(){
    score++
    yourScore.style.display = 'inline';
    yourScore.textContent = score;
});

function startGame (){
    timer.style.display = 'inline';
    yourScore.style.display = 'inline';
    yourScore.textContent = '0';
    hitsPerSecond.style.display = 'none';
    
    intervalFunc = setInterval(function(){
        timeLeft--;

        timer.textContent = 'Time left: ' + timeLeft + ' seconds';
        if (timeLeft <= 0) {
            clearInterval(intervalFunc);
            endGame();
        }
    },1000)
};

restartButton.addEventListener('click', function(){

        score = 0;
        timeLeft = 15;
        restartButton.style.display = 'none';
        recordScoreAndHits.style.display = 'none'
        tapButton.style.display = 'flex';
        timer.style.display = 'inline';
        timer.textContent = 'Time left: ' + timeLeft + ' seconds';
        yourScore.style.display = 'inline';
        yourScore.textContent = '0';
        numberThisRoundScore.style.display = 'none';
        startGame();
});



function endGame (){
    tapButton.style.display = 'none';
    restartButton.style.display = 'inline';
    allScores.push(score);
    numberThisRoundScore.style.display = 'inline';
    numberThisRoundScore.textContent = score;
    yourScore.textContent = 'Score this round: ';
    yourScore.style.display = 'inline';
    timer.style.display = 'none';
    hitPerSecondCalculated = score / 15;
    formatedHitsPerSecond = hitPerSecondCalculated.toFixed(2)
    hitsPerSecond.textContent = formatedHitsPerSecond + ' hits per second';
    allHitsPerSec.push(formatedHitsPerSecond);
    hitsPerSecond.style.display = 'inline';
    allScoresCalculated = Math.max(...allScores);
    allHitsPerSecCalculated = Math.max(...allHitsPerSec);
    recordScoreAndHits.textContent = 'Your record is: ' + allScoresCalculated + ' hits with ' + allHitsPerSecCalculated + ' hits/sec'
    recordScoreAndHits.style.display = 'inline';
};