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
        labels: ['2012', '2022','2012', '2022'],
        datasets: [
            {
                label: 'ქ.თბილისი',
                data: [10, 15, 23, 3],
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
                data: [70, 47, 40, 65],
                borderColor: 'black',
                backgroundColor: 'black',
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
                barPercentage: 0.4,
            },

            {
                label: 'ქ.ბათუმი',
                data: [10, 30, 50, 25],
                borderColor: '#0079AF',
                backgroundColor: '#0079AF',
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