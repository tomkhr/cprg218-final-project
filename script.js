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

