import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Matrix.css"; 
import "./CorrelationMatrix.css";
let productIndex = 0; // Initialize the product index outside the component
let productIndex2 = 1;
const Matrix = ({productsItem}) => {
  // State to store matrix data
  const [matrixData, setMatrixData] = useState(null);
  let productIndex = 1; // Initialize the product index

  // Fetch matrix data from Flask API
  useEffect(() => {
    let product_ids = productsItem.map(p => p._id);
    axios.post('http://localhost:3123/api/calculate-percentages', { selected_items: product_ids })
      .then(response => {
        setMatrixData(response.data);
      })
      .catch(error => {
        console.error("Error fetching matrix data:", error);
        // Handle error state here if needed
      });
  }, [productsItem]);
  
  // Ensure matrixData is not null or undefined before rendering
  if (!matrixData) {
    return <div>Loading matrix data...</div>;
  }

  return (
    <div className="table">
      {/* Render Product labels for the first row */}
      <div className="column">
        <div className='item product-label'>Product Name</div>
        {Object.keys(matrixData).map(productX => (
        <div className="column" key={productX}>
        <div className="item product-label">Product {`${productIndex2 ++}`}</div>
     </div>
     ))}
      </div>
      {/* Render matrix cells */}
      {Object.keys(matrixData).map(productX => (
        <div className="column" key={productX}>
          <div className='item product-label' >Product {`${productIndex ++}`}</div>
          {/* Render Product label for the first cell of each row */}
  
          {/* Render matrix data */}
          {Object.keys(matrixData[productX]).map((productY, index) => (
  <div className={`item ${productX === productY ? 'diagonal' : ''}`} key={productY}>
    {/* Render percentage here */}
    {productX === productY ? null : <div className="item">{`${productX}`}</div>}
    
    {matrixData[productX][productY]}
  </div>
))}
        </div>
      ))}
    </div>
  );
  
};

export default Matrix;
