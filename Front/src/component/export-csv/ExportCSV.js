import React, { useEffect , useState } from 'react';
import './ExportCSV.css'; // Assuming you have a CSS file for styling
import { ReactComponent as Select} from '../../assets/select.svg';

const ExportCSV = ({ productsItem, startDate, endDate }) => {
  const [csvData, setCsvData] = useState([]);
  
  useEffect(() => {
    // Function to convert product data to CSV format
    const convertToCSV = () => {
      const csvRows = [];
      const headers = ['ID', 'Number', 'Title', 'Start Date', 'End Date'];

      // Add headers to CSV
      csvRows.push(headers.join(','));

      // Add product data to CSV
      productsItem.forEach(product => {
        const rowData = [
          product.id,
          product.number,
          product.lib,
          startDate,
          endDate
        ];
        csvRows.push(rowData.join(','));
      });

      // Join all rows with newlines
      const csvDataString = csvRows.join('\n');
      setCsvData(csvDataString);
    };

    convertToCSV();
  }, [productsItem, startDate, endDate]);

  // Function to handle CSV export
  const handleClick = () => {
    // Create a blob containing the CSV data
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'products.csv');

    // Trigger the click event to initiate the download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="default-csv" onClick={handleClick}>
      <div className="rectangle-csv"></div>
      <div className="export-reseults-csv">Export results CSV <Select/></div>
      <div className='=wrapper'>
        {productsItem.length > 0 && (
          <h3></h3>
        )}
      </div>
    </div>
  );
};

export default ExportCSV;
