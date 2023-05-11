import React, { useState } from "react";
import "./Cart.css";
const Cart = ({ item }) => {
  const [count, setCount] = useState(1);
  const [subPrice, setSubPrice] = useState(item.price);
  const countHandler = (e) => {
    setCount(e.target.value);
    setSubPrice(e.target.value * item.price);
  };
  const countPlus = () => {
    setCount(parseInt(count) + 1);
    setSubPrice((parseInt(count) + 1) * item.price);
  };
  const countMinus = () => {
    setCount(parseInt(count) - 1);
    setSubPrice((parseInt(count) - 1) * item.price);
  };
  const remove = () => {
    setCount(-1);
  };
  if (count > 0) {
    return (
      <div className="add-to-card-item">
        <div className="item-info">
          <h2>{item.title}</h2>
          <span>-</span>
          <p>{subPrice}</p>
        </div>
        <div className="action-groups">
          <input type="text" value={count} onChange={countHandler} />
          <button className="btn-move-to-cart" onClick={countPlus}>
            +
          </button>
          <button className="btn-move-to-cart" onClick={countMinus}>
            -
          </button>
          <button className="btn-move-to-cart" onClick={remove}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    );
  }
};

export default Cart;
