import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Popup from "./Components/Popup/Popup";
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
const items = [
  {
    id: "item-1",
    category: "Health and Beauty",
    title: "Shokubutsu shower cream 500 ml",
    price: 7000,
  },
  {
    id: "item-2",
    category: "Health and Beauty",
    title: "Aqua UV Essence Sun Cream",
    price: 19500,
  },
  {
    id: "item-3",
    category: "Electronic Devices",
    title: "iPhone 7 32gb All Fine ( second )",
    price: 235000,
  },
  {
    id: "item-4",
    category: "Electronic Devices",
    title: "Vivo Y93, 6.2' One Year Warranty",
    price: 200000,
  },
  {
    id: "item-5",
    category: "Electronic Devices",
    title: "Dell Inspiron 3525 (AMD Athlon)",
    price: 949000,
  },
  {
    id: "item-6",
    category: "Electronic Devices",
    title: "Dell Latitude 5401",
    price: 983250,
  },
  {
    id: "item-7",
    category: "Groceries and Pets",
    title: "Pure Honey - 1000g Bee Honey",
    price: 9900,
  },
  {
    id: "item-8",
    category: "Groceries and Pets",
    title: "Pran - Naples Spread Chocolate (300g)",
    price: 9500,
  },
  {
    id: "item-9",
    category: "Groceries and Pets",
    title: "Peanut Butter (Smooth | Classic) 280G",
    price: 8500,
  },
];

const App = () => {
  const [products, setProducts] = useState(items);
  const [popupDiv, setPopupDiv] = useState(false);

  const handleAddNewItem = (e) => {
    e.preventDefault();
    setPopupDiv(!popupDiv);
  };
  const addItemToList = (item) => {
    setProducts([...products, item]);
  };
  if (popupDiv) {
    return (
      <>
        <Header addItem={handleAddNewItem} buttonName={"Close"} />
        <Popup addItem={addItemToList} />
        <Main products={products} />
      </>
    );
  } else {
    return (
      <>
        <Header addItem={handleAddNewItem} buttonName={"New Items"} />
        <Main products={products} />
      </>
    );
  }
};

export default App;
