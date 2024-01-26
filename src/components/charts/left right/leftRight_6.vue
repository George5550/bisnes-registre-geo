<template >
    <div class="col-xl-6 col-lg-6 col-md-12 mb-2" >
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            
            <p>{{ $t('Charts.head.leftRight_6_1') }} (%)</p>
            
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
          <div class="card-body ">
            <chart6 class="size"/>
          </div>
        </div>
        
      </div>
      


      
</template>
<script>
import chart6 from '../Chart_6.vue';


import { ref } from 'vue';
export default {
    components: {
      chart6,
      
    
    },

    setup() {
      const active = ref({ chart6: false});
      
  
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