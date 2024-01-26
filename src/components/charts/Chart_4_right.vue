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
        labels: ['2012', '2013','2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: 'საქმიანობა უცნობია',
                data: [10, 15, 23, 33,45,45,45,45,45,45],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                // barThickness: 20,   
                barPercentage: 0.4,
            },
            {
                label: 'ქსხვა დარგები',
                data: [70, 47, 40, 65,45,45,45,45,45,45],
                borderColor: 'red',
                backgroundColor: 'red',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.4,
            },

            {
                label: 'მშენებლობა',
                data: [10, 30, 50, 25, 45,45,45,45,45,45],
                borderColor: '#0079AF',
                backgroundColor: '#0079AF',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.4,
            },

            {
                label: 'განთავსების საშუალებები',
                data: [10, 30, 50, 25, 28,75,55,48,21,17],
                borderColor: 'black',
                backgroundColor: 'black',
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