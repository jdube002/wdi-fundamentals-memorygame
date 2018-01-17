//Create cards for memory game
var cards = ["queen", "queen", "king", "king"];

//Create an empty array for cards that will be in play
var cardsInPlay = [];

//Create card that user first flips
var cardOne = cards[0];
//Add first card to the cardsInPlay array
cardsInPlay.push(cardOne);
// Display the card that the user flipped
console.log("User flipped " + cardOne);

// Create card that user flips second
var cardTwo = cards[2];
//Add second card to cardsInPlay array
cardsInPlay.push(cardTwo);
// Display card that user flipped
console.log("User flipped " + cardTwo);

// Check to see if user has played two cards
if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
  alert("Sorry, try again.");
}
}
