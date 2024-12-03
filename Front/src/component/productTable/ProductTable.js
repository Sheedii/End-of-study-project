import React, { useState, useEffect } from 'react'
import './productTable.css'
import Change from "../../assets/changePageIcon.svg";
import { useNavigate } from 'react-router-dom';
import Loader from '../loading/loading';

const ProductTable = ({ selectedProduct1, selectedProduct2, selectedStart, selectedEnd }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [tableRows, setTableRows] = useState([]);

    const handleChangeButtonClick = () => {
        navigate(`/Comparator`);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response5 = await fetch(`http://localhost:8087/dashboard/products?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
                const dataTableP1 = await response5.json();

                const response6 = await fetch(`http://localhost:8087/dashboard/products?lib=${selectedProduct2}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
                const dataTableP2 = await response6.json();

                const rows = [];
                const currentDate = new Date(selectedStart);
                var i = 0;
                var j = 0;

                while (currentDate < new Date(selectedEnd)) {
                    const formattedDate = currentDate.toISOString().split('T')[0];
                    const tp1 = dataTableP1[i];
                    const tp2 = dataTableP2[j];
                    
                        rows.push(
                            <tr className='titleRows' key={formattedDate}>
                                <th className='colonne1'>{formattedDate}</th>
                                {tp1 && tp2 ? (
                                    <>
                                        <td className={
                                            dataTableP1[i].qt === dataTableP2[j].qt
                                                ? 'equal' // Class for equal values
                                                : dataTableP1[i].qt > dataTableP2[j].qt
                                                    ? 'up'
                                                    : 'down'
                                        }>
                                            {dataTableP1[i].qt}
                                        </td>
                                        <td className={
                                            dataTableP1[i].qt === dataTableP2[j].qt
                                                ? 'equal'
                                                : dataTableP1[i].qt < dataTableP2[j].qt
                                                    ? 'up'
                                                    : 'down'
                                        }>
                                            {dataTableP2[j].qt}
                                        </td>
                                        <td className={dataTableP1[i].revenue === dataTableP2[j].revenue ? 'equal'
                                            : dataTableP1[i].revenue > dataTableP2[j].revenue ? 'up'
                                                : 'down'}>
                                            {dataTableP1[i].revenue}
                                        </td>
                                        <td className={
                                            dataTableP1[i].revenue === dataTableP2[j].revenue ? 'equal'
                                                : dataTableP1[i].revenue < dataTableP2[j].revenue ? 'up'
                                                    : 'down'}>
                                            {dataTableP2[j].revenue}
                                        </td>
                                        <td>0</td>
                                        <td className='noRight'>0</td>
                                    </>
                                ) : tp1 ? (
                                    <>
                                        <td className={dataTableP1[i].qt > 0 ? 'up' : 'down'}>
                                            {dataTableP1[i].qt}
                                        </td>
                                        <td className='down'>0</td>
                                        <td className={dataTableP1[i].revenue > 0 ? 'up' : 'down'}>
                                            {dataTableP1[i].revenue}
                                        </td>
                                        <td className='down'>0</td>
                                        <td>0</td>
                                        <td className='noRight'>0</td>
                                    </>
                                ) : tp2 ? (
                                    <>
                                        <td className='down'>0</td>
                                        <td className={dataTableP2[j].qt > 0 ? 'up' : 'down'}>
                                            {dataTableP2[j].qt}
                                        </td>
                                        <td className='down'>0</td>
                                        <td className={dataTableP2[j].revenue > 0 ? 'up' : 'down'}>
                                            {dataTableP2[j].revenue}
                                        </td>
                                        <td>0</td>
                                        <td className='noRight'>0</td>
                                    </>
                                ) : (
                                    <>
                                        <td className='down'>0</td>
                                        <td className='down'>0</td>
                                        <td className='down'>0</td>
                                        <td className='down'>0</td>
                                        <td>0</td>
                                        <td className='noRight'>0</td>
                                    </>
                                )}

                            </tr>
                        );
                    
                    currentDate.setDate(currentDate.getDate() + 1);
                    i++;
                    j++;
                }
                setTableRows(rows);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
            
        };

        fetchData();
    }, [selectedProduct1, selectedProduct2, selectedStart, selectedEnd]);

return (
        <div className='ProductComparator20'>
          <div className='ProductComparatorCard'>
            <div className='ComparatorHeader'>
              <button type="button" className="changeButtonComparator" onClick={handleChangeButtonClick}>
                <img src={Change} alt="change Time Line" />
                Change Page
              </button>
              <div className='DateRangeHeader'>{selectedStart} to {selectedEnd}</div>
            </div>
            <div className='comparatorLine'></div>
            <div className='titreproduit'>
                    <div className='produitTable'>Product1 :</div>
                    <div className='produitdansletable'>{selectedProduct1}</div>
                    <div className='produitTable'>Product2 :</div>
                    <div className='produitdansletable'>{selectedProduct2}</div>
                </div>
                {loading ? (
                    <div className='ProductTableLoader'>
                    <Loader/>
                    </div>
                ) : (
            <div className='tableContainer'>
              <div className='tableHeaderWrapper'>
                <table className='comparatortable2 withShadow'>
                  <thead className='ComparatortableHead'>
                    <tr className='titleRows'>
                      <th className='Datetitre Tablehead colonne1'>Date</th>
                      <th colSpan="2" className='Tablehead head2'>Daily Quantity</th>
                      <th colSpan="2" className='Tablehead head2'>Daily Revenue</th>
                      <th colSpan="2" className='TicketTitre Tablehead noRight'>Daily Tickets</th>
                    </tr>
                    <tr className='titleRows'>
                      <th className='colonne1'></th>
                      <th className='colonne2' >Product 1</th>
                      <th className='colonne3'>Product 2</th>
                      <th className='colonne4'>Product 1</th>
                      <th className='colonne5'>Product 2</th>
                      <th className='colonne6 '>Product 1</th>
                      <th className='noRight colonne7'>Product 2</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className='tableBodyWrapper'>
                <table className='comparatortable2'>
                  <tbody className='tableBody'>
                    {tableRows}
                  </tbody>
                </table>
              </div>
            </div>
        )}
          </div>
        </div>
    );
      
      
}

export default ProductTable
