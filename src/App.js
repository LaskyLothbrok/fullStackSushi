import React, { Component } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";

import california from "./images/california.png";
import dragon from "./images/dragon.png";
import dynamite from "./images/dynamite.png";
import philadelphia from "./images/philadelphia.png";
import rainbow from "./images/rainbow.png";
import shrimp from "./images/shrimp.png";
import logo from "./images/logo.png";

class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        name: "California",
        price: 1.99,
        image: california,
        quantity: 0,
      },
      {
        id: 1,
        name: "Dragon",
        price: 1.99,
        image: dragon,
        quantity: 0,
      },
      {
        id: 2,
        name: "Dynamite",
        price: 1.99,
        image: dynamite,
        quantity: 0,
      },
      {
        id: 3,
        name: "Philadelphia",
        price: 1.99,
        image: philadelphia,
        quantity: 0,
      },
      {
        id: 4,
        name: "Rainbow",
        price: 1.99,
        image: rainbow,
        quantity: 0,
      },
      {
        id: 5,
        name: "Shrimp",
        price: 1.99,
        image: shrimp,
        quantity: 0,
      },
    ],
  };

  handleDelete = (cardId) => {
    const cards = this.state.cards.filter((card) => card.id != cardId);
    this.setState({ cards });
  };
  handleIncrement = (card) => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantity++;
    this.setState({ cards });
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className="row">
            {this.state.cards.map((card) => (
              <Card
                card={card}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
