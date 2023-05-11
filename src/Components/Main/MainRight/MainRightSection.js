import CartContainer from "./CartContainer";
import TotalContainer from "./TotalContainer";
import "./MainRightSection.css";
const MainRightSection = ({ addToRightCart }) => {
  return (
    <div className="right-section">
      <CartContainer addedItems={addToRightCart} />
      <TotalContainer />
    </div>
  );
};
export default MainRightSection;
