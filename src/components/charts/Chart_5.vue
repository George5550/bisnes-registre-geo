<template>
    <PieChart :chartData="testData" ref="chartRef" />
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from 'vue';
  import { PieChart } from 'vue-chart-3';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default defineComponent({
    components: { PieChart },
    props:{

    },
    emits:['downloadeEmit'],

    setup(props, {emit}) {
      const chartOptions = ref({
        type: 'pie',
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
            },
          },
        },
      });
  
      const testData = {
        labels: ['გარდაცვალება', 'დაბადება'],
        datasets: [
          {
            label: 'ინფორმაცია',
            data: [10, 15],
            backgroundColor: ['#77CEFF', 'red', 'black'],
          },
        ],
      };
      
    //   let chartInstance = null;
      const chartRef = ref(null);
      onMounted(() => {
        // const chartInstance = chartRef.value.$data._chart;
        // console.log(chartInstance);
    });
 
      const handlerDowloand = (format = 'jpg') => {
        console.log(chartRef.value.proxy);
        const chartInstance = chartRef.value.$data._chart;
        const canvas  = chartInstance.canvas;
        const imgData = canvas.toDataURL(`image/${format}`);
        emit('downloadeEmit', imgData)
      };
  
      const active = ref({ chart5: false });
  
      const rotate = (keyName, direction) => {
        active.value[keyName] = direction;
      };
  
      return { testData, chartOptions, handlerDowloand, active, rotate, chartRef };
    },
  });
  </script>