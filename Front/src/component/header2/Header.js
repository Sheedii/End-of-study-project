import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../../assets/logowise.svg';
import { ReactComponent as Select } from '../../assets/select.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { ReactComponent as Vector } from '../../assets/Vectorup.svg';

const Header = () => {
  const [isRectangleVisible, setIsRectangleVisible] = useState(false);

  const toggleRectangleVisibility = () => {
    setIsRectangleVisible(!isRectangleVisible);
  };

  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu">
        <div className="menu-item">Customer Behavior</div>
        <div className="menu-item selected">Affinity Testing <Vector onClick={toggleRectangleVisibility} /></div>
        {isRectangleVisible && (
          <div className="rectangle-choice">
            <div class="group-correlation">
              <div class="correlation-matrix-choice">Correlation Matrix</div>
              <div class="group-comparator">
                <div class="products-comparator">Products Comparator</div>
              </div>
              <div class="group-top-10">
                <div class="top-10-products">Top 10 Products</div>
              </div>
            </div>
          </div>
        )}
        <div className="menu-item">Sales Forecasting</div>
      </div>
      <div className="outline-inactive">
        <div className="rectangle-logout">
          <div class="logout">LOGOUT <Logout /></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
