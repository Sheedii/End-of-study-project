import React, { useState } from 'react';
import './productComparator2.css';
import Change from "../../assets/changePageIcon.svg";
import Unselect from "../../assets/unselect.svg";
import { useNavigate } from 'react-router-dom';
import Agenda from '../produit1/agenda/Agenda.js'
import Search2 from '../search2/Search2.js'
import Search from '../searchBar/SearchBar.js'


const ProductComparator2 = () => {
    const navigate = useNavigate();
    const [selectedStart, setSelectedStart] = useState(null);
    const [selectedEnd, setSelectedEnd] = useState(null);
    const [dateRangeFilled, setDateRangeFilled] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const [ItemsNumber, setItemsNumber] = useState(0);



    const handleSelectItem = SelectItem => {
      setSelectedProduct(SelectItem);
    };

    const handlUnselectItem1 = () => {
        setSelectedProduct1(null);
        setItemsNumber(ItemsNumber - 1);

    };
    const handlUnselectItem2 = () => {
        setSelectedProduct2(null);
        setItemsNumber(ItemsNumber - 1);
    };

    const handleButtonSelectItem = () => {
        if (selectedProduct1 === null) {
            setSelectedProduct1(selectedProduct);
            setItemsNumber(ItemsNumber + 1);
        } else if (selectedProduct2 === null) {
            setSelectedProduct2(selectedProduct);
            setItemsNumber(ItemsNumber + 1);
        }
        setSelectedProduct(null);
    };



    const handleChangeButtonClick = () => {
        navigate(`/AffinityComparators`);
    };


    const handleNextClick = () => {
        if (!selectedStart || !selectedEnd) {
            setDateRangeFilled(!!selectedStart && !!selectedEnd);
            return;
        }
        else if (selectedProduct1 != null && selectedProduct2 != null) {
            navigate(`/ComparatorTable?selectedProduct1=${selectedProduct1}&selectedProduct2=${selectedProduct2}&selectedStart=${selectedStart}&selectedEnd=${selectedEnd}`);
        }
        navigate(`/ComparatorTable?selectedProduct1=${selectedProduct1}&selectedProduct2=${selectedProduct2}&selectedStart=${selectedStart}&selectedEnd=${selectedEnd}`);     
    };

    return (
        <div className='ProductComparator2'>
            <div className='ProductComparatorCard'>
                <div className='ComparatorHeader'>
                    <button type="button" className="changeButtonComparator" onClick={handleChangeButtonClick}>
                        <img src={Change} alt="change Time Line" />
                        Change Page
                    </button>
                    <div className="ComparatorRangeDate">
                        <div className='ComparatorTime'>Time Line</div>
                        <div className='ComparatorAgendaError'>
                            <Agenda onStartDateChange={setSelectedStart} onEndDateChange={setSelectedEnd} />
                            {!dateRangeFilled && <span className="error-message">Date range is required</span>}
                        </div>
                    </div>
                </div>
                <div className='comparatorLine'></div>
                <div className='ComparatorSearchProducts'>Search Products</div>
                <div className='ComparatorOneProduct'>Please select Two different products</div>
                <div className='ComparatorSearchContainer'>
                    <div className="ComparatorSearch">
                    <Search onSelectItem={handleSelectItem} />
                    </div>
                    <button className='ComparatorSelectButt' onClick={handleButtonSelectItem}>Select</button>
                </div>
                <div className='SelectedItems'>
                    <div className='itemsTitle'>Choosed products ({ItemsNumber})</div>
                    <div className='comparatorItems' >
                    <div className={selectedProduct1 ? 'ComparatorItem1' : 'ComparatorItemNotSelected'}>
                        <img src={Unselect} alt="Unselect" className='unselectIcon' onClick={handlUnselectItem1} />
                        {selectedProduct1}
                    </div>
                    <div className={selectedProduct2 ? 'ComparatorItem2' : 'ComparatorItemNotSelected'}>
                        <img src={Unselect} alt="Unselect" className='unselectIcon' onClick={handlUnselectItem2} />
                        {selectedProduct2}
                    </div>
                </div>
                </div>
                <div className='comparatorLine2'></div>
                <div className='NextBut' style={{ color: selectedProduct1 && selectedProduct2 ? '#08074e' : '#8e98a8' }} onClick={handleNextClick}>NEXT</div>
            </div>
        </div>
    )
}

export default ProductComparator2
