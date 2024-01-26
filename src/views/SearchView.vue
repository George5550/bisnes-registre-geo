<template >
    <div class="row ">

        <div class="col-xl-12 col-lg-12 col-md-12 mb-2">
            <div class="card">
              <div class="card-header d-flex justify-content-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <router-link to="/" class="btn btn-primary">
                        <font-awesome-icon icon="house" /> {{ $t('searchTable.button1') }}
                    </router-link>
                    <button type="button" class="btn btn-primary ">{{ $t('searchTable.button2') }}</button>
                    <button type="button" class="btn btn-primary"><font-awesome-icon icon="file-arrow-down" /></button>
                    <button type="button" class="btn btn-primary"><font-awesome-icon icon="print" /></button>
                  </div>
                <h4>{{ $t('searchTable.h4') }}</h4>
              </div>
              <div class="card-body text-center">
                <SherchTable v-if="searchData"  :header="header" :items="searchData" />
              </div>
              <div class="card-footer">
                <paginet/>
              </div>
             
            </div>
            
          </div>
       
    </div>
</template>
<script>
import paginet from '../components/search/paginetVue.vue'
import SherchTable from '../components/search/tableVue.vue'
import {  ref, onMounted,} from 'vue';
import { useRoute } from 'vue-router';
export default {
    components:{
        paginet,
        SherchTable
    },
    props:{
       item: Object
    },
    setup(props) {
      console.log(props.item, 'props');
      const route = useRoute();
    const searchData = ref(null);

    onMounted(() => {
      // Access the searchData parameter from the URL
      searchData.value = route.query.searchData;

      // If searchData is an object, you can convert it to JSON using JSON.stringify
      // If searchData is a string, you can parse it as JSON using JSON.parse
      try {
        searchData.value = JSON.parse( decodeURIComponent(searchData.value));
      } catch (error) {
        // Handle parsing error
        console.error('Error parsing searchData:', error);
      }

      // Now you can use the searchData object in your component
      console.log('searchData:', searchData.value);
    });

        const header = ref([
            "searchTable.head1",
            "searchTable.head2",
            "searchTable.head3",
            "searchTable.head4",
            "searchTable.head5",
            "searchTable.head6",
            "searchTable.head7",
            "searchTable.head8",
            "searchTable.head9",
            "searchTable.head10",
            "searchTable.head11",
            "searchTable.head12",
            "searchTable.head13",
            "searchTable.head14",
            "searchTable.head15",
            "searchTable.head16",
            "searchTable.head17",


        ]);

        return{
            header,
            searchData
        }
    }
}
</script>
<style scoped>
  .card-header{
    gap: 3%;
  }
.table{
 cursor: pointer;
}
.table:hover{
 text-decoration: underline;
}
</style>