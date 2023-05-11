import "./CartContainer.css";
import Cart from "./Cart/Cart";
const CartContainer = ({ addedItems }) => {
  if (addedItems == null) {
    <div className="card-container"></div>;
  } else {
    return (
      <div className="card-container">
        {addedItems.map((item, index) => (
          <Cart key={index} item={item} />
        ))}
      </div>
    );
  }
};

export default CartContainer;
