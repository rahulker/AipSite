import PropTypes from "prop-types";
const HeaderTitle = (props) => {
  return (
    <div className="grid grid-cols-2 items-center justify-center mt-20">
      <h1>{props.HeaderText}</h1>
      <p>{props.ParaText}</p>
    </div>
  );
};
HeaderTitle.propTypes = {
  HeaderText: PropTypes.string.isRequired,
  ParaText: PropTypes.string.isRequired,
};
export default HeaderTitle;
