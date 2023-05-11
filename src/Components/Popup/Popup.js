import React, { useState } from "react";
import "./Popup.css";

const categoryAll = [
  "Health and Beauty",
  "Electronic Devices",
  "Electronic Accessories",
  "TV and Home Application",
  "Women Fashion",
  "Men Fashion",
  "Groceries and Pets",
  "Automotive and Motobike",
  "Home and Lifestyle",
  "Babies and Toys",
  "Sports and Outdoor",
  "Watches Accessories",
];
const Popup = ({ addItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const [done, isdone] = useState(true);
  const handledSubmit = (e) => {
    e.preventDefault();
    if (name === "" || price === 0 || price === "0" || category === "") {
      setErrMsg("Please fill all the fields");
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
      return;
    }
    const product = {
      id: Math.floor(Math.random() * 1000000),
      title: name,
      price,
      category,
    };
    setName("");
    setPrice("");

    addItem(product);
  };
  if (done) {
    return (
      <div>
        <div className="error">{!errMsg ? "" : errMsg}</div>
        <form onSubmit={handledSubmit} className="form-container">
          <label for="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            required
            onChange={nameHandler}
            value={name}
          />

          <label for="price-per-unit">Price per unit:</label>
          <input
            type="number"
            id="price-per-unit"
            name="price-per-unit"
            min="0"
            step="0.01"
            required
            onChange={priceHandler}
            value={price}
          />

          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          >
            <option value="">-- Select a category --</option>
            {categoryAll.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <input type="submit" className="submit" value="Add" />
        </form>
      </div>
    );
  }
};

export default Popup;
