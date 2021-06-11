import React, { useState, useEffect, Fragment } from 'react';
import Card from './Card';
import Search from './Search';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <Search products={products} />
      <h2 className="mb-4">Top Selling Items</h2>
      <div className="row">
        {products.map((product, i) => (
          <div key={i} className="col-4 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
