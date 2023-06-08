import PropTypes from "prop-types";

export default function Square({ marker, id, handleClick, squareClass }) {
  return (
    <button id={id} type="button"
        className={squareClass} onClick={handleClick}>
      {marker}
    </button>
  );
}


Square.propTypes = {
  marker: PropTypes.string,
  squareClass: PropTypes.string,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

Square.defaultProps = {
  handleClick: () => {},
  marker: "",
};
