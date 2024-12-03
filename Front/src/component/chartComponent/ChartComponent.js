import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import './chartComponent.css';

const ChartComponent = () => {
  /*
  const chartRef = useRef(null);
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8087/dashboard/top10Products');
        const data = await response.json();
        console.log("data", data);

        // Process the data to match the chart's series format
        const series = Object.keys(data).map((product) => ({
          name: product,
          data: data[product]
        }));
        console.log("series", series);
        // Define the chart options with the fetched data
        const options = {
          series: series,
          chart: {
            height: 450,
            type: 'line',
            toolbar: {
              show: false
            }
          },
          colors: ['#FF6B00', '#FEB700', '#FEB56A', '#DCED31', '#DC3912', '#AAD696','#9747FF','#62B5B5','#424268','#333333'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Ranking Chart',
            align: 'left'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#D2D4D9'],
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
            title: {
              text: 'Day'
            }
          },
          yaxis: [
        
            {
              
              axisTicks: {
                show: false
              },
              axisBorder: {
                show: false
              },
              labels: {
                show: true,
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
                formatter: function(val) {
                  return + val;
                  console.log("val",val);
                }
              },
            },
            {
              opposite: true,
              axisTicks: {
                show: false
              },
              axisBorder: {
                show: false
              },
              labels: {
                show: true,
                align: 'left',
                minWidth: 0,
                maxWidth: 160,
                style: {
                  colors: '#333',
                  fontSize: '12px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  cssClass: 'apexcharts-xaxis-label'
                }
              },
              title: {
                text: 'Product',
                style: {
                  color: '#333',
                  fontSize: '12px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                }
              }
            }
          ],
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          },
          tooltip: {
            theme: 'dark',
            x: {
              show: false
            },
            y: {
              formatter: function(val, { seriesIndex, dataPointIndex, w }) {
                const series = w.config.series[seriesIndex].data;
                const previousValue = series[dataPointIndex - 1];
                let changeSymbol = '';
                let x = 0;
                if (previousValue !== undefined) {
                  x = val - previousValue;
                  if (x > 0) {
                    changeSymbol = '↑ ';
                  } else if (x < 0) {
                    changeSymbol = '↓ ';
                  }
                }
                return "Rank " + val + changeSymbol + x;
              }
            },
            marker: {
              show: true
            }
          }
        };

        setChartOptions(options);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let chart = null;
    if (chartOptions) {
      chart = new ApexCharts(chartRef.current, chartOptions);
      chart.render();
    }

    // Clean up function
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartOptions]);

  return <div className='chartTop' ref={chartRef} />;*/
};

export default ChartComponent;
