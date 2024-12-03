import React, { useState } from 'react';

import "./Affinity02.css";
import DateRangePicker from "tw-daterange";
import {Footer, Rectangle, Header2, Agenda, Products,Rayon, Radar, Matrix, CorrelationMatrix, Search, ExportCSV,
  AddButton } from '../../component'

const Affinity02 = () => {
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsItem, setProductsItem] = useState([]);

  return (
    <div>
      <Header2/>
      <div className="product-lines-container">
        <div className="product-lines">Product Lines</div>
        <Rayon />
        <div className="timeline">Timeline</div>
        <Agenda onStartDateChange={setSelectedStart} onEndDateChange={setSelectedEnd} />
      </div>
      <div className="products-container">
        <Search className='firstProduct' searchTitle='Products :' setSelectedProduct={setSelectedProduct} />
        <Products setProductsItem={setProductsItem} productsItem={productsItem} selectedProduct={selectedProduct} />
        <Radar/>
        <CorrelationMatrix/>
        {/* Pass selectedProduct to the Matrix component */}
        <Matrix  productsItem={productsItem} selectedProduct={selectedProduct} />
        <AddButton/>
        <ExportCSV productsItem={productsItem} startDate={selectedStart} endDate={selectedEnd}/>
        
    </div>
      <div className="affinity02"> 
      </div>
    </div>
  );
}

export default Affinity02;
