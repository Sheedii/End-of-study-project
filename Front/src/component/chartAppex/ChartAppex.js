/*import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './chartAppex.css';
import Loader from '../loading/loading.js'

// Function to generate an array of the last 30 days
// Function to generate an array of the last 30 days (without the year)
const generateLast30Days = () => {
    const dates = [];
    const currentDate = new Date();
    for (let i = 30; i >= 1; i--) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - i);
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding leading zero if needed
        const day = date.getDate().toString().padStart(2, '0'); // Adding leading zero if needed
        dates.push(`${month}/${day}`);
    }
    return dates;
};


const ApexChart = () => {
    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState({
        chart: {
            height: 450,
            type: 'line',
            toolbar: {
                show: true
            },
        },
        zoom: {
            enabled: false
        },
        colors: ['#FF6B00', '#FEB700', '#FEB56A', '#DCED31', '#DC3912', '#AAD696', '#9747FF', '#62B5B5', '#424268', '#333333'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Ranking Chart',
            align: 'left',
            offsetY: -5,
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#D2D4D9'],
                opacity: 0.2
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: generateLast30Days(),
            title: {
                text: 'Day'
            }
        },
        yaxis: [
            {
                
                min: 1,
                max: 10,
            },
            {
                opposite: true,
                min: 1,
                max: 10,
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                labels: {
                    //show: true,
                    align: 'right',
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        colors: '#333',
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label'
                    },
                    formatter: function (val) {
                        return +val;
                    }
                },
            },
        ],
        
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetY: -10,
            offsetX: -15
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                formatter: function (val, { seriesIndex, dataPointIndex, w }) {
                    const series = w.config.series[seriesIndex].data;
                    const previousValue = series[dataPointIndex - 1];
                    let changeSymbol = '';
                    let x = 0;
                    if (previousValue !== undefined) {
                        x = val - previousValue;
                        if (x > 0) {
                            changeSymbol = '↑ +';
                        } else if (x < 0) {
                            changeSymbol = '↓ -';
                        }
                    }
                    if (x === 0) {
                        return "Rank " + val;
                    } else {
                        return "Rank " + val + " " + changeSymbol + " " + Math.abs(x);
                    }
                }
            },
            marker: {
                show: true
            }
        }
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8087/dashboard/top10Products');
                const data = await response.json();
                

                // Process the data to match the chart's series format and reverse the data for each product
                const seriesData = Object.keys(data).map((product) => ({
                    name: product,
                    data: data[product].slice().reverse() // Reverse the data array for each product
                }));

                setSeries(seriesData);
                setLoading(false); // Data is loaded
            } catch (error) {
                console.error("Error fetching data", error);
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div className='Loader01'>
                <Loader/>
                </div>
            ) : (
                <div className="chart" id="chart">
                    <ReactApexChart options={options} series={series} type="line" height={450} />
                </div>
            )}
            <div id="html-dist"></div>
        </div>
    );
}

export default ApexChart;
*/

import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './chartAppex.css';
import Loader from '../loading/loading.js';

// Function to generate an array of the last 30 days (without the year)
const generateLast30Days = () => {
    const dates = [];
    const currentDate = new Date();
    for (let i = 30; i >= 1; i--) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - i);
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding leading zero if needed
        const day = date.getDate().toString().padStart(2, '0'); // Adding leading zero if needed
        dates.push(`${month}/${day}`);
    }
    return dates;
};

const ApexChart = () => {
    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState({
        chart: {
            height: 450,
            type: 'line',
            toolbar: {
                show: true
            },
        },
        zoom: {
            enabled: false
        },
        colors: ['#FF6B00', '#FEB700', '#FEB56A', '#DCED31', '#DC3912', '#AAD696', '#9747FF', '#62B5B5', '#424268', '#333333'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Ranking Chart',
            align: 'left',
            offsetY: -5,
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#D2D4D9'],
                opacity: 0.2
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: generateLast30Days(),
            title: {
                text: 'Day'
            }
        },
        yaxis: [
            {
                min: 1,
                max: 10,
            },
            {
                opposite: true,
                min: 1,
                max: 10,
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                labels: {
                    //show: true,
                    align: 'right',
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        colors: '#333',
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label'
                    },
                    formatter: function (val) {
                        return +val;
                    }
                },
            },
        ],
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetY: -10,
            offsetX: -15
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                formatter: function (val, { seriesIndex, dataPointIndex, w }) {
                    const series = w.config.series[seriesIndex].data;
                    const previousValue = series[dataPointIndex - 1];
                    let changeSymbol = '';
                    let x = 0;
                    if (previousValue !== undefined) {
                        x = val - previousValue;
                        if (x > 0) {
                            changeSymbol = '↑ +';
                        } else if (x < 0) {
                            changeSymbol = '↓ -';
                        }
                    }
                    if (x === 0) {
                        return "Rank " + val;
                    } else {
                        return "Rank " + val + " " + changeSymbol + " " + Math.abs(x);
                    }
                }
            },
            marker: {
                show: true
            }
        }
    });
    const [loading, setLoading] = useState(true);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8087/dashboard/top10Products');
                const data = await response.json();

                // Process the data to match the chart's series format and reverse the data for each product
                const seriesData = Object.keys(data).map((product) => ({
                    name: product,
                    data: data[product].slice().reverse() // Reverse the data array for each product
                }));

                if (seriesData.length === 0) {
                    setNoData(true);
                } else {
                    setSeries(seriesData);
                }
                setLoading(false); // Data is loaded
            } catch (error) {
                console.error("Error fetching data", error);
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div className='Loader01'>
                    <Loader />
                </div>
            ) : noData ? (
                <div className="no-data">
                    There are no data available.
                </div>
            ) : (
                <div className="chart" id="chart">
                    <ReactApexChart options={options} series={series} type="line" height={450} />
                </div>
            )}
            <div id="html-dist"></div>
        </div>
    );
}

export default ApexChart;
