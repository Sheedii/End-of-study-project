import React from 'react';
import './AddButton2.css'; // Assuming you have a CSS file for styling
import { ReactComponent as Plus} from '../../assets/Plus.svg';

const AddButton2 = () => {
  const handleClick = () => {
    // Add functionality for handling the click event
    console.log('AddButton clicked');
    // You can add your export logic here
  };

  return (
<div class="outlined-text-field-inactive-b2" OnClick={handleClick}>
  <div class="rectangle-b2"></div>
  <div class="add-product-b2"><Plus/>Add product</div>
</div>
  );
};

export default AddButton2;
