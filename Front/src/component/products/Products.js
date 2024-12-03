import React, { useState, useEffect } from 'react';
import ProductsItem from './ProductsItem';
import './Products.css';
import axios from 'axios';

const Products = ({ selectedProduct , onAddProduct, productsItem, setProductsItem }) => {
  let prdocutsItem = [];
  // State for storing the ID of the selected product
  const [selectedProductId, setSelectedProductId] = useState(null);
  // State for tracking whether the data is loading
  const [isLoading, setIsLoading] = useState(false);
  // State for storing any error messages
  const [error, setError] = useState('');
  // State to refresh getting selected products
  const [refreshSelect, setRefreshSelect] = useState(false);

  // useEffect to fetch products on component mount
  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:8087/dashboard/products/selected')
      .then(response => {
        setProductsItem(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setError('Failed to fetch products.');
        setIsLoading(false);
      });
  }, [selectedProduct, refreshSelect]);

  // Function to handle product deletion
  const handleDelete = (productId) => {
    axios.patch(`http://localhost:8087/dashboard/select/${productId}`, {select: false})
      .then(() => {
        console.log(`Product with ID: ${productId} deleted successfully.`);
        setRefreshSelect(!refreshSelect);
      })
      .catch(error => {
        console.error("Error deleting product:", error);
      });
  };
  
/*  // Function to handle selecting a product
const handleSelectProduct = (id) => {
  const isSelected = true; // You can adjust this based on your logic

  axios.patch(`http://localhost:8087/dashboard/select/${id}`, isSelected)
    .then(response => {
      console.log(`Product with ID: ${id} selected.`);
      // Optionally, update the UI if needed
    })
    .catch(error => {
      console.error("Error selecting product:", error);
    });
};
*/
  

  // Function to handle adding a selected product
  const handleAddProductClick = () => {
    if (!selectedProduct) {
      console.log("No product selected to add.");
      return;
    }
    console.log(`Attempting to add product with ID: ${selectedProduct._id}`); // For debugging
    axios.patch(`http://localhost:8087/dashboard/select/${selectedProduct._id}`, { selected: true })
      .then(response => {
        console.log("Product added successfully", response.data);
        setRefreshSelect(!refreshSelect);
        onAddProduct(selectedProduct);

        // Optionally, refresh the products list here if needed
      })
      .catch(error => {
        console.error("Error adding product:", error);
      });
  };


  // Render loading state or error message if applicable
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Main component render
 return (
  
  <div className="products-wrapper">
    <div className="products-container">
      {productsItem.map((product) => (
        <ProductsItem
          key={product.id}
          productNumber={product.number}
          productTitle={product.lib}
          onDelete={() => handleDelete(product._id)}
          onSelect={() => setSelectedProductId(product._id)}
          onAddProduct={() => handleAddProductClick(product._id)}

        />
      ))}
    </div>
    <button className="button-affinity2" onClick={handleAddProductClick}>
      <div className="rectangle-aff2-2"></div>
      <div className="add-product">Add</div>
      
    </button>

  </div>
);

};

export default Products;
