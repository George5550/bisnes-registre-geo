<template>
    <LineChart :chartData="testData" />
  </template>
  
<script>
  import { defineComponent } from 'vue';
  import { LineChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default defineComponent({
    components: { LineChart },
    setup() {
       
      const testData = {
        labels: ['2012', '2022','2012', '2022','2022','2012', '2022','2012', '2022','2022',],
        datasets: [
            {
                label: 'სოფლის',
                data: [10, 25, 3, 103, 89, 45, 200, 45, 7],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
            },

            {
                label: 'სოფლის',
                data: [10, 25, 3, 103, 89, 45, 200, 45, 7],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
            },

            {
                label: 'სოფლის',
                data: [10, 25, 3, 103, 89, 45, 200, 45, 7],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
            },

            {
                label: 'სოფლის',
                data: [10, 25, 3, 103, 89, 45, 200, 45, 7],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
            },

            {
                label: 'სოფლის',
                data: [10, 25, 3, 103, 8, 45, 200, 45, 7],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
            },

            {
                label: 'სოფლის',
                data: [10, 25, 3, 153, 89, 45, 100, 45, 7],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
            },

            {
                label: 'rr',
                data: [10, 25, 3, 103, 29, 105, 10, 45, 7],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
            },
            {
                label: 'სოფლის',
                data: [10, 25, 3, 103, 89, 45, 200, 45, 7, 34],
                borderColor: '#0079AF',
                backgroundColor: '#0079AF',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            },

          
        ]
      }
  
      return { testData };
    },
  });
  </script>