


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice;
}

let player_choice = String(prompt("Rock, Paper, or Scissors: "));

console.log("player play: " + player_choice);

let player_play = player_choice.toLowerCase();

if (player_play === "rock"){
    player_play = 0;
} else if (player_play === "paper"){
    player_play = 1;
} else if (player_play === "scissors" || player_play === "scissor"){
    player_play = 2;
}

let cpu_choice = getComputerChoice();

if (cpu_choice === 0){
    cpu_play = "rock";
} else if (cpu_choice === 1){
    cpu_play = "paper";
} else if (cpu_choice === 2){
    cpu_play = "scissors";
}

console.log("cpu play: " + cpu_play)

if (player_play > cpu_play && cpu_play != 2){
    console.log("Player Wins!");
} else if (player_play < cpu_play && player_play != 2){
    console.log("CPU Wins!");
} else if (player_play === cpu_play){
    console.log("Tie!");
} else if (player_play === 2 && cpu_play === 0){
    console.log("CPU Wins!");
} else if (player_player === 0 && cpu_play === 2){
    console.log("Player Wins!");
}



