<template>
    <div class="tab-content" v-show="customIndex == selectedIndex">
      <slot/>
    </div>
</template>

  
  <script>
  import { inject} from 'vue'
  export default {
       props: ['customIndex'],
       setup() {
         const selectedIndex = inject("selectedIndex")

         return {
          selectedIndex
         }
       }
    }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
       
  .tab-content{
    width: 100%;
    padding: 2% 2%;
    margin-bottom: 50px;
    border-radius: 5px;
    background-color: #fafafa;
    border: solid #0080BE 1px;
    animation: fa-spin 1000ms ease;
    
  }
  @-webkit-keyframes fa-spin {
    0% {
      -webkit-transform: rotateX(110deg);
              transform: rotateX(110deg);
    }

  }
  
  @keyframes fa-spin {
    0% {
      -webkit-transform: rotateX(110deg);
              transform: rotateX(110deg);
    }

  }
  </style>