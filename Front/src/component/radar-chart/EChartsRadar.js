import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const EChartsRadar = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);

    const dataBJ = [
      [55, 9, 56, 0.46, 18, 6, 1],
      // Your data for Beijing
      // Add more data if needed
    ];
    const dataGZ = [
      [26, 37, 27, 1.163, 27, 13, 1],
      // Your data for Guangzhou
      // Add more data if needed
    ];
    const dataSH = [
      [91, 45, 125, 0.82, 34, 23, 1],
      // Your data for Shanghai
      // Add more data if needed
    ];
    const lineStyle = {
      width: 1,
      opacity: 0.5
    };
    const option = {
      backgroundColor: '#161627',
      title: {
        text: 'AQI - Radar',
        left: 'center',
        textStyle: {
          color: '#eee'
        }
      },
      legend: {
        bottom: 5,
        data: ['Beijing', 'Shanghai', 'Guangzhou'],
        itemGap: 20,
        textStyle: {
          color: '#fff',
          fontSize: 14
        },
        selectedMode: 'single'
      },
      radar: {
        indicator: [
          { name: 'AQI', max: 300 },
          { name: 'PM2.5', max: 250 },
          { name: 'PM10', max: 300 },
          { name: 'CO', max: 5 },
          { name: 'NO2', max: 200 },
          { name: 'SO2', max: 100 }
        ],
        shape: 'circle',
        splitNumber: 5,
        axisName: {
          color: 'rgb(238, 197, 102)'
        },
        splitLine: {
          lineStyle: {
            color: [
              'rgba(238, 197, 102, 0.1)',
              'rgba(238, 197, 102, 0.2)',
              'rgba(238, 197, 102, 0.4)',
              'rgba(238, 197, 102, 0.6)',
              'rgba(238, 197, 102, 0.8)',
              'rgba(238, 197, 102, 1)'
            ].reverse()
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.5)'
          }
        }
      },
      series: [
        {
          name: 'Beijing',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataBJ,
          symbol: 'none',
          itemStyle: {
            color: '#F9713C'
          },
          areaStyle: {
            opacity: 0.1
          }
        },
        {
          name: 'Shanghai',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataSH,
          symbol: 'none',
          itemStyle: {
            color: '#B3E4A1'
          },
          areaStyle: {
            opacity: 0.05
          }
        },
        {
          name: 'Guangzhou',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataGZ,
          symbol: 'none',
          itemStyle: {
            color: 'rgb(238, 197, 102)'
          },
          areaStyle: {
            opacity: 0.05
          }
        }
      ]
    };

    option && myChart.setOption(option);

    return () => {
      myChart.dispose(); // Dispose chart when component unmounts
    };
  }, []);

  return <div id="main" style={{ width: '100%', height: '400px' }} />;
};

export default EChartsRadar;
