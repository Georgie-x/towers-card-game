function createDeck() {
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const deck = [];
  
    for (const suit of suits) {
      for (const rank of ranks) {
        const id = `${rank}${suit.toUpperCase()}`
        const imgUrl = `/assets/cardFaces/${rank}_of_${suit}.png`;
        const points = parseInt(rank, 10) || (rank === "A" ? 1 : 10);
  
        deck.push({ id, suit, rank, points, imgUrl });
      }
    }
  
    return deck;
  }
  
  const deck = createDeck();
  export {deck}
  console.log(deck);
  