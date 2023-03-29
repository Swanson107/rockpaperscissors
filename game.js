


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice;
}

let player_choice = String(prompt("Rock, Paper, or Scissors: "));

console.log("player play: " + player_choice);

let player_play = player_choice.toLowerCase;
console.log(player_play)

let cpu_choice = getComputerChoice();

if (cpu_choice === 0){
    cpu_play = "rock";
} else if (cpu_choice === 1){
    cpu_play = "paper";
} else if (cpu_choice === 2){
    cpu_play = "scissors";
}

console.log("cpu play: " + cpu_play)



