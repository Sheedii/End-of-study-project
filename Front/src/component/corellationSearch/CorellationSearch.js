import React, { useState } from 'react';
import './corellationSearch.css';
import Change from "../../assets/changePageIcon.svg";
import Unselect from "../../assets/unselect.svg";
import { useNavigate } from 'react-router-dom';
import Agenda from '../produit1/agenda/Agenda.js';
import Search from '../searchBarCorrelation/SearchBarCorrelation.js';

const CorellationSearch = () => {
    const navigate = useNavigate();
    const [selectedStart, setSelectedStart] = useState(null);
    const [selectedEnd, setSelectedEnd] = useState(null);
    const [dateRangeFilled, setDateRangeFilled] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(Array(10).fill(null));
    const [ItemsNumber, setItemsNumber] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSelectItem = SelectItem => {
        setSelectedProduct(SelectItem);
    };

    const handleButtonSelectItem = () => {
        if (selectedProduct && !selectedProducts.includes(selectedProduct)) {
            const index = selectedProducts.findIndex(product => product === null);
            if (index !== -1) {
                const newSelectedProducts = [...selectedProducts];
                newSelectedProducts[index] = selectedProduct;
                setSelectedProducts(newSelectedProducts);
                setItemsNumber(ItemsNumber + 1);
                //setSelectedProduct(null);
            }
        }
    };

    const handleUnselectItem = index => {
        const newSelectedProducts = [...selectedProducts];
        if (newSelectedProducts[index] !== null) {
            newSelectedProducts[index] = null;
            setSelectedProducts(newSelectedProducts);
            setItemsNumber(ItemsNumber - 1);
        }
    };

    const handleNextClick = () => {
        if (!selectedStart || !selectedEnd) {
            setDateRangeFilled(!!selectedStart && !!selectedEnd);
            return;
        }
        const nonNullProducts = selectedProducts.filter(product => product !== null);
        if (nonNullProducts.length >= 2) {
            navigate(`/CorrelationMatrix?selectedProducts=${encodeURIComponent(JSON.stringify(nonNullProducts))}&selectedStart=${selectedStart}&selectedEnd=${selectedEnd}`);
        }
    };

    return (
        <div className='ProductComparator2'>
            <div className='ProductComparatorCard'>
                <div className='ComparatorHeader0'>
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
                <div className='ComparatorOneProduct'>Please select Two different products at least (10 Max)</div>
                <div className='ComparatorSearchContainer'>
                    <div className="ComparatorSearch">
                        <Search onSelectItem={handleSelectItem}/>
                    </div>
                    <button className='ComparatorSelectButt' onClick={handleButtonSelectItem}>Select</button>
                </div>
                <div className='SelectedItems'>
                    <div className='itemsTitle'>Choosed products ({ItemsNumber})</div>
                    <div className='comparatorItems'>
                        {selectedProducts.map((product, index) => (
                            <div key={index} className={product ? 'ComparatorItemSelected' : 'ComparatorItemNotSelected'}>
                                {product && <img src={Unselect} alt="Unselect" className='unselectIcon' onClick={() => handleUnselectItem(index)} />}
                                {product}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='comparatorLine2'></div>
                <div className='NextBut' style={{ color: selectedProducts.filter(product => product !== null).length >= 2 ? '#08074e' : '#8e98a8' }} onClick={handleNextClick}>NEXT</div>
            </div>
        </div>
    );
}

export default CorellationSearch;
