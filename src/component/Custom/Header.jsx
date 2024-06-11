import NavigationBar from "./Navbar";
import PropTypes from "prop-types";
import HeaderTitle from "./HeaderTitl";
const Header = (props) => {
  return (
    <header>
      <div className="marging py-8">
        <NavigationBar />
        <HeaderTitle HeaderText={props.HeaderData} ParaText={props.ParaData} />
      </div>
    </header>
  );
};
Header.propTypes = {
  HeaderData: PropTypes.string,
  ParaData: PropTypes.string,
};

export default Header;
