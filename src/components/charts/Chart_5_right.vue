<template>
    <PieChart :chartData="testData" />
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { PieChart } from 'vue-chart-3';
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default defineComponent({
    components: { PieChart },
    setup() {

  
        const chartOptions = ref(
        {
            type: 'pie',
      
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                    }
                }
            }}
        )
       
      const testData = {
        labels: ['ქ.თბილისი', 'ქ.ბათუმი', 'ქ.ქუთაისი' ],
        datasets: [
            {
                label: 'ინფორმაცია',
                data: [10, 15, 50],
                // borderColor: '#77CEFF',
                backgroundColor: ['#77CEFF', 'red', 'black'],
                
            
            },

          
        ]
      }
  
      return { testData,chartOptions };
    },
  });
  </script>