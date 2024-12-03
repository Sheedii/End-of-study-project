import React, { useState,} from 'react';
import './features.css'
import Agenda from '../agenda/Agenda.js'
import Search2 from '../../search2/Search2.js'


const Features = () => {
  const [selectedProduct1, setSelectedProduct1] = useState(null);
  const [selectedProduct2, setSelectedProduct2] = useState(null);
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd] = useState(null);
  const [quantityProduct1, setQuantityProduct1] = useState(null);
  const [quantityProduct2, setQuantityProduct2] = useState(null);
  const [cAProduct1, setCAProduct1] = useState(null);
  const [cAProduct2, setCAProduct2] = useState(null);
  const [tableDataP1, setTableDataP1] = useState([]);
  const [tableDataP2, setTableDataP2] = useState([]);
  const [search1Filled, setSearch1Filled] = useState(true);
  const [search2Filled, setSearch2Filled] = useState(true);
  const [dateRangeFilled, setDateRangeFilled] = useState(true);

  const handleSelectItem = selectedItem => {
    setSelectedProduct1(selectedItem.value);
  };
  const handleSelectItem2 = selectedItem => {
    setSelectedProduct2(selectedItem.value);
  };

  const handleFetchData = async () => {
    try {
      if (!selectedProduct1 || !selectedProduct2 || !selectedStart || !selectedEnd) {
        setSearch1Filled(!!selectedProduct1);
        setSearch2Filled(!!selectedProduct2);
        setDateRangeFilled(!!selectedStart && !!selectedEnd);
        return;
      }
      setSearch1Filled(selectedProduct1);
      setSearch2Filled(selectedProduct2);
      setDateRangeFilled(selectedStart && !!selectedEnd);
      // Fetch data for Product 1
      const response1 = await fetch(`http://localhost:8087/dashboard/quantity?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
      if (!response1.ok) {
        throw new Error('Network response was not ok');
      }
      const data1 = await response1.json();
      setQuantityProduct1(data1);

      // Fetch data for Product 2
      const response2 = await fetch(`http://localhost:8087/dashboard/quantity?lib=${selectedProduct2}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
      if (!response2.ok) {
        throw new Error('Network response was not ok');
      }
      const data2 = await response2.json();
      setQuantityProduct2(data2);

      
      // Fetch data for Chiffre d'affaire Product 1
      const response3 = await fetch(`http://localhost:8087/dashboard/allRevenue?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
      if (!response3.ok) {
        throw new Error('Network response was not ok');
      }
      const data3 = await response3.json();
      setCAProduct1(data3);


      // Fetch data for Chiffre d'affaire Product 2
      const response4 = await fetch(`http://localhost:8087/dashboard/allRevenue?lib=${selectedProduct2}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
      if (!response4.ok) {
        throw new Error('Network response was not ok');
      }
      const data4 = await response4.json();
      setCAProduct2(data4);

      const rows = await generateTableRows();
      setTableRows(rows);

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };


  const [tableRows, setTableRows] = useState([]);

  const generateTableRows = async () => {
    if (!selectedProduct1 || !selectedProduct2 || !selectedStart || !selectedEnd) {
      return;
    }
    // Fetch data for Table for the product 1
    const response5 = await fetch(
      `http://localhost:8087/dashboard/products?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`
    );
    if (!response5.ok) {
      throw new Error('Network response was not ok');
    }
    const dataTableP1 = await response5.json();
    setTableDataP1(dataTableP1);

    // Fetch data for Table for the product 2
    const response6 = await fetch(
      `http://localhost:8087/dashboard/products?lib=${selectedProduct2}&firstDate=${selectedStart}&lastDate=${selectedEnd}`
    );
    if (!response6.ok) {
      throw new Error('Network response was not ok');
    }
    const dataTableP2 = await response6.json();
    setTableDataP2(dataTableP2);


    const rows = [];
    const currentDate = new Date(selectedStart);
    var i = 0;
    var j = 0;
    var k = 0;
    while (currentDate < new Date(selectedEnd)) {
      const formattedDate = currentDate.toISOString().split('T')[0];
      var tp1 = dataTableP1[i];
      var tp2 = dataTableP2[j];
      var r;
      r = dataTableP1[i] ? dataTableP1[i].fk_JOUR.split('T')[0] : null;
      if (r !== formattedDate) {
        i = i - 1;
        tp1 = null;
      }
      var m;
      m = dataTableP2[j] ? dataTableP2[j].fk_JOUR.split('T')[0] : null;
      if (m !== formattedDate) {
        j = j - 1;
        tp2 = null;
      }
      rows.push(
        <tr key={formattedDate + k}>
          <th>{formattedDate}</th>
          {tp1 && tp2 ? (
            <>
              <th className={
                dataTableP1[i].qt === dataTableP2[j].qt
                  ? 'equal' // Class for equal values
                  : dataTableP1[i].qt > dataTableP2[j].qt
                    ? 'green'
                    : 'red'
              }>
                {dataTableP1[i].qt}
              </th>
              <th className={
                dataTableP1[i].qt === dataTableP2[j].qt
                  ? 'equal'
                  : dataTableP1[i].qt < dataTableP2[j].qt
                    ? 'green'
                    : 'red'
              }>
                {dataTableP2[j].qt}
              </th>
              <th className={dataTableP1[i].revenue === dataTableP2[j].revenue ? 'equal'
                : dataTableP1[i].revenue > dataTableP2[j].revenue ? 'green'
                  : 'red'}>
                {dataTableP1[i].revenue}
              </th>
              <th className={
                dataTableP1[i].revenue === dataTableP2[j].revenue ? 'equal'
                  : dataTableP1[i].revenue < dataTableP2[j].revenue ? 'green'
                    : 'red'}>
                {dataTableP2[j].revenue}
              </th>
              <th>0</th>
              <th>0</th>
            </>
          ) : tp1 ? (
            <>
              <th className={dataTableP1[i].qt > 0 ? 'green' : 'red'}>
                {dataTableP1[i].qt}
              </th>
              <th className='red'>0</th>
              <th className={dataTableP1[i].revenue > 0 ? 'green' : 'red'}>
                {dataTableP1[i].revenue}
              </th>
              <th className='red'>0</th>
              <th>0</th>
              <th>0</th>
            </>
          ) : tp2 ? (
            <>
              <th className='red'>0</th>
              <th className={dataTableP2[j].qt > 0 ? 'green' : 'red'}>
                {dataTableP2[j].qt}
              </th>
              <th className='red'>0</th>
              <th className={dataTableP2[j].revenue > 0 ? 'green' : 'red'}>
                {dataTableP2[j].revenue}
              </th>
              <th>0</th>
              <th>0</th>
            </>
          ) : (
            <>
              <th className='red'>0</th>
              <th className='red'>0</th>
              <th className='red'>0</th>
              <th className='red'>0</th>
              <th>0</th>
              <th>0</th>
            </>
          )}
        </tr>
      );
      currentDate.setDate(currentDate.getDate() + 1);
      i = i + 1;
      j = j + 1;
      k = k + 1;
    }
    return rows;
  };

  return (
    <div className='features'>
      <div className='fields'>

        <div className="serchInput">
          <Search2 className="searchlist" onSelectItem={handleSelectItem} />
          {!search1Filled && <span className="error-message">This field is required</span>}
        </div>
        <div className="rangeDate">
          <Agenda onStartDateChange={setSelectedStart} onEndDateChange={setSelectedEnd}  />
          {!dateRangeFilled && <span className="error-message">Date range is required</span>}
        </div>
        <div className="serchInput">
          <Search2 className="searchlist" onSelectItem={handleSelectItem2} />
          {!search2Filled && <span className="error-message">This field is required</span>}
        </div>
      </div>
      <div className='ValidationButt'>
        <button onClick={handleFetchData} className="dataButt">
          <div className="dataButtContent">Fetch data
            <svg className="dataArrow1" width="17" height="12"
              viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.6531 6.39301C16.9489 6.09721 16.9489 5.61763 16.6531 5.32183L11.8328 0.501521C11.537 0.205723 11.0574 0.205723 10.7616 0.501521C10.4658 0.797319 10.4658 1.2769 10.7616 1.5727L15.0463 5.85742L10.7616 10.1421C10.4658 10.4379 10.4658 10.9175 10.7616 11.2133C11.0574 11.5091 11.537 11.5091 11.8328 11.2133L16.6531 6.39301ZM0.96875 6.61486H16.1175V5.09998H0.96875V6.61486Z"
                fill="#08074E"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className='informationProduct'>
        <div>
          {quantityProduct1 !== null && (<div className='comparatorQuantity'>Total Quantity First Product : {quantityProduct1}</div>)}

          {cAProduct1 !== null && (<div className='comparatorChiffreDAffaire'> Chiffre D'affaire First Product : {cAProduct1}</div>)}
        </div>
        <div className='tableContainer'>
          {quantityProduct1 !== null && (
            <table className='comparatortable'>
              <thead>
                <tr>
                  <th>Date</th>
                  <th colSpan="2">Daily Quantity </th>
                  <th colSpan="2">Daily Revenue </th>
                  <th colSpan="2">Daily Tickets </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <th>Product 1</th>
                  <th>Product 2</th>
                  <th>Product 1</th>
                  <th>Product 2</th>
                  <th>Product 1</th>
                  <th>Product 2</th>
                </tr>
                {tableRows}



              </tbody>
            </table>)}
        </div>



        <div>
          {quantityProduct2 !== null && (<div className='comparatorQuantity'>Total Quantity Second Product: {quantityProduct2}</div>)}

          {cAProduct2 !== null && (<div className='comparatorChiffreDAffaire'> Chiffre D'affaire Second Product: {cAProduct2}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Features;
