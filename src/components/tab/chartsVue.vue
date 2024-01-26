<template >
<!-- <div> -->
  <div class="row ">

<leftRight1/>
<leftRight2/>
<leftRight3/>
<leftRight4/>
<leftRight5/>
<leftRight6/>
<!-- <leftRight4/>  -->

    <!--end div--->
    </div>
  </template>
  
  <script>
   import leftRight1 from '../charts/left right/leftRight_1.vue';
   import leftRight2 from '../charts/left right/leftRight_2.vue';
   import leftRight3 from '../charts/left right/leftRight_3.vue';
   import leftRight4 from '../charts/left right/leftRight_4.vue';
   import leftRight5 from '../charts/left right/leftRight_5.vue';
   import leftRight6 from '../charts/left right/leftRight_6.vue';
 
  
  import { ref } from 'vue';
  
  export default {
    components: {
      leftRight1,
      leftRight2,
      leftRight3,
      leftRight4,
      leftRight5,
      leftRight6,
      // leftRight4
     
     
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

    
  };
  </script>
<style >
    .size{
      min-height: 500px;
      animation: fa-spin 1000ms ease;
    }
    .card-header p{
    
      height: 60PX;
      margin: auto;
    }

    @-webkit-keyframes fa-spin {
      0% {
        -webkit-transform: rotateY(110deg);
                transform: rotateY(110deg);
      }
  
    }
    
    @keyframes fa-spin {
      0% {
        -webkit-transform: rotateY(110deg);
                transform: rotateY(110deg);
      }
  
    }

    .rotate{
      cursor: pointer;
      font-size: 18px;
    }
</style>