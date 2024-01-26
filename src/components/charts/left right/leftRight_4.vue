<template lang="">
    <div class="col-xl-6 col-lg-6 col-md-12 mb-2" v-if="!active.chart4" >
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <font-awesome-icon icon="rotate-left" class="rotate" @click="rotate('chart4', true)" />
            <p>{{ $t('Charts.head.leftRight_4_1') }}</p>
  
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
            <chart4 class="size"/>
          </div>
        </div>
      </div>
  
  
  
      <div class="col-xl-6 col-lg-6 col-md-12 mb-2" v-if="active.chart4" >
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <font-awesome-icon icon="rotate-left" class="rotate" @click="rotate('chart4', false)" />
            <p>{{ $t('Charts.head.leftRight_4_2') }}</p>
  
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
            <chartRight4 class="size"/>
          </div>
        </div>
      </div>
</template>
<script>
import chart4 from '../Chart_4.vue';
  import chartRight4 from '../Chart_4_right.vue';
  import { ref } from 'vue';
export default {
    components:{
        chart4,
      chartRight4
    },

    setup() {
      const active = ref({chart2: false, chart4: false});
      
  
      const rotate = (keyName, direction) => {
        active.value[keyName] = direction;
      };
      
  
      return {
        active,
        rotate
      };
    }
}
</script>
<style >
    
</style>