import HeaderTitle from "./HeaderTitle";
import SearchForm from "./SearchForm";
import NewItemBtn from "./NewItemBtn";
import Card from "../UI/Card";
import "./Header.css";
const Header = ({ addItem, buttonName }) => {
  const handleNewItemClick = (e) => {
    addItem(e);
  };

  return (
    <Card className="header">
      <Card className="header-left">
        <HeaderTitle />
        <SearchForm />
      </Card>
      <NewItemBtn addItem={handleNewItemClick} btnName={buttonName} />
    </Card>
  );
};
export default Header;
