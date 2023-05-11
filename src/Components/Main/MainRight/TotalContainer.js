import "./TotalContainer.css";
const TotalContainer = () => {
  return (
    <div className="total-container">
      <div className="total">
        <p>Total Amount</p>
        <p>- 15000 MMK</p>
      </div>
      <button className="btn-large">
        <i className="fa-solid fa-hand-holding-dollar"></i>
      </button>
    </div>
  );
};
export default TotalContainer;
