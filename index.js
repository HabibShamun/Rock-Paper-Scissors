const choice =["rock","paper","scissors"];
const computerDisplay= document.getElementById("computerDisplay");
const playerDisplay= document.getElementById("playerDisplay");
const resultDisplay= document.getElementById("resultDisplay");
const playerScoreDisplay= document.getElementById("playerScoreDisplay");
const computerScoreDisplay= document.getElementById("computerScoreDisplay");

let playerScore=0;
let computerScore=0;

function playgame(playerChoice)
{
const computerChoice=choice[Math.floor(Math.random()*3)];
let result="";

if(playerChoice===computerChoice)
{
    result="ITS A TIE!";
}
else
{
    switch(playerChoice){
        case "rock":
            result=(computerChoice=="scissors"?"YOU WIN!":"YOU LOSE!");
            break;
        case "paper":
        result=(computerChoice=="rock"?"YOU WIN!":"YOU LOSE!");
            break;
        case "scissors":
        result=(computerChoice=="paper"?"YOU WIN!":"YOU LOSE!");
            break;
    }
}

computerDisplay.textContent=`Computer choice: ${computerChoice}`;
playerDisplay.textContent=`player choice: ${playerChoice}`;
resultDisplay.textContent=result;

resultDisplay.classList.remove("greentext","redtext");

switch(result)
{
    case "YOU WIN!":
        resultDisplay.classList.add("greentext");
        playerScore++;
        playerScoreDisplay.textContent=playerScore;
        break;
    case "YOU LOSE!":
        resultDisplay.classList.add("redtext");
        computerScore++;
        computerScoreDisplay.textContent=computerScore;
        break;
        
}


}