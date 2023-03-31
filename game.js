
function setRounds() {
    var roundsInput = Math.floor(document.getElementById('input').value);
    if (Number.isInteger(parseInt(roundsInput)) == true) {
        
        document.getElementById('show-rounds').textContent = roundsInput;
        document.getElementById('input-field').style.display = "none";

        

        return roundsInput;
    } else {
        document.getElementById('show-rounds').textContent = "Enter a Number";
        document.getElementById('input').value = '';
    }
}




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

    const cpuResult = document.getElementById('result-text');
    cpuResult.textContent = `CPU played: ${cpu_play}`

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

    const result = document.getElementById('resolution');
    result.textContent = resultText;

}


function eventHandler() {
    if (document.getElementById('input').value !== '') {
        document.getElementById('show-rounds').textContent = document.getElementById('input').value;
    }
}