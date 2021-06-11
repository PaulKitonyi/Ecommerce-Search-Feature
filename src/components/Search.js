import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Hint } from 'react-autocomplete-hint';

const Search = ({ products }) => {
  const [hintData, setHintData] = useState([]);

  const [data, setData] = useState({
    search: '',
    results: [],
    searched: false,
  });

  const { search, results, searched } = data;

  const searchData = () => {
    if (search) {
      setData({
        ...data,
        results: products.filter(
          (product) => product.category.toLowerCase() === search.toLowerCase()
        ),
        searched: true,
      });
    }
  };

  useEffect(() => {
    var hintArray = [];
    products.map((product) => hintArray.push(product.category));
    setHintData(hintArray);
  }, [products]);

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return results.length === 1
        ? `Found ${results.length} product`
        : `Found ${results.length} products`;
    }
    if (searched && results.length < 1) {
      return `No products found.`;
    }
  };

  const searchedProducts = (results = []) => {
    return (
      <div>
        <h2 className="mt-4 mb-4">{searchMessage(searched, results)}</h2>
        <div className="row">
          {results.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </div>
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span className="input-group-text">
        <div className="input-group input-group-lg">
          <Hint options={hintData} allowTabFill>
            <input
              type="search"
              className="form-control"
              onChange={handleChange('search')}
              placeholder="Search by category"
            />
          </Hint>
        </div>
        <div className="btn input-group-append" style={{ border: 'none' }}>
          <button className="input-group-text">Search</button>
        </div>
      </span>
    </form>
  );

  return (
    <div>
      <div className="container mb-3">{searchForm()}</div>
      <div className="container-fluid mb-3">{searchedProducts(results)}</div>
    </div>
  );
};

export default Search;
