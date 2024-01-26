<template >
    <div class="col-xl-6 col-lg-6 col-md-12 mb-2" v-if="!active.chart5">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <font-awesome-icon icon="rotate-left" class="rotate" @click="rotate('chart5', true)" />
            <p>{{ $t('Charts.head.leftRight_5_1') }}</p>
            
            <div class="dropdown">
              <button class="btn  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="bars" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Print Chart</a></li>
                <li>
                  <a class="dropdown-item" @click="downloadChart('png')" >Download PNG image</a>
                </li>
                <li><a class="dropdown-item" href="#">Download JPEG image </a></li>
                <li><a class="dropdown-item" href="#">Download PDF document </a></li>
                <li><a class="dropdown-item" href="#">Download SVG vector image </a></li>
              </ul>
            </div>
  
          </div>
          <div class="card-body">
            <chart5 class="size" @downloadeEmit="handlerDowloand" ref="childFirstComponentRef"/>
          </div>
        </div>
        
      </div>


      <div class="col-xl-6 col-lg-6 col-md-12 mb-2" v-if="active.chart5">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <font-awesome-icon icon="rotate-left" class="rotate" @click="rotate('chart5', false)" />
            <p>{{ $t('Charts.head.leftRight_5_2') }}</p>
            
            <div class="dropdown">
              <button class="btn  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="bars" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Print Chart</a></li>
                <li><a class="dropdown-item" href="#">Download PNG image </a></li>
                <li><a class="dropdown-item" href="#">Download JPEG image </a></li>
                <li><a class="dropdown-item" href="#">Download PDF document </a></li>
                <li><a class="dropdown-item" href="#">Download SVG vector image </a></li>
              </ul>
            </div>
  
          </div>
          <div class="card-body">
            <chartRight5 class="size"/>
          </div>
        </div>
        
      </div>


      
</template>
<script>
import chart5 from '../Chart_5.vue';
import chartRight5 from '../Chart_5_right.vue';
import { ref } from 'vue';

export default {
  components: {
    chart5,
    chartRight5,
  },

  setup() {
    const active = ref({ chart2: false, chart3: false, chart4: false, chart5: false });

    const rotate = (keyName, direction) => {
      active.value[keyName] = direction;
    };

    const testData = ref({
      // Your test data here
    });

    const chartOptions = ref({
      // Your chart options here
    });

    const childFirstComponentRef = ref()
    const handlerDowloand = (item) =>{
      console.log('hendler', item);
        const downloadLink = document.createElement('a');
        downloadLink.href = item;
        downloadLink.download = 'chart.jpg';
        downloadLink.click();
    }
    const downloadChart = (format) => {
      // Implement your download logic here
      // handlerDowloand()
      if (childFirstComponentRef.value) {
        // Ensure the child component instance exists
        childFirstComponentRef.value.handlerDowloand();
      }
      console.log(`Downloading chart in ${format} format`);
    };

  

    return {
      testData,
      chartOptions,
      active,
      rotate,
      downloadChart,
      handlerDowloand,
      childFirstComponentRef
    };
  },
};
</script>


<style >
    
</style>