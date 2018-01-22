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

//Function to store the steps to check for a match
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};

//Function to store steps for selecting, or flipping over, a card
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  //see the cards that are flipped
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  cardsInPlay.push(cards[cardId].rank);
  // Check to see if user has played two cards
  if (cardsInPlay.length === 2) {
    checkForMatch();
  };
};

flipCard(0);
flipCard(2);
