import React from 'react';
import './AddButton.css'; // Assuming you have a CSS file for styling

const AddButton = () => {
  const handleClick = () => {
    // Add functionality for handling the click event
    console.log('AddButton clicked');
    // You can add your export logic here
  };

  return (
    <div className="default-add-button" onClick={handleClick}>
      <div className="rectangle-add-button"></div>
      <div className="export-add-button">Add Products</div>
    </div>
  );
};

export default AddButton;
