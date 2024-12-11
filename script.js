console.log ("Hello World!")

const startButton = document.getElementById('startButton');
const tapButton = document.getElementById('tapButton')
const restartButton = document.getElementById('restartButton');
const timer = document.getElementById('timer');
const yourScore = document.getElementById('yourScore');
const instruction = document.getElementById('instructions');

let score = 0;
let timeLeft = 15;

startButton.addEventListener('click', function(){
    startButton.style.display = 'none';
    tapButton.style.display = 'flex';
    instruction.style.display = 'none';
    startGame();
});

tapButton.addEventListener('click', function(){
    score++
});

function startGame (){
    setInterval(function(){
        timeLeft--;
        timer.textContent = 'Time left: ' + timeLeft + ' seconds';

        if (timeLeft <= 0) {
            clearInterval;
            endGame();
        }
    },1000)
};

function endGame (){
    tapButton.style.display = 'none';
    restartButton.style.display = 'inline';
    yourScore.textContent = 'Your score is: ' + score;
    yourScore.style.display = 'inline';
    timer.style.display = 'none';
};