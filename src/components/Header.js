import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const clickHandler = () => {
    console.log("click");
  };
  return (
    <header>
      <h1>{title}</h1>
      <Button color="green" text="Add" clickHandler={clickHandler} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
