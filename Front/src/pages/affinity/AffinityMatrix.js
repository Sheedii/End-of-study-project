import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Affinity02.css";
import DateRangePicker from "tw-daterange";
import './AffinityMatrix.css';
import { ReactComponent as Grille} from "../../assets/Grille background.svg";
import { ReactComponent as Select} from '../../assets/back.svg';
import { ReactComponent as CallendarIcon} from '../../assets/Vector.svg';


import {Footer, Products, Header2, Rayon, Agenda,Radar, MatrixFinal, CorrelationMatrix,Search,  ExportCSV, AddButton, AddButton2 } from '../../component'


const AffinityMatrix = () => {
  const navigate = useNavigate();
    const [isExtended, setIsExtended] = useState(false); // State to track extension

  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsItem, setProductsItem] = useState([]);
  const handleConfirmClick = () => {
{
      navigate('/affinity03');
    }
  };
  return (
    <div className="product-container-matrix">
     
    <div>
    <div className="grille-background-matrix">
      <Grille/>
      </div>
       <Header2/>      
        <div className="affinity-test-matrix"> Affinity Test</div>
     <div class="rectangle-7-matrix">
    <div className="rectangle-550-matrix">
    <Radar/>
    </div>
    <div className="rectangle-660-matrix"></div>


      <div className="product-lines-container-matrix">
        <div className="change-product-line">Change Product Line
        </div>
        <div className="select-matrix"
         onClick={() => handleConfirmClick()}

        ><Select/></div>
        
      <div className="search-product">Search Products</div>
        <div className="timeline-matrix">Timeline</div>
        <Agenda onStartDateChange={setSelectedStart} onEndDateChange={setSelectedEnd} />
      </div>
      <div className="products-container-matrix">
        <Search className='firstProduct'  setSelectedProduct={setSelectedProduct} />
        <Products setProductsItem={setProductsItem} productsItem={productsItem} selectedProduct={selectedProduct} />
        {/* Pass selectedProduct to the Matrix component */}

        <div class="corr-matrix" > <CallendarIcon/> Correlation Matrix</div>
        <div class="rectangle-11" >

        </div>
      <div className='matrix'> <MatrixFinal  productsItem={productsItem} selectedProduct={selectedProduct} />
      </div>
    {/* <div className='add-button-2-f'> <AddButton2/></div>  */}
       <div className="export-csv-f"> <ExportCSV productsItem={productsItem} startDate={selectedStart} endDate={selectedEnd}/>
       </div>
       
        </div>
      </div>
      </div>
     <div classNamme="footer"> <Footer/></div>
      </div>
  );
}

export default AffinityMatrix;
