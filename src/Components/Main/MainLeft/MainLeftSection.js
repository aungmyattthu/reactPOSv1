import "./MainLeftSection.css";

import ItemInfo from "./ItemInfo/ItemInfo";
const MainLeftSection = ({ products, addToCart }) => {
  return (
    <div className="left-section">
      {products.map((product, index) => (
        <ItemInfo key={index} data={product} addToCart={addToCart} />
      ))}
    </div>
  );
};
export default MainLeftSection;
