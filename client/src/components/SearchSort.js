import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import PropTypes from "prop-types";
import "./SearchSort.css";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SearchSort = ({ className = "" }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const recipes = []

  const submitHandler = async (event) => {
    event.preventDefault();
    if (searchInput.trim()) {
      navigate(`/searched/${searchInput}`);
    }
  };

  return (
    <div className={`search-sort ${className}`}>
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <div className="with-more-than">{`With more than 100+ recipes carefully curated for your enjoyment, discover a world of flavors that will elevate your meals   `}</div>
        </div>
      </div>
      <div className="input-wrapper">
        <div className="search-input">
          <div className="search-background-parent">
            <div className="search-background" >
              <form onSubmit={submitHandler}>
                <input id="searchbar" 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  name="search" 
                  placeholder="What are we craving today?" 
                />
                <div className="icon-wrapper">
                  <button type="submit">
                    <img
                      className="zondiconssearch"
                      alt=""
                      src="/zondiconssearch.svg"
                    />
                  </button>
                </div>
              </form>
            </div>
            <br />
            <div className="frame-parent">
              <div className="group-wrapper"></div>
            </div>
          </div>
        </div>
        <div id="DisplayArea">
          {recipes.length > 0 ? (
            <div className="recipes-results">
              {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="sort-dropdown-parent">
              <div className="sort-dropdown">
                <div className="sort-options">
                  <div className="sort-label-wrapper">
                    <div className="sort-by-wrapper">
                      <div className="sort-by"></div>
                    </div>
                    <br></br>
                    <DropdownButton
                      className="dropdown-button custom-dropdown"
                      title="Sort By:"
                      as={ButtonGroup}
                      style={{ width: "337.1px", height: "53.3px" }}
                    >
                      <Dropdown.Item>Most Popular</Dropdown.Item>
                      <Dropdown.Item>A to Z</Dropdown.Item>
                      <Dropdown.Item>Recipe Time</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
                <div className="recipe-grid">
                  {/* <RecipeCard />
                  <RecipeCard propFlex="1" propMinWidth="162px" propWidth="unset" />
                  <RecipeCard propFlex="1" propMinWidth="162px" propWidth="unset" /> */}
                </div>
              </div>
              <div className="recipe-filter-parent">
                <div className="recipe-filter">
                  <div className="recipe-type"></div>
                  <DropdownButton
                    className="dropdown-button custom-dropdown"
                    title="Recipe Type"
                    as={ButtonGroup}
                    style={{ width: "337.1px", height: "53.3px" }}
                  >
                    <Dropdown.Item>Breakfast</Dropdown.Item>
                    <Dropdown.Item>Lunch</Dropdown.Item>
                    <Dropdown.Item>Dinner</Dropdown.Item>
                    <Dropdown.Item>Snack</Dropdown.Item>
                    <Dropdown.Item>Side Dish</Dropdown.Item>
                    <Dropdown.Item>Vegan</Dropdown.Item>
                    <Dropdown.Item>Dairy-free</Dropdown.Item>
                  </DropdownButton>
                </div>
                <div className="recipe-item">
                  {/* <RecipeCard propFlex="1" propMinWidth="unset" propWidth="unset" /> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SearchSort.propTypes = {
  className: PropTypes.string,
};

export default SearchSort;
