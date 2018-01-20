//Create cards for memory game
var cards = ["queen", "queen", "king", "king"];

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
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  // Check to see if user has played two cards
  if (cardsInPlay.length === 2) {
    checkForMatch();
  };
};

flipCard(0);
flipCard(2);
