import PropTypes from "prop-types";
import "./LOGO.css";

const LOGO = ({ className = "" }) => {
  return (
    <div className={`lo-go ${className}`}>
      <a className="lo-go1">
        <p className="lo"></p>
        <p className="go"></p>
      </a>
    </div>
  );
};

LOGO.propTypes = {
  className: PropTypes.string,
};

export default LOGO;
