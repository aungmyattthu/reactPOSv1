import MainLeftSection from "./MainLeft/MainLeftSection";
import MainRightSection from "./MainRight/MainRightSection";
import "./Main.css";
import { useState } from "react";
const Main = ({ products }) => {
  const [addedItems, setAddedItems] = useState([]);
  const addToCart = (item) => {
    setAddedItems([...addedItems, item]);
  };
  return (
    <main className="main">
      <MainLeftSection products={products} addToCart={addToCart} />
      <MainRightSection addToRightCart={addedItems} />
    </main>
  );
};
export default Main;
