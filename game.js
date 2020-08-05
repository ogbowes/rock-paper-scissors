const result = document.querySelector('#result');

function computerPlay() {
	// Random number between 1 and 3 to randomly select an object for the computer
	let selection = Math.floor(Math.random() * 3);

	if (selection == 0) {
		return "rock";
	}
	else if (selection == 1) {
		return "paper";
	}
	return "scissors";
}

function playRound(playerSelection, computerSelection) {
	// Compare the two selections and determine winner
	switch (true) {
		case playerSelection == "rock" && computerSelection == "paper":
		result.textContent = ("You lose! Paper beats Rock");
		return 0;

		case playerSelection == "scissors" && computerSelection == "paper":
		result.textContent = ("You win! Scissors beats Paper");
		return 1;

		case playerSelection == "paper" && computerSelection == "rock":
		result.textContent = ("You win! Paper beats Rock");
		return 1;

		case playerSelection == "scissors" && computerSelection == "rock":
		result.textContent = ("You lose! Rock beats Scissors");
		return 0;

		case playerSelection == "rock" && computerSelection == "scissors":
		result.textContent = ("You win! Rock beats Scissors");
		return 1;

		case playerSelection == "paper" && computerSelection == "scissors":
		result.textContent = ("You lose! Scissors beats Paper");
		return 0;

		case playerSelection === computerSelection:
		result.textContent = ("Tie!");
		break;

		default:
		result.textContent = ("That's not an option in this game!");
		break;
	}
}

function game() {
	let playerPoints = 0;
	let computerPoints = 0;
	const buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			let winner = playRound(e.srcElement.id, computerPlay());
			
			// Determine winner of round
			if (winner == 0) {
				computerPoints++;
			}
			else if (winner == 1) {
				playerPoints++;
			}

			// Show winner of game and reset points
			if (playerPoints == 5 || computerPoints == 5) {
				if (playerPoints > computerPoints) {
					result.textContent = ("You won!");
					computerPoints = 0;
					playerPoints = 0;
				} 
				else {
					result.textContent = ("You lost. Maybe try again?");
					computerPoints = 0;
					playerPoints = 0;
				}
			}
		});
	});
}

game();