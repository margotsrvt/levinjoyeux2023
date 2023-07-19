import React from 'react'
import productsFromJson from './Products.json';
import { useState } from 'react';
import "./Carroussel.css"

const Carroussel = () => {

  const [products, setProducts] = useState(productsFromJson)
  const [query, setQuery] = useState("");

  return (
    <div>

      <input className="searchBar" maxlength="200" style={{backgroundImage: `url(&quot;https://web-common.vivino.com/assets/search.svg&quot;);" placeholder="Search" onChange={event => setQuery(event.target.value)`}} />

      <div className="productList">
        {
          products.filter(product => {
            if (query === '') {
              return product;
            } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
              return product;
            }
          }).map((product, index) => (
            <div className="productCard" key={index}>
              <p>{product.name}</p>
              <img src={product.image} width={200} alt="pic"/>
              <p>{product.price}</p>
              <button className="addToCart">Add to cart</button>
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Carroussel