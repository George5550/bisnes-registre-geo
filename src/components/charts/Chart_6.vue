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
        labels: ['2013', '2014','2015', '2016', '2017', '2018', '2019', '2020', '2021', ],
        datasets: [
            {
                label: 'დაბადებული 2012 წელს',
                data: [100, 45, 23 ,40, 25, 32, 24, 32,34],
                borderColor: '#4FADF5',//ცისფერი
                backgroundColor: '#4FADF5',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },

            {
                label: 'დაბადებული 2013 წელს',
                data: [0, 34, 39, 48, 26, 29, 28, 26,56],
                borderColor: '#FD0B34',//წითელი
                backgroundColor: '#FD0B34',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },


            {
                label: 'დაბადებული 2014 წელს',
                data: [0, 0, 67, 58, 47, 54, 30,36,45],
                borderColor: '#05D413',//მწვანე
                backgroundColor: '#05D413',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },



            {
                label: 'დაბადებული 2015 წელს',
                data: [0, 0, 0, 49, 33, 42, 34,40,67],
                borderColor: '#FF9101',//სტაფილოს ფერი
                backgroundColor: '#FF9101',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },


            {
                label: 'დაბადებული 2016 წელს',
                data: [0, 0, 0, 0, 76, 34, 39,46,41],
                borderColor: '#7510F7',//იასამნის ფერი
                backgroundColor: '#7510F7',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },

            {
                label: 'დაბადებული 2017 წელს',
                data: [0, 0, 0, 0, 0, 52, 45,56,87],
                borderColor: '#F7E810',
                backgroundColor: '#F7E810',//ყვითელი
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },

            {
                label: 'დაბადებული 2018 წელს',
                data: [0, 0, 0, 0, 0, 0, 49,69,73],
                borderColor: '#0F8038',//მუქი მწვანე
                backgroundColor: '#0F8038',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },


            {
                label: 'დაბადებული 2019 წელს',
                data: [0, 0, 0, 0, 0, 0, 0, 34,12],
                borderColor: '#B70D6E',//იისფერი
                backgroundColor: '#B70D6E',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },

            {
                label: 'დაბადებული 2020 წელს',
                data: [0, 0, 0, 0, 0, 0, 0,0, 90],
                borderColor: '#00599E',//ლურჯი
                backgroundColor: '#00599E',
                borderWidth: 2,
                borderRadius: 2,
                borderSkipped: false,
                barPercentage: 2,
            },

        ],


      }
  
      return { testData };
    },
  });
  </script>