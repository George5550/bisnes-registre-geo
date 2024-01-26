<template>
  <div class="">
      <TabWrapper @emitTab="handlerTab" :key="lang">
      
          <Tab :title="$t('TabWrapper.tab1')"  customIndex="0" > <MainForm/></Tab>
          <Tab :title="$t('TabWrapper.tab2')"  customIndex="1"> <Report/></Tab>
          <Tab :title="$t('TabWrapper.tab3')"  customIndex="2" ><chartVue v-if="activChart"/> </Tab>
          <Tab :title="$t('TabWrapper.tab4')"  customIndex="3" link="https://gis.geostat.ge/geomap/index.html?open#8/42.334/43.380" > </Tab>
         
        </TabWrapper>

  </div>

</template>
<script>
import Tab from '../components/tab_wrapper/TabItemVue.vue'
import TabWrapper from '../components/tab_wrapper/TabsWrapper.vue'
import MainForm from '../components/tab/MainForm.vue'
import Report from '../components/tab/ReportVue.vue'
import chartVue from '../components/tab/chartsVue.vue'
import {ref, getCurrentInstance, computed} from 'vue';
export default {
  components: {
  Tab,
  TabWrapper,
  MainForm,
  Report,
  chartVue,

  
},
setup() {
  const { proxy } = getCurrentInstance();
  const lang = computed(() => {
   return  proxy.$i18n.locale
  })
  const activChart = ref(false);

  const handlerTab = (item) =>{
    activChart.value = item == 2 ? true: false
  }
  return {
    activChart,
    handlerTab,
    lang
  }
}
}
</script>
<style >

</style>