import React from 'react';
// import SearchRecipes from './components/SearchRecipes';
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import Searched from './pages/Searched';
import CreateAccount from './pages/CreateAccount';
import Landing from './pages/Landing';
import './App.css';
import Header from './components/Header';
import OurStory from './components/OurStory';



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  return (
    <>
     {pathname!=="/" &&<Header/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/recipepage" element={<RecipePage />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/register" element={<CreateAccount/>}/>
        <Route path="/ourstory" element={<OurStory/>}/>
      </Routes>
      </>
  );
};



export default App;
