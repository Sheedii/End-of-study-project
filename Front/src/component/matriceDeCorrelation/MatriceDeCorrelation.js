import React, { useState, useEffect } from 'react';
import axios from 'axios';
import matrix from '../../assets/correlation matrix.svg'
import Grid from '@mui/material/Grid';
import './matriceDeCorrelation.css'
import Search from '../searchBarCorrelation/SearchBarCorrelation';


const useStyles = {
    productCell: {
        textAlign: 'center',
        padding: '8px',
        backgroundColor: '#5F6B8F',
        color: '#fff',
        fontFamily: 'Hanken Grotesk, sans-serif',
    },

    topLeftCell: {
        textAlign: 'center',
        padding: '8px',
        backgroundColor: '#5F6B8F',
        color: '#fff',
        fontFamily: 'Hanken Grotesk, sans-serif',
    },
    table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '0',
        margin: 'auto',
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: 'Hanken Grotesk, sans-serif',
    },
    thTd: {
        padding: '5px',
        border: '1px solid #fff',
        fontFamily: 'Hanken Grotesk, sans-serif',
    },

    tableContainer: {
        maxWidth: '100%',
        fontFamily: 'Hanken Grotesk, sans-serif',
    },
};

const MatriceDeCorrelation = ({ selectedProducts, selectedStart, selectedEnd }) => {
    const [percentages, setPercentages] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState([...selectedProducts]);


    const handleButtonAdd = () => {
        if (selectedProduct && !selectedProducts2.includes(selectedProduct) && selectedProducts2.length <= 10) {
            setSelectedProducts2([...selectedProducts2, selectedProduct]);
        }
    };

    const handleSelectItem = SelectItem => {
        setSelectedProduct(SelectItem);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8087/correlation/calculate-percentages', { selected_items: selectedProducts2 });
                console.log('Response Data:', response.data);
                setPercentages(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [selectedProducts2]);

    const getInverseTextColor = (value) => {
        const percentage = parseFloat(value) || 0;
        const colorValue = Math.round((percentage / 100) * 255);
        return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    };

    return (
        <div className='ProductComparator2'>
            <div className='ProductComparatorCard'>
                <div className='footTitle correlationTitle'>
                    <div className='PrintHeatmapIcon'>
                        <img src={matrix} alt="selectIcon" />
                        <div className='PrintHeatmap'>correlation matrix</div>
                    </div>
                    <div className='footPrintDate'>Mai 17, 2023 12:35 PM</div>
                </div>
                <div className="CorelationSearch">
                    <Search onSelectItem={handleSelectItem} />
                    <button className='ComparatorSelectButt' onClick={handleButtonAdd}>Add Product</button>
                </div>
                <div className='TableauDeCorrelation' style={{ width: '100%' }}>
                    <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '0px', marginBottom: '30px' }}>
                        <Grid item xs={12} sm={10}>
                            <div style={useStyles.tableContainer}>
                                <table style={{ ...useStyles.table, backgroundColor: 'transparent' }} data-vertable="ver6">
                                    <thead>
                                        <tr className="row100 head">
                                            <th className="column100 column1" data-column="column1" style={{ ...useStyles.topLeftCell, ...useStyles.thTd, fontWeight: 'normal' }}>
                                                Product name
                                            </th>
                                            {selectedProducts2.map((item, index) => (
                                                <th
                                                    key={item}
                                                    className={`column100 column${index + 2}`}
                                                    data-column={`column${index + 2}`}
                                                    style={{ ...useStyles.productCell, ...useStyles.thTd, fontWeight: 'normal' }}
                                                >
                                                    {item}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedProducts2.map((item, rowIndex) => (
                                            <tr key={item} className="row100">
                                                <td className="column100 column1" data-column="column1" style={{ ...useStyles.productCell, ...useStyles.thTd }}>
                                                    {item}
                                                </td>
                                                {selectedProducts2.map((otherItem, colIndex) => {
                                                    const key1 = `${item} / ${otherItem}`;
                                                    const key2 = `${otherItem} / ${item}`;
                                                    const percentageData = percentages[key1] || percentages[key2];
                                                    const percentage_b_from_a = percentageData ? percentageData.percentage_b_from_a : 0;
                                                    const percentage_a_from_b = percentageData ? percentageData.percentage_a_from_b : 0;

                                                    let displayContent;
                                                    if (rowIndex === colIndex) {
                                                        displayContent = null;
                                                    } else if (rowIndex < colIndex) {
                                                        displayContent = `${percentage_b_from_a.toFixed(2)}%`;
                                                    } else {
                                                        displayContent = `${percentage_a_from_b.toFixed(2)}%`;
                                                    }

                                                    return (
                                                        <td
                                                            key={otherItem}
                                                            className={`column100 column${colIndex + 2}`}
                                                            data-column={`column${colIndex + 2}`}
                                                            style={{
                                                                ...useStyles.productCell,
                                                                ...useStyles.thTd,
                                                                fontWeight: 'normal',
                                                                backgroundColor: rowIndex !== colIndex ? `rgba(8, 7, 78, ${(rowIndex < colIndex ? percentage_b_from_a : percentage_a_from_b) / 100})` : '',
                                                                color: (rowIndex !== colIndex && (rowIndex < colIndex ? percentage_b_from_a : percentage_a_from_b) > 49) ? '#fff' : getInverseTextColor(rowIndex < colIndex ? percentage_b_from_a : percentage_a_from_b),
                                                            }}
                                                        >
                                                            {displayContent}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}

export default MatriceDeCorrelation
