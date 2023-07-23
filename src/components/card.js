import React from "react";

function Card({ onIncrement, card, onDelete }) {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem", textAlign: "center" }}>
        <button
          onClick={() => onIncrement(card.id)}
          className="btn btn-primary"
        >
          Aggiungi
          <span className="badge badge-light">{card.quantity}</span>
        </button>
        <img src={card.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.name} Roll</h5>
          <p className="card-text">${card.price}</p>
          <button
            onClick={() => onDelete(card.id)}
            className="btn btn-outline-danger"
          >
            Elimina
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
