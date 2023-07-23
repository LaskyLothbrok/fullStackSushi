import React, { useState } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import { default as initialCards } from "./CardsData";

import california from "./images/california.png";
import dragon from "./images/dragon.png";
import dynamite from "./images/dynamite.png";
import philadelphia from "./images/philadelphia.png";
import rainbow from "./images/rainbow.png";
import shrimp from "./images/shrimp.png";
import logo from "./images/logo.png";

function App() {
  const [cards, setCards] = useState(initialCards);

  const handleDelete = (cardId) => {
    const newCards = cards.filter((card) => card.id != cardId);
    setCards(newCards);
  };
  const handleIncrement = (cardId) => {
    setCards((cards) => {
      return cards.map((card) => {
        return card.id === cardId
          ? { ...card, quantity: card.quantity++ }
          : card;
      });
    });

    //const cards = [...this.state.cards];
    /*const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantity++;
    setCards(cards);*/
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Cosa desideri ordinare?</h1>
        <hr />
        <div className="row">
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              onDelete={handleDelete}
              onIncrement={handleIncrement}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
