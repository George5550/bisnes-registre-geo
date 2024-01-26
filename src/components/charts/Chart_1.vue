<template>
    <BarChart :chartData="testData" />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { BarChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default defineComponent({
    components: { BarChart },
    setup() {
       
      const testData = {
        labels: ['2012', '2022','2012', '2022'],
        datasets: [
            {
                label: 'გარდაცვალება',
                data: [10, 15, 23, 3],
                borderColor: '#77CEFF',
                backgroundColor: '#77CEFF',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 0.5,
            },
            {
                label: 'დაბადება',
                data: [10, 15, 20, 12 ,20, 12],
                borderColor: '#0079AF',
                backgroundColor: '#0079AF',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.5,
            },

          
        ]
      }
  
      return { testData };
    },
  });
  </script>