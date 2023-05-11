import React from "react";
import "./ItemInfo.css";

const ItemInfo = ({ data, addToCart }) => {
  const onAddToCart = () => {
    addToCart(data);
  };

  return (
    <div className="item">
      <div className="item-info">
        <h2>{data.title}</h2>
        <span>-</span>
        <p>{data.price}</p>
      </div>
      <button className="btn btn-move-to-card" onClick={onAddToCart}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
};

export default ItemInfo;
