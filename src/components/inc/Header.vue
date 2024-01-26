<template>
<div class="row">
  <div class="card-header d-flex justify-content-center ">
    <router-link to="/" class="router">
      <img class="img" v-if="lang == 'ka'" src="../../assets/Image/logo-saqstat-ka.png">
      <img class="img" v-if="lang == 'en'" src="../../assets/Image/logo_en.png" >
     </router-link>

       <div class="title">
        <h1 >{{$t('header.h1')}}</h1>
        <h2>{{$t('header.h2')}}</h2>
      </div>

    

      <div class="container float-right">
        
       <div class="image-box">
        {{$t('header.div')}}
         <div class="div">
          <img class="facebook" src="../../assets/Image/facebook-icon.png" alt="facebook">
          <Language/>
          <Modal/>
         </div>
       </div>
      </div>
  </div>
</div>


</template>

<script>
import {getCurrentInstance,computed} from 'vue'
import Language from '../language/languageVue.vue'
import Modal from '../modal/modalVue.vue'
export default {
  name: 'HeaderVue',
  components:{
    Language,
    Modal
  },
  props: {
    msg: String
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const lang = computed(() => {
     return  proxy.$i18n.locale
    })
    return {lang}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row{
  margin: 1% 0 3% 0;
}

.router{
  width: 10px;
  position: absolute;

  left: 5%;
}
.div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
}

 .img{
  width: 120px;
  height: 100px;
 
}
.facebook{
  width: 25px;
  margin: 0 3%;
}
.container{
  width: 25%;
  position: absolute;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
 
}

.image-box{
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}


.title{
  width: 30%;
  text-align: center;
}
 .title h1{
    font-size: 22px;
}
 .title h2{
  font-size: 20px;
  color: #0080be;
}


@media (min-width: 376px) { 
    .title h1,h2{
      font-size: 16px;
    }
    .title h2{
      font-size: 16px;
                                                
    }

    .image-box{
      display: block;
      text-align: center;
    }
    .img{
      width: 90px;
      height: 70px;
    }
 }

@media (min-width: 586px) { 
      .title h1{
        font-size: 16px;
    }
    .title h2{
      font-size: 16px;
      color: #0080be;
    }

    .image-box{
      display: block;
      text-align: center;
    }
    .img{
      width: 90px;
      height: 70px;
    }
    .card-header{
      display: block;
    }
 }


@media (min-width: 768px) {  
    .title h1{
    font-size: 18px;
    }
    .title h2{
      font-size: 18px;
      color: #0080be;
    }

    .image-box{
      display: block;
      text-align: center;
    }

    .img{
      width: 100px;
      height: 80px;
    }
    .card-header{
      display: flex;
    }
 }


@media (min-width: 992px) { 
      .title h1{
        font-size: 20px;
    }
    .title h2{
      font-size: 20px;
      color: #0080be;
    }

    .image-box{
      display: block;
      text-align: center;
    }

    .img{
      width: 110px;
      height: 90px;
    }
    .card-header{
      display: flex;
    }
 }


@media (min-width: 1200px) { 
      .title h1{
        font-size: 22px;
    }
    .title h2{
      font-size: 20px;
      color: #0080be;
    }

    .image-box{
      display: flex;
    }

    .img{
      width: 120px;
      height: 100px;
    }
    .card-header{
      display: flex;
    }
 }


@media (min-width: 1400px) { 
      .title h1{
        font-size: 22px;
    }
    .title h2{
      font-size: 20px;
      color: #0080be;
    }

    .image-box{
      display: flex;
    }

    .img{
      width: 120px;
      height: 100px;
    }
    .card-header{
      display: flex;
    }
 }

</style>
