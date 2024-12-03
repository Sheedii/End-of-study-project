import React, { useState } from 'react';
import './productDateCom.css'
import Change from "../../assets/changePageIcon.svg";
import Unselect from "../../assets/unselect.svg";
import { useNavigate } from 'react-router-dom';
import Agenda from '../produit1/agenda/Agenda.js'
import Search2 from '../search2/Search2.js'
import Search from '../searchBar/SearchBar.js'

const ProductDateCom = () => {
    const navigate = useNavigate();
    const [selectedStart, setSelectedStart] = useState(null);
    const [selectedStart2, setSelectedStart2] = useState(null);
    const [selectedEnd, setSelectedEnd] = useState(null);
    const [selectedEnd2, setSelectedEnd2] = useState(null);
    const [dateRangeFilled, setDateRangeFilled] = useState(true);
    const [dateRangeFilled2, setDateRangeFilled2] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [ItemsNumber, setItemsNumber] = useState(0);



    const handleSelectItem = SelectItem => {
        setSelectedProduct(SelectItem);
    };

    const handlUnselectItem1 = () => {
        setSelectedProduct1(null);
        setItemsNumber(ItemsNumber - 1);
    };

    const handleButtonSelectItem = () => {
        if (selectedProduct1 === null) {
            setSelectedProduct1(selectedProduct);
            setItemsNumber(ItemsNumber + 1);
        }
    };

    const handleChangeButtonClick = () => {
        navigate(`/AffinityComparators`);
    };

    const handleNextClick = () => {
        if (!selectedStart || !selectedEnd) {
            setDateRangeFilled(!!selectedStart && !!selectedEnd);
            return;
        }
        else if (!selectedStart2 || !selectedEnd2) {
            setDateRangeFilled2(!!selectedStart2 && !!selectedEnd2);
            return;
        }
        else if (selectedProduct1 != null) {
            navigate(`/DateComparatorTable?selectedProduct=${selectedProduct1}&selectedStart=${selectedStart}&selectedEnd=${selectedEnd}&selectedStart2=${selectedStart2}&selectedEnd2=${selectedEnd2}`);
        }
        navigate(`/DateComparatorTable?selectedProduct=${selectedProduct1}&selectedStart=${selectedStart}&selectedEnd=${selectedEnd}&selectedStart2=${selectedStart2}&selectedEnd2=${selectedEnd2}`);
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
                        <div className='Rangetime FirstR'>Range 1</div>
                        <div className='ComparatorAgendaError'>
                            <Agenda onStartDateChange={setSelectedStart} onEndDateChange={setSelectedEnd} />
                            {!dateRangeFilled && <span className="error-message">Date range is required</span>}
                        </div>
                        <div className='Rangetime'>Range 2</div>
                        <div className='ComparatorAgendaError'>
                            <Agenda onStartDateChange={setSelectedStart2} onEndDateChange={setSelectedEnd2} />
                            {!dateRangeFilled2 && <span className="error-message">Date range is required</span>}
                        </div>
                    </div>
                </div>
                <div className='comparatorLine'></div>
                <div className='ComparatorSearchProducts'>Search Products</div>
                <div className='ComparatorOneProduct'>Please select One product</div>
                <div className='ComparatorSearchContainer'>
                    <div className="ComparatorSearch">
                        <Search className="searchlist" onSelectItem={handleSelectItem} />
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
                    </div>
                </div>
                <div className='comparatorLine2'></div>
                <div className='NextBut' style={{ color: selectedProduct1 ? '#08074e' : '#8e98a8' }} onClick={handleNextClick}>NEXT</div>
            </div>
        </div>
    )
}

export default ProductDateCom
