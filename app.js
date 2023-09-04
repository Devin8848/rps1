const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const ratio1 = document.getElementById('ratio1');
const ratio2 = document.getElementById('ratio2');

let userChoice
let computerChoice
let result

var rButton = document.getElementById('rock');
rButton.style.height = '100px';
rButton.style.width= '200px';
document.getElementById("rock").style.background='#90EE90';

var pButton = document.getElementById('paper');
pButton.style.height = '100px';
pButton.style.width= '200px';
pButton.style.accentColor = 'aqua';
document.getElementById("paper").style.background='#90EE90';


var sButton = document.getElementById('scissors');
sButton.style.height = '100px';
sButton.style.width= '200px';
sButton.style.accentColor = 'aqua';
document.getElementById("scissors").style.background='#90EE90';


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML= computerChoice
}

function getResult(){
    if (computerChoice === userChoice) {
        result = 'DRAW!!!'
        Ratio2()
    }

    if (computerChoice === 'rock' & userChoice === 'paper') {
        result = 'You WON!!!'
        Ratio2()
        Ratio1()
    }

    if (computerChoice === 'rock' & userChoice === 'scissors') {
        result = 'You Lost!!!'
        Ratio2()
    }

    if (computerChoice === 'paper' & userChoice === 'scissors') {
        result = 'You WON!!!'
        Ratio2()
        Ratio1()
    }

    if (computerChoice === 'paper' & userChoice === 'rock') {
        result = 'You Lost!!!'
        Ratio2()
    }

    if (computerChoice === 'scissors' & userChoice === 'rock') {
        result = 'You WON!!!'
        Ratio2()
        Ratio1()
    }

    if (computerChoice === 'scissors' & userChoice === 'paper') {
        result = 'You Lost!!!'
        Ratio2()
    }
    resultDisplay.innerHTML = result
}

function Ratio1() {
    const ratio1Text = ratio1.textContent; // grabs "0" from the val span
    let ratio1Num = Number(ratio1Text); // converts "0" to numeric 0
    ratio1Num += 1; // adds 1 to valNum changing it from 0 to 1
    ratio1.textContent = ratio1Num; // puts it back in the HTML
  }

function Ratio2() {
    const ratio2Text = ratio2.textContent; // grabs "0" from the val span
    let ratio2Num = Number(ratio2Text); // converts "0" to numeric 0
    ratio2Num += 1; // adds 1 to valNum changing it from 0 to 1
    ratio2.textContent = ratio2Num; // puts it back in the HTML
  }
