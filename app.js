const userChoiceDispay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const buttonClick = document.querySelectorAll('button')
const result = document.getElementById('result')
const scoreDisplay = document.getElementById('score')

let userChoice
let computerChoice
let score = 0

buttonClick.forEach(buttonClick => buttonClick.addEventListener('click', (e) => { 
   userChoice = e.target.id
   userChoiceDispay.innerHTML = userChoice
   computerResponse()
   resultResponse()

}))

function computerResponse() {
    const generateNumber = Math.floor(Math.random() * 3) + 1

    if (generateNumber == 1){ 
        computerChoice = 'rock'
    }
    if (generateNumber == 2){ 
        computerChoice =  'paper'
    }
    if (generateNumber == 3){ 
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function resultResponse(){  
    if (computerChoice == 'rock' && userChoice == 'paper'){ 
        result.innerHTML = 'You won'
        score += 1
        scoreDisplay.innerHTML = score
    }
    if (computerChoice == 'paper' && userChoice == 'rock'){ 
        result.innerHTML = 'I won'
    }
    if (computerChoice == 'scissors' && userChoice == 'paper'){ 
        result.innerHTML = 'I won'
    }
    if (computerChoice == 'paper' && userChoice == 'scissors'){ 
        result.innerHTML = 'You won'
        score += 1
        scoreDisplay.innerHTML = score
    }
    if (computerChoice == 'scissors' && userChoice == 'rock'){
        result.innerHTML = 'You won'
        score += 1
        scoreDisplay.innerHTML = score
    }
    if (computerChoice == 'rock' && userChoice == 'scissors'){  
        result.innerHTML = 'I won'
    }
    if (computerChoice == userChoice){ 
        result.innerHTML = 'we think the same'
    }
  

}