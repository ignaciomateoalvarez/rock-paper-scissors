const ROCK = 'Rock'
const PAPER = 'Paper'
const SCISSORS = 'Scissors'
const ROUNDS_TO_WIN = 3;

let getComputerChoice = () => {
  let options = [ROCK, PAPER, SCISSORS];
  return options[Math.floor(Math.random() * options.length)];
}

let capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const showScore = (playerCount, computerCount, roundsPlayed) => {
  console.log(`Played ${roundsPlayed} rounds. Player: ${playerCount}. Computer: ${computerCount}`);
}

let playRound = (playerSelection, computerSelection) => {
  playerSelection = capitalizeFirstLetter(playerSelection);

  if (playerSelection === computerSelection) {
    return 'Draw round'
  } else if (
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER) ||
    (playerSelection === ROCK && computerSelection === SCISSORS)
  ) {
    return 'Player wins the round!'
  } else {
    return 'Computer wins the round!'
  }
} 


let game = () => {
  
  let playerCount = 0;
  let computerCount = 0;
  let roundsPlayed = 0;
  
  while (playerCount < ROUNDS_TO_WIN && computerCount < ROUNDS_TO_WIN) {
    let playerChoice = prompt('Rock, Paper or Scissors?');
    let roundResult = playRound(playerChoice, getComputerChoice());
    
    console.log(roundResult);
    
    if (roundResult === 'Player wins the round!') {
      playerCount++;
    } else if (roundResult === 'Computer wins the round!') {
      computerCount++;
    }
    roundsPlayed++;
    showScore(playerCount, computerCount, roundsPlayed);
  }
  
  if (playerCount === computerCount) {
    return 'Match is a draw!'
  } else if (playerCount > computerCount) {
    return 'Player wins the match!' 
  } else {
    return 'Computer wins the match!'
  }
}

const playGame = () => {
  console.log('Welcome to Rock, Paper, Scissors!');
  console.log('First to win 3 rounds wins the match.');

  let continuePlaying = true;

  while (continuePlaying) {
    console.log(game());

    let playAgain = prompt('Do you want to play again? (yes/no)').toLowerCase();

    while (playAgain !== 'yes' && playAgain !== 'no') {
      playAgain = prompt('Invalid choice. Please enter yes or no.').toLowerCase();
    }

    if (playAgain === 'no') {
      continuePlaying = false;
    }
  }

  console.log('Thank you for playing. Goodbye!');
}


playGame();