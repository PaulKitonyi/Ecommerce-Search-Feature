import React from 'react';
import '../index.css';

const Card = ({ product }) => {
  return (
    <div className="card ">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
        <div className="product-img">
          <img
            src={`${product.image}`}
            alt={product.title}
            className="mb-3"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
        <p className="card-p  mt-2">
          {product &&
            product.description &&
            product.description.substring(0, 100)}{' '}
        </p>
        <p className="card-p black-10">Ksh {product.price}</p>
        <p className="black-9">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default Card;
