import LOGO from "./LOGO";
import PropTypes from "prop-types";
import "./Header.css";
import testimg from "../assest/twitter Vector.png";
import {NavLink,Link} from 'react-router-dom';

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="shape-with-text1" />
      <LOGO />
      
      <a href="#login" className="log-in">LOG IN</a>
      <NavLink to="/"className="culinarycreathers"> CulinaryCreatHers</NavLink>
        
    
      <Link to="/ourstory"className="our-story">OUR STORY</Link>
    
      <a href="#home">
      <img className="navigation-icon" src={testimg} alt="Home"></img>
      </a>
    
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
