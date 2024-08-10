import React from 'react';
import Header from '../components/Header';
import SearchSort from '../components/SearchSort';
import './RecipePage.css';

const RecipePage = () => {
  return (
    <div className="recipe-page">
      
      <section className="whats-on-the">What’s on the menu?</section>
      <section className="shape-with-text" />
      <section className="content">
        <SearchSort />
   
      </section>
    </div>
  );
};

export default RecipePage;