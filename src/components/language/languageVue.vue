<template >
    <div>
        <img v-if="active == 'ka'" src="../../assets/Image/georgia.png" @click="changeLang('en')">
        <img v-if="active == 'en'" src="../../assets/Image//georgia.png" @click="changeLang('ka')">
        <!-- <img v-if="active == 'KA' " src="./Image/georgia.png"> -->
    </div>
</template>
<script>
import {ref, getCurrentInstance, onMounted  } from 'vue';
export default {
    props:{

    },
    setup() {
        const active = ref('ka')
        const { proxy } = getCurrentInstance();
        const changeLang = (item) =>{
            active.value = item;
            proxy.$i18n.locale = item
            // console.log('this.$i18n.locale',proxy.$i18n.locale);
            
        }
        onMounted(() => {
            active.value = proxy.$i18n.locale;
        });

        return{
            active,
            changeLang
        }
    }
    
}
</script>
<style scope>
 img{
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
</style>