const NewItemBtn = ({ addItem, btnName }) => {
  //console.log(addItem);
  return (
    <button className="btn btn-newitem" onClick={addItem}>
      {btnName}
    </button>
  );
};
export default NewItemBtn;
