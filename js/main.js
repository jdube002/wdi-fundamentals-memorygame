//Create cards for memory game
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
//Create an empty array for cards that will be in play
var cardsInPlay = [];
//Create variable to store current user score
var scoreCount = 0;
var scoreWrong = 0;
//Function to store the steps to check for a match and add score
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  scoreCount += 1;
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
  scoreWrong += 1;
}
//Display Correct Score Total
var newScore = document.createElement('span');
var removeScore = document.getElementById('score');
if (removeScore.firstChild) {
  removeScore.removeChild(removeScore.firstChild);
  };
newScore.innerHTML = scoreCount;
document.getElementById('score').appendChild(newScore);
//Display Incorrect Score Total
var incorrectNewScore = document.createElement('span');
var removeWrongScore = document.getElementById('wrong-score');
if (removeScore.firstChild) {
  removeWrongScore.removeChild(removeWrongScore.firstChild);
  };
incorrectNewScore.innerHTML = scoreWrong;
document.getElementById('wrong-score').appendChild(incorrectNewScore);
  };

//function for resetting game board and card count
var resetGame = function() {
  cardsInPlay = [];
  var removeCard = document.getElementById("game-board");
  while (removeCard.firstChild) {
    removeCard.removeChild(removeCard.firstChild);
  };
  createBoard();
};

//Function to store steps for selecting, or flipping over, a card
var flipCard = function() {
//get the data-id attribute of the card that was just clicked and store
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  //see the cards that are flipped
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
//Update the src attribute to the image of the card clicked
  this.setAttribute('src', cards[cardId].cardImage);
// Check to see if user has played two cards
  if (cardsInPlay.length === 2) {
    checkForMatch();
  };
};
//function to create a new game board
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
// add src attribute for the cardElement
  cardElement.setAttribute('src', 'images/back.png');
//set the card's 'data-id' attribute to the index of the current element
  cardElement.setAttribute('data-id', i);
//add a click event to the cardElement
  cardElement.addEventListener('click', flipCard);
//append current cardElement to the game board
  document.getElementById('game-board').appendChild(cardElement);
  //reset
  var resetButton = document.querySelector('button');
  resetButton.addEventListener('click', resetGame);
};
};

createBoard();
