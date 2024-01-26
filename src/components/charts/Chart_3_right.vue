<template>
    <BarChart :chartData="testData" :options="chartOptions" />
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { BarChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default defineComponent({
    components: { BarChart },
    setup() {

        const chartOptions = ref(
            {
            responsive              : true,
            maintainAspectRatio     : false,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }}
        )
       
      const testData = {
        labels: ['2012', '2013','2014', '2015', '2018', '2022'],
        datasets: [
            {
                label: 'ქ.თბილისი',
                data: [10, 15, 23, 19, 54,36,34],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                // barThickness: 20,   
                barPercentage: 0.4,
            },
            {
                label: 'ქ.ქუთაისი',
                data: [47, 36, 20, 65,12.19],
                borderColor: 'black',
                backgroundColor: 'black',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.4,
            },

            {
                label: 'ქ.ბათუმი',
                data: [10, 30, 50, 25,32,21],
                borderColor: '#0079AF',
                backgroundColor: '#0079AF',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.4,
            },

            {
                label: 'ქ.ბათუმი',
                data: [23, 13, 29, 45,13,40],
                borderColor: '#1B8E9F',
                backgroundColor: '#1B8E9F',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.4,
            },
 
        ],

      }
  
      return { testData,chartOptions };
    },

    
  });
  </script>