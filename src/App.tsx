import { useState } from "react";
import { Piles } from "./typeDefs";
import { createDeck, shuffleDeck } from "./utils";  

function App() {

  const shuffledDeck = shuffleDeck(createDeck());

  const [piles, setPiles] = useState<Piles>([
    [
      ...shuffledDeck.map((card) => ({
        id: card.id,
        points: card.points,
        rank: card.rank,
        suit: card.suit,
        imgUrl: card.imgUrl,
      })),
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  return (
    <div className="layout-container">
      <h1>Seven Towers Card Game</h1>
      <ul>
        {piles[0].map((card) => (
          <li key={card.id}>
            <img className="cardFace" src={card.imgUrl} alt={`${card.rank} of ${card.suit}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
