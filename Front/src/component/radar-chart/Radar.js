import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Radar = () => {
  useEffect(() => {
    const chartDom = document.getElementById('radar-chart');
    const myChart = echarts.init(chartDom);

    const option = {
      radar: [
        {
          indicator: [
            { text: 'Product1', max: 150 },
            { text: 'Product2', max: 150 },
            { text: 'Product3', max: 150 },
            { text: 'Product4', max: 120 },
            { text: 'Product5', max: 108 },
            { text: 'Product6', max: 72 }
          ],
          radius: 120,
          axisName: {
            color: '#fff',
            backgroundColor: '#555',
            borderRadius: 3,
            padding: [3, 5]
          }
        }
      ],
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [120, 118, 130, 100, 99, 70],
              name: 'Data C',
              symbol: 'rect',
              symbolSize: 12,
              lineStyle: {
                type: 'dashed'
              },
              label: {
                show: true,
                formatter: function (params) {
                  return params.value;
                }
              },
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option);

    return () => {
      myChart.dispose(); // Dispose chart when component unmounts
    };
  }, []);

  return <div id="radar-chart" style={{ width: '100%', height: '400px' }} />;
};

export default Radar;
