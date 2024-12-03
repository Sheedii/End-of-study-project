import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Paper } from '@mui/material';

const useStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
  },
  content: {
    textAlign: 'center',
  },
  productCell: {
    textAlign: 'center',
    padding: '12px',
    border: '1px solid #ccc',
    backgroundColor: '#5F6B8F',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '8px',
  },
  emptyCell: {
    padding: '12px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    borderRadius: '8px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: 'auto',
  },
  title: {
    color: '#08074E',
    marginBottom: '16px',
  },
  button: {
    backgroundColor: '#08074E',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px 20px',
    fontWeight: 'bold',
    marginTop: '16px',
  },
};

function MatrixFinal() {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [percentages, setPercentages] = useState({});

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/calculate-percentages', { selected_items: selectedItems });
      setPercentages(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getPercentageColor = (percentage) => {
    if (percentage < 20) {
      return 'blue'; // Blue for percentages less than 20%
    } else if (percentage >= 20 && percentage <= 50) {
      return 'lightblue'; // Lighter blue for percentages between 20% and 50%
    } else {
      return 'white'; // White for percentages greater than 50%
    }
  };



  return (
    <div style={useStyles.container}>
      <div style={useStyles.content}>
        <h1 style={useStyles.title}>Search Products</h1>
        <form onSubmit={handleSubmit}>
          <Autocomplete
            multiple
            id="products"
            options={products}
            value={selectedItems}
            onChange={(event, newValue) => {
              setSelectedItems(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Select Products"
              />
            )}
          />
          <Button type="submit" variant="contained" style={useStyles.button}>
            Calculate Percentages
          </Button>
        </form>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Paper style={{ padding: '16px', borderRadius: '8px', overflow: 'hidden' }}>
              <table style={useStyles.table}>
                <thead>
                  <tr>
                    <th style={{ ...useStyles.emptyCell, borderTopLeftRadius: '8px' }}></th>
                    {selectedItems.map((item, index) => (
                      <th key={item} style={{ ...useStyles.productCell, borderTop: '1px solid #ccc', borderTopRightRadius: index === selectedItems.length - 1 ? '8px' : '0' }}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {selectedItems.map((item, rowIndex) => (
                    <tr key={item}>
                      <td style={{ ...useStyles.productCell, borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc' }}>{item}</td>
                      {selectedItems.map((otherItem, colIndex) => (
                        <td key={otherItem} style={rowIndex === colIndex ? { ...useStyles.emptyCell, borderBottomLeftRadius: '8px' } : { ...useStyles.productCell, borderBottom: '1px solid #ccc', borderBottomRightRadius: rowIndex === selectedItems.length - 1 && colIndex === selectedItems.length - 1 ? '8px' : '0', backgroundColor: `rgba(8, 7, 78, ${percentages[`${item} / ${otherItem}`]?.percentage_b_from_a / 100 || 0})` }}>
                          {rowIndex === colIndex
                            ? null
                            : percentages[`${item} / ${otherItem}`] &&
                              percentages[`${item} / ${otherItem}`].percentage_b_from_a &&
                              percentages[`${item} / ${otherItem}`].percentage_a_from_b ? (
                              <>
                                {rowIndex > colIndex
                                  ? `${parseFloat(percentages[`${item} / ${otherItem}`].percentage_b_from_a).toFixed(2)}%`
                                  : `${parseFloat(percentages[`${item} / ${otherItem}`].percentage_b_from_a).toFixed(2)}%`}
                              </>
                            ) : (
                              '0%'
                            )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MatrixFinal;
