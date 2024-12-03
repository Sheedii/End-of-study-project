import React from 'react';
import './ProductsItem.css';

const ProductsItem = ({ productNumber, productTitle, onDelete, onSelect }) => {
  // Stop the propagation of the click event to prevent onSelect when clicking the delete icon
  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevents onSelect when delete is clicked
    onDelete();
  };

  return (
    <div className="product-item" onClick={onSelect}>
      <div className="rectangle-4333">
      <div class="rectangle-549"></div>

      <svg
        className="_8666595-x-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleDeleteClick}
      >
        <path
          d="M18 6L6 18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      </div>
      <div className="product-number">{productTitle || `Product ${productNumber}`}</div>
    </div>
  );
};

export default ProductsItem;
