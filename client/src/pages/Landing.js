import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


import Title from '../components/LandingTitle';
import Footer from '../components/Footer';

function Landing() {
  const handleButtonClick = (message) => {
    alert(message);
  };

  return (
    <div className="App">
   
      <div className="split-background">
        <div className="left-side">
          <Title />
        </div>
        <div className="right-side">
          <div className="links">
            <Link to="/ourstory">OUR STORY</Link> 
            <Link to="/recipepage">OUR RECIPES</Link>
            {/* <a href="#story">OUR STORY</a> */}
            {/* <a href="#recipes">OUR RECIPES</a> */}
            
          </div>
          <h1>EXPLORE OUR RECIPES</h1>
          <a>... but first</a>
          <img src="fork.png" alt="Fork" className="fork-image" />
          <button onClick={() => handleButtonClick('Sign in button clicked')}>
            Sign In
          </button>
        </div>
      </div>
      
     
      <Footer />
    </div>
  );
}
export default Landing