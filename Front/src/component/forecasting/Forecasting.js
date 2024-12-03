import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import Search from '../search2/Search2';
import Loader from '../loader/Loader.js'
import './forecasting.css';

const Forecasting = () => {
    const [items, setItems] = useState([]);
    const [forecastValues, setForecastValues] = useState([]);
    const [validationData, setValidationData] = useState([]);
    const [forecastDates, setForecastDates] = useState([]);
    const [summary, setSummary] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [SelectedItem2, setSelectedItem2] = useState('');
    const [showForecastResults, setShowForecastResults] = useState(false); // State to control displaying forecast results
    const [loading, setLoading] = useState(false); // State to control the loading indicator
    const [percentLoaded, setPercentLoaded] = useState(0); // State to track percentage loaded

    const handleSelectItem = selectedItem => {
        setSelectedItem(selectedItem);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true); // Set loading state to true when the forecast request is initiated
        const data = {
            selected_item: selectedItem.value
        };
        axios.post('http://localhost:5000/forecast', data, {
            onDownloadProgress: progressEvent => {
                const { loaded, total } = progressEvent;
                const percentCompleted = Math.round((loaded * 100) / total);
                setPercentLoaded(percentCompleted);
            }
        })
            .then(response => {
                setLoading(false); // Set loading state to false when the forecast request is completed
                // Check if response data contains forecast values
                if (response.data && response.data.forecast_values) {
                    setForecastValues(response.data.forecast_values);
                    setForecastDates(response.data.forecast_dates);
                    setValidationData(response.data.validation_data);
                    setSummary(response.data.summary);
                    setShowForecastResults(true); // Set to true to display forecast results
                } else {
                    console.error('Invalid forecast data:', response);
                    console.log('Invalid forecast data:', response);
                }
            })
            .catch(error => {
                setLoading(false); // Set loading state to false in case of error
                console.error('Error forecasting:', error);
            });
    };

    const plotData = [
        {
            x: forecastDates.slice(0, 15), // Use forecast dates as x values
            y: forecastValues.slice(0, 15), // Select the forecast values for the next 15 days
            type: 'scatter',
            mode: 'lines',
            name: 'Forecast'
        },
        {
            x: forecastDates.slice(0, 15), // Use forecast dates as x values
            y: validationData.slice(0, 15), // Select the real values for the next 15 days
            type: 'scatter',
            mode: 'lines',
            name: 'Actual'
        }
    ];

    return (
        <div>
            <div className='container' >
                <div className="forcasting">
                    <h1>ARIMA Forecasting</h1>

                    <form className="formlist">
                        <Search className="searchlist" onSelectItem={handleSelectItem} />
                        <div className='ValidationButt'>
                            <button onClick={handleSubmit} className="dataButt">
                                <div className="dataButtContent">Forecast
                                    <svg
                                        className="dataArrow1"
                                        width="17"
                                        height="12"
                                        viewBox="0 0 17 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.6531 6.39301C16.9489 6.09721 16.9489 5.61763 16.6531 5.32183L11.8328 0.501521C11.537 0.205723 11.0574 0.205723 10.7616 0.501521C10.4658 0.797319 10.4658 1.2769 10.7616 1.5727L15.0463 5.85742L10.7616 10.1421C10.4658 10.4379 10.4658 10.9175 10.7616 11.2133C11.0574 11.5091 11.537 11.5091 11.8328 11.2133L16.6531 6.39301ZM0.96875 6.61486H16.1175V5.09998H0.96875V6.61486Z"
                                            fill="#08074E"
                                        />
                                    </svg>  </div>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='courbe'>
                    {loading ? (
                        <Loader  duration={2750} />
                    ) : showForecastResults && (
                        <div>
                            <h2>Forecast Results</h2>
                            <Plot
                                data={plotData}
                                layout={{ width: 800, height: 400, title: 'Forecast Results' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Forecasting;
