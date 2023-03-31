
function game(player_play){

    console.log(player_play);
    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3)
        return choice;
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

    if (player_play === 0 && cpu_choice === 2){
        console.log("Player Wins!!");
        resultText = "Player Wins!";
    } else if (player_play === 2 && cpu_choice === 0){
        console.log("CPU Wins!!");
        resultText = "CPU Wins!";
    } else if (player_play > cpu_choice){
        console.log("Player Wins!");
        resultText = "Player Wins!";
    } else if (player_play < cpu_choice){
        console.log("CPU Wins!");
        resultText = "CPU Wins!"
    } else if (player_play === cpu_choice){
        console.log("Tie!");
        resultText = "Tie!";
    }

    let result = document.querySelector('#resolution');

    result.innerHTML = resultText;



}