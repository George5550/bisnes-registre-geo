<template >

    <div class="col-xl-6 col-lg-6 col-md-12 mb-2" v-if="!active.chart2">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <font-awesome-icon icon="rotate-left" class="rotate" @click="rotate('chart2', true)" />
            <p>{{ $t('Charts.head.leftRight_2_1') }}</p>
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
            <chart2 class="size"/>
          </div>
        </div>
      </div>
  
  
      <div class="col-xl-6 col-lg-6 col-md-12 mb-2"  v-if="active.chart2" >
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <font-awesome-icon icon="rotate-left" class="rotate" @click="rotate('chart2', false)" />
            <p>{{ $t('Charts.head.leftRight_2_2') }}</p>
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
            <chartRight2 class="size"/>
          </div>
        </div>
      </div>
</template>
<script>
 import chart2 from '../Chart_2.vue';
 import chartRight2 from '../Chart_2_right.vue';
 import { ref } from 'vue';
export default {
    components: {
      chart2,
      chartRight2
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