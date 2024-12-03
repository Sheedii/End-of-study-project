import React, { useState, useEffect } from 'react'
import './productDateTable.css'
import Change from "../../assets/changePageIcon.svg";
import { useNavigate } from 'react-router-dom';
import Loader from "../loading/loading"

const ProductDateTable = ({ selectedProduct1, selectedStart, selectedEnd, selectedStart2, selectedEnd2 }) => {
    const navigate = useNavigate();
    const [quantityProduct1, setQuantityProduct1] = useState(null);
    const [quantityProduct2, setQuantityProduct2] = useState(null);
    const [cAProduct1, setCAProduct1] = useState(null);
    const [cAProduct2, setCAProduct2] = useState(null);
    const [tableRows, setTableRows] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleChangeButtonClick = () => {
        navigate(`/DateComparator`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await fetch(`http://localhost:8087/dashboard/quantity?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
                const data1 = await response1.json();
                setQuantityProduct1(data1);

                const response2 = await fetch(`http://localhost:8087/dashboard/quantity?lib=${selectedProduct1}&firstDate=${selectedStart2}&lastDate=${selectedEnd2}`);
                const data2 = await response2.json();
                setQuantityProduct2(data2);

                const response3 = await fetch(`http://localhost:8087/dashboard/allRevenue?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
                const data3 = await response3.json();
                setCAProduct1(data3);

                const response4 = await fetch(`http://localhost:8087/dashboard/allRevenue?lib=${selectedProduct1}&firstDate=${selectedStart2}&lastDate=${selectedEnd2}`);
                const data4 = await response4.json();
                setCAProduct2(data4);

                const response5 = await fetch(`http://localhost:8087/dashboard/products?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
                const dataTableP1 = await response5.json();

                const response6 = await fetch(`http://localhost:8087/dashboard/products?lib=${selectedProduct1}&firstDate=${selectedStart2}&lastDate=${selectedEnd2}`);
                const dataTableP2 = await response6.json();

                console.log('table data2 ', dataTableP2);
                console.log('table data1 ', dataTableP1);

                const rows = [];
                const currentDate = new Date(selectedStart);
                const currentDate2 = new Date(selectedStart2);
                var i = 0;
                var j = 0;
                var dash1 = true;
                var dash2 = true;
                const dayBeforeEnd = new Date(selectedEnd);
                dayBeforeEnd.setDate(dayBeforeEnd.getDate() - 1);
                while (currentDate < new Date(selectedEnd) || currentDate2 < new Date(selectedEnd2)) {
                    if (currentDate >= new Date(selectedEnd)) {
                        dash1 = false;
                    }
                    if (currentDate2 >= new Date(selectedEnd2)) {
                        dash2 = false;
                    }
                    const formattedDate = currentDate.toISOString().split('T')[0];
                    const formattedDate2 = currentDate2.toISOString().split('T')[0];
                    const tp1 = dataTableP1[i];
                    const tp2 = dataTableP2[j];

                    rows.push(
                        <tr className='titleRows' key={formattedDate}>
                            <th className='colonne1 DeuxDates'><div>{formattedDate}</div><div>{formattedDate2}</div></th>
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
                            ) : tp1 && dash2 ? (
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
                            ) : tp1 && !dash2 ? (
                                <>
                                    <td className={dataTableP1[i].qt > 0 ? 'up' : 'down'}>
                                        {dataTableP1[i].qt}
                                    </td>
                                    <td className='down'>-</td>
                                    <td className={dataTableP1[i].revenue > 0 ? 'up' : 'down'}>
                                        {dataTableP1[i].revenue}
                                    </td>
                                    <td className='down'>-</td>
                                    <td>0</td>
                                    <td className='noRight'>0</td>
                                </>
                            ) : tp2 && dash1 ? (
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
                            ) : tp2 && !dash1 ? (
                                <>
                                    <td className='down'>-</td>
                                    <td className={dataTableP2[j].qt > 0 ? 'up' : 'down'}>
                                        {dataTableP2[j].qt}
                                    </td>
                                    <td className='down'>-</td>
                                    <td className={dataTableP2[j].revenue > 0 ? 'up' : 'down'}>
                                        {dataTableP2[j].revenue}
                                    </td>
                                    <td>0</td>
                                    <td className='noRight'>0</td>
                                </>
                            ) : !dash2 ? (
                                <>
                                    <td className='down'>0</td>
                                    <td className='down'>-</td>
                                    <td className='down'>0</td>
                                    <td className='down'>-</td>
                                    <td>0</td>
                                    <td className='noRight'>0</td>
                                </>
                            ) : !dash1 ? (
                                <>
                                    <td className='down'>-</td>
                                    <td className='down'>0</td>
                                    <td className='down'>-</td>
                                    <td className='down'>0</td>
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
                    currentDate2.setDate(currentDate2.getDate() + 1);
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
    }, [selectedProduct1, selectedStart, selectedEnd, selectedStart2, selectedEnd2]);

    return (
        <div className='ProductComparator20'>
            <div className='ProductComparatorCard'>
                <div className='ComparatorHeader'>
                    <button type="button" className="changeButtonComparator" onClick={handleChangeButtonClick}>
                        <img src={Change} alt="change Time Line" />
                        Change Page
                    </button>
                    <div className='DateRangeHeader'>
                        <div>{selectedStart} to {selectedEnd}</div>
                        <div>{selectedStart2} to {selectedEnd2}</div>
                    </div>
                </div>
                <div className='comparatorLine'></div>
                <div className='titreproduit'>
                    <div className='produitTable'>Product :</div>
                    <div className='produitdansletable'>{selectedProduct1}</div>
                </div>
                {loading ? (
                    <div className='ProductTableLoader'>
                        <Loader />
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
                                        <th className='colonne2' >Range 1</th>
                                        <th className='colonne3'>Range 2</th>
                                        <th className='colonne4'>Range 1</th>
                                        <th className='colonne5'>Range 2</th>
                                        <th className='colonne6 '>Range 1</th>
                                        <th className='noRight colonne7'>Range 2</th>
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

export default ProductDateTable
