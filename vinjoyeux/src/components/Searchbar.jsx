import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
//import Loupe from "../assets/magnifying-glass.png";


const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };
  
  return (
    <div> 
      <div className="search-bar">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Rechercher un produit"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className="search-button" type="submit">
          <img src='' className="product-list-loupe" alt="submit" />
        </button>
      </form>
    </div>
  </div>
  )
}

export default Searchbar