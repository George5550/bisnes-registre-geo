<template>

    <div class="container-fluid">
      <div >
        <h1 > {{$t('footer.h1_1')}}</h1>
        <h1>{{$t('footer.h1_2')}}</h1>
        <h1><a href="https://www.geostat.ge/ka/page/monacemta-gamoyenebis-pirobebi">{{$t('footer.a')}}</a></h1>
     </div>
     <div >
      <h1>{{$t('footer.h1_3')}} br@geostat.ge</h1>
      <h1>{{$t('footer.h1_4')}} (+995 032) 2 36-72-10 ( 214, 218, 219)</h1>
   </div>
  </div>
  </template>
  
  <script>
  export default {
       name: 'footerVue'
    }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container-fluid{
      width: 100%;
      background: #fdfdfd;
      display: flex;
      justify-content: center;
      position: absolute;
      gap: 5%;
      padding: 2% 0;
      
     }
     .container-fluid div h1{
      display: block;
      padding: 2px 0;
      font-size: 18px;
     }

  </style>