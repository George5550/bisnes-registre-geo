<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from './components/inc/Header.vue'
import Footer from './components/inc/Footer.vue'
// import {ref, getCurrentInstance, computed} from 'vue';
//   const { proxy } = getCurrentInstance();
//     const lang = computed(() => {
//      return  proxy.$i18n.locale
//     })
//     const activChart = ref(false);

//     const handlerTab = (item) =>{
//       activChart.value = item == 2 ? true: false
//     }
</script>

<template>
  <div class="app ">
    <Header />
      <router-view />
    <Footer />
  </div>

  
</template>

<style scoped>

* {
  margin: 0;
  padding: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}



.app {
  width: 100%;
 
  overflow-y: auto;
  background-image: url(./assets/Image/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  
  
}


@media (min-width: 390px) {
  body {
    background-repeat: no-repeat;
    background-size: center;
  }
}
@media (min-width: 576px) {
  body {
    background-repeat: no-repeat;
    background-size: center;
  }
}


@media (min-width: 768px) { 
  body {
    background-repeat: no-repeat;
    background-size: center;
  }
}


@media (min-width: 992px) { 
  body {
    background-repeat: no-repeat;
    background-size: center;
  }
}


@media (min-width: 1200px) { 
  body {
    background-repeat: no-repeat;
    background-size: center;
  }
}


@media (min-width: 1400px) { 
  body {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}

</style>
