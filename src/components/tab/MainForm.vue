<template lang="">
 
<div>
  <form @submit.prevent="validateAndEmit()">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">{{ $t('mainForm.title1') }}</h1>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12">
        
        <div class="input-group mb-3">
           <input class="form-control" type="text" :placeholder="$t('mainForm.placeholder.input1')" v-model='m.legal_code'>
        </div>
     
      </div>

      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="input-group mb-3">
           <input class="form-control" type="text" :placeholder="$t('mainForm.placeholder.input2')" v-model='m.name'>
        </div>
     
      </div>

      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <Multiselect
          v-model='m.legal_form_ids'
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :options="legal_forms"
          :label="`legal_name_${lang}`"
          :trackBy="`legal_name_${lang}`"
          valueProp="id"
          :placeholder="$t('mainForm.placeholder.select1')"
          class="custom"
        />
        </div>
     
      </div>

      <div class="col-xl-3 col-lg-3 col-md-12">
        <div class="input-group mb-3">
          <input class="form-control" type="text" :placeholder="$t('mainForm.placeholder.input3')" v-model='m.head'>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-md-12">
        <div class="input-group mb-3">
          <input class="form-control" type="text" :placeholder="$t('mainForm.placeholder.input4')" v-model='m.partner'>
        </div>
      </div>

      <div class="col-6">
        <h1 class="text-center">{{ $t('mainForm.title2') }}</h1>
      </div>
      <div class="col-6">
        <h1 class="text-center">{{ $t('mainForm.title3') }}</h1>
      </div>

      <div class="col-xl-2 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <Multiselect
          v-model='m.i_region_name_ids'
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :options="regions"
          :label="`regions_name_${lang}`"
          :trackBy="`regions_name_${lang}`"
          :placeholder="$t('mainForm.placeholder.select2')"
          valueProp="id"
          class="custom"
        />
        </div>
      </div>
      

      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <Multiselect
          v-model='m.i_municipal_name_ids'
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :label="`municipals_name_${lang}`"
          :trackBy="`municipals_name_${lang}`"
          :options="municipals"
          :placeholder="$t('mainForm.placeholder.select3')"
          valueProp="id"
          class="custom"
        />
        </div>
      </div>

  


      <div class="col-xl-2 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <Multiselect
          v-model='m.f_region_name_ids'
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :options="regions"
          :label="`regions_name_${lang}`"
          :trackBy="`regions_name_${lang}`"
          :placeholder="$t('mainForm.placeholder.select2')"
          valueProp="id"
          class="custom"
        />
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <Multiselect
          v-model='m.f_municipal_name_ids'
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :options="municipals"
          :label="`municipals_name_${lang}`"
          :trackBy="`municipals_name_${lang}`"
          :placeholder="$t('mainForm.placeholder.select3')"
          valueProp="id"
          class="custom"
        />
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <input class="form-control" type="text" :placeholder="$t('mainForm.placeholder.input5')" v-model='m.i_address'>
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <input id="custom" class="form-control " type="text" :placeholder="$t('mainForm.placeholder.input5')" v-model='m.f_address'>
        </div>
      </div>


      <div class="col-12">
        <h1 class="text-center">{{ $t('mainForm.title4') }}</h1>
      </div>



      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="input-group mb-3">
          <Multiselect
          v-model='m.activitiesNACE2_ids'
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :label="`name_${lang}`"
          :trackBy="`name_${lang}`"
          :options="activitiesNACE2"
          :placeholder="$t('mainForm.placeholder.select4')"
          valueProp="id"
          class="custom"
        />
        </div>
      </div>

      <div class="col-6">
        <h1 class="text-center">{{ $t('mainForm.title5') }}</h1>
      </div>

      <div class="col-6">
        <h1 class="text-center">{{ $t('mainForm.title6') }}</h1>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <Multiselect
          v-model='m.ownership_type_ids'
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :options="ownershipTypes"
          :label="`Ownership_Type_${lang}`"
          :trackBy="`Ownership_Type_${lang}`"
          :placeholder="$t('mainForm.placeholder.select5')"
          valueProp="id"
          class="custom"
        />
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="input-group mb-3">
          <Multiselect
          v-model='m.zoma'
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :label="`zoma_${lang}`"
          :trackBy="`zoma_${lang}`"
          :options="size"
          :placeholder="$t('mainForm.placeholder.select6')"
          valueProp="id"
          class="custom"
        />
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="form-check">
          <input v-model="m.ISActive" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            <p>{{ $t('mainForm.check.p') }} <span class="badge rounded-pill bg-danger"><font-awesome-icon icon="info" /></span></p>
            
          </label>
        </div>
      </div>

      <div class="col-12 text-center ">
        <!-- <router-link to="/search" @click.prevent="search(m)"> 
          <button  type="button" class="btn btn-outline-primary"><font-awesome-icon icon="magnifying-glass" /> {{ $t('mainForm.button.button1') }} </button> -->
         <router-link to="/search">
          <button @click.prevent="search(m)" :disabled="isSearching" type="button" class="btn btn-outline-primary"><font-awesome-icon icon="magnifying-glass" />  search       <!-- {{ $t('mainForm.button.button1') }}  --> </button>
         </router-link>
        <button @click="stopSearch" :disabled="!isSearching"  type="button" class="btn btn-outline-primary"><font-awesome-icon icon="ban" />    Stop searching     <!-- {{ $t('mainForm.button.button2') }}  --></button>
        <button @click="cancel"  type="button" class="btn btn-outline-danger"><font-awesome-icon icon="x" /> {{ $t('mainForm.button.button3') }}</button>
      </div>

    </div>


  </form>
</div>

</template>
<script>
import Multiselect from '@vueform/multiselect'
import { ref, onMounted, getCurrentInstance, computed } from 'vue';
import axios from 'axios';
import _ from 'lodash';
import { useRouter } from 'vue-router';
export default {
  components: {
      Multiselect,
    },
    setup(){
      const { proxy } = getCurrentInstance();
      const lang = computed(() => {
        return  proxy.$i18n.locale
      })
      const m = ref({});
      let legal_forms = ref(null);
      let regions = ref(null);
      let municipals = ref(null);
      let ownershipTypes = ref(null);
      let size = ref(null);
      let activitiesNACE2 = ref(null);
      const isSearching = ref(false);
      const cancelTokenSource = ref(null);

      const router = useRouter();
      console.log('data', router.getRoutes());
      // const route = useRoute();
      const  fetchPosts = async() => {
        try {
          const response = await axios.get('http://localhost:3000/cla');
          // console.log('response', response);
          legal_forms.value = response.data.legal_forms;
        for (let a = 0; a < legal_forms.value.length; a++) {
            legal_forms.value[a].legal_name_ka = (legal_forms.value[a].id < 5 || legal_forms.value[a].id == 30 ||legal_forms.value[a].id == 98 || legal_forms.value[a].id == 99)?`${legal_forms.value[a].Abbreviation_ka} - ${legal_forms.value[a].Legal_Form_ka}`: `${legal_forms.value[a].Legal_Form_ka}`;
            legal_forms.value[a].legal_name_en = (legal_forms.value[a].id < 5 || legal_forms.value[a].id == 30 ||legal_forms.value[a].id == 98 || legal_forms.value[a].id == 99)?`${legal_forms.value[a].Abbreviation_en} - ${legal_forms.value[a].Legal_Form_en}`:`${legal_forms.value[a].Legal_Form_en}`;
            // Access the element to update in each object  
        }
     
          ownershipTypes.value = response.data.ownership_types
          size.value = response.data.size

          activitiesNACE2.value = response.data.activitiesNACE2
          for (let i = 0; i < activitiesNACE2.value.length; i++) {
            activitiesNACE2.value[i].name_ka =  `${activitiesNACE2.value[i].Activity_Code} - ${activitiesNACE2.value[i].Activity_Name_ka}`
            activitiesNACE2.value[i].name_en =  `${activitiesNACE2.value[i].Activity_Code} - ${activitiesNACE2.value[i].Activity_Name_en}`
                // Access the element to update in each object  
          }

          
          
          regions.value = _.filter(response.data.locations, function(o){ return o.level == 2 })
          regions.value = _.sortBy(regions.value, [function(o) { return o.Location_Code; }]);
          for (let r = 0; r < regions.value.length; r++) {
            regions.value[r].regions_name_ka = `${regions.value[r].Location_Code} - ${regions.value[r].Location_Name_ka}`;
            regions.value[r].regions_name_en = `${regions.value[r].Location_Code} - ${regions.value[r].Location_Name_en}`;
            // Access the element to update in each object  
        }






          municipals.value = _.filter(response.data.locations, function(o){ return o.level == 3 });
          municipals.value = _.sortBy(municipals.value, [function(o) { return o.Location_Code; }]);
          for (let m = 0; m < municipals.value.length; m++) {
            municipals.value[m].municipals_name_ka = `${municipals.value[m].Location_Code} - ${municipals.value[m].Location_Name_ka}`;
            municipals.value[m].municipals_name_en = `${municipals.value[m].Location_Code} - ${municipals.value[m].Location_Name_en}`;
            // Access the element to update in each object  
        }

          
        } catch (error) {
          console.error(error);
        }
      }   
      
    onMounted(() => {
      fetchPosts();
    });

   

        
    const search = async(i) => {

      
      let item = {...i}
      // console.log('item',item);
      if(Object.keys(item).length === 0){
        alert('აირჩიე პარამეტრი')
        return
      }
 
    
      for (let key in item) {
        // Check if the property value is an empty string
        if (item[key] == "") {
            // Delete the property with an empty string value
            delete item[key];
        }
      }
      console.log('item',item);
      customSearchFunction(item)
      
      function customSearchFunction(searchParams) {
      const addWhear = makeQuery(searchParams)
      const addJoinAndSelect = makeJoinAndSelect(searchParams)
      let select = `a.Stat_ID, a.Legal_Code, a.Personal_no, a.Legal_Form_ID, a.Full_Name, a.Ownership_Type_ID, a.ISActive, a.Zoma_ID, a.Reg_Date, a.Init_Reg_date`;
      const query = `
        SELECT ${select} ${addJoinAndSelect.select}
        FROM [dbo].[DocMain] as a
        ${addJoinAndSelect.join}
        WHERE ${addWhear}
        GROUP BY ${select} ${addJoinAndSelect.groupBy}
      `;
        console.log('query',query);
      }
      function makeQuery(searchParams) {
        
        
        let keysArray = Object.keys(searchParams);
        keysArray.sort()
       
        let allQuery = {
          legal_code: `a.Legal_Code = ${Number(searchParams.legal_code)}`,
          // name: ``
          // name: `a.Full_Name = (searchParams.name)`,
          name: `a.Full_Name LIKE N'%${searchParams.name}%'`,

          i_municipal_name_ids: searchParams.i_municipal_name_ids?`lo.id ${searchParams.i_municipal_name_ids.length == 1 ? `=`: `IN (`} ${searchParams.i_municipal_name_ids.map( (o) => o).join(', ')}${searchParams.i_municipal_name_ids.length == 1 ? ``: `)`}`:``,
          f_municipal_name_ids: searchParams.f_municipal_name_ids?`lo.id ${searchParams.f_municipal_name_ids.length == 1 ? `=`: `IN (`} ${searchParams.f_municipal_name_ids.map( (o) => o).join(', ')}${searchParams.f_municipal_name_ids.length == 1 ? ``: `)`}`:``,
      

         i_region_name_ids: searchParams. i_region_name_ids?`s.Location_ID ${searchParams.i_region_name_ids.length == 1 ? `=`: `IN (`} ${searchParams.i_region_name_ids.map( (o) => o).join(', ')}${searchParams.i_region_name_ids.length == 1 ? ``: `)`}`:``,
         f_region_name_ids: searchParams. f_region_name_ids?`s.Location_ID ${searchParams.f_region_name_ids.length == 1 ? `=`: `IN (`} ${searchParams.f_region_name_ids.map( (o) => o).join(', ')}${searchParams.f_region_name_ids.length == 1 ? ``: `)`}`:``,

          ISActive: `a.ISActive is not null`,

          legal_form_ids: searchParams.legal_form_ids?`a.Legal_Form_ID ${searchParams.legal_form_ids.length == 1 ? `=`: `IN ( `} ${searchParams.legal_form_ids.map( (o) => o).join(', ')}${searchParams.legal_form_ids.length == 1 ? ``: `)`}`:``,

          head: `b.Head like N'${searchParams.head}%'`,
          partner: `b.Partner like N'${searchParams.partner}%'`,
          ownership_type_ids: searchParams.ownership_type_ids?`a.Ownership_Type_ID ${searchParams.ownership_type_ids.length == 1 ? `=`: `IN ( `} ${searchParams.ownership_type_ids.map( (o) => o).join(', ')}${searchParams.ownership_type_ids.length == 1 ? ``: `)`}`:``,


          activitiesNACE2_ids: searchParams.activitiesNACE2_ids?`c.Activities_ID ${searchParams.activitiesNACE2_ids.length == 1 ? `=`: `IN (`} ${searchParams.activitiesNACE2_ids.map( (o) => o).join(', ')}${searchParams.activitiesNACE2_ids.length == 1 ? ``: `)`}`:``,

          zoma: searchParams.zoma?`a.Zoma_ID ${searchParams.zoma.length == 1 ? `=`: `IN (`} ${searchParams.zoma.map( (o) => o).join(', ')}${searchParams.zoma.length == 1 ? ``: `)`}`:``,

        }
        let query = '';
        if (keysArray.length > 1) {
          keysArray.forEach(( element, index) => {
            console.log('allQuery[element]',allQuery[element]);
            if (element != '') {
              query += `${allQuery[element]} ${index != keysArray.length - 1 ? 'and ' : ''}`;
            }
          });
        }else{
          keysArray.forEach(element => {
            if (element != '') {
              query = query + allQuery[element]
            }
          });
        }
        console.log('query 1', query);
        return query
      }

      function makeJoinAndSelect (searchParams){
        let keysArray = Object.keys(searchParams);
        keysArray.sort()
        let join = '';
        let select = '';
        let groupBy = '';
  

        join += `LEFT JOIN [dbo].[HeadInfo] as b ON a.[Stat_ID] = b.[Stat_ID]`;
        select += `, b.Head, b.mob, b.Email, b.Partner`;
        groupBy += `, b.Head, b.mob, b.Email, b.Partner`;
      
        join += `LEFT JOIN [dbo].[Economy_Activity] as c ON a.[Stat_ID] = c.[Stat_ID]
        LEFT JOIN [CL].[Activities_NACE2] as d ON c.[Activities_ID] = d.[ID]`;
        select += `, c.Activities_ID, d.Activity_Name_ka, d.Activity_Code`;
        groupBy += `, c.Activities_ID, d.Activity_Name_ka, d.Activity_Code`;

        join += `LEFT JOIN [dbo].[Size] as z ON a.[Zoma_ID] = z.[id]`;
        select += `,  z.zoma_ka`;
        groupBy += `, z.zoma_ka`;
      
        join += `LEFT JOIN [CL].[Ownership_Types] as o ON a.[Ownership_Type_ID] = o.[id]`;
        select += `,  o.Ownership_Type_ka`;
        groupBy += `, o.Ownership_Type_ka`;

        join += `LEFT JOIN [dbo].[Address] as s ON a.[Stat_ID] = s.[Stat_ID]
            LEFT JOIN [CL].[Locations] as lo ON s.[Location_ID] = lo.[ID]
            LEFT JOIN [CL].[Locations] as lo2 ON lo.[Parent_ID] = lo2.[ID]` ;
            select += `, MAX(CASE WHEN s.Type = 1 THEN s.Address END) AS IAddress,
            MAX(CASE WHEN s.Type = 2 THEN s.Address END) AS FAddress, MAX(CASE WHEN s.Type = 1 THEN lo.location_name_ka END) AS IlLocationNameKA,
            MAX(CASE WHEN s.Type = 2 THEN lo.location_name_ka END) AS FLocationNameKA,
            MAX(CASE WHEN s.Type = 1 THEN lo2.location_name_ka END) AS IlParentLocationNameKA,
            MAX(CASE WHEN s.Type = 2 THEN lo2.location_name_ka END) AS FParentLocationNameKA
        `;

          join += `LEFT JOIN [CL].[Legal_Forms] as L ON a.[Legal_Form_ID] = L.[id]`;
          select += `,  L.Abbreviation_ka`;
          groupBy += `, L.Abbreviation_ka`;

          // join += `LEFT JOIN [CL].[Activities_NACE2] as n ON a.[Stat_ID] = n.[ID]`;
          // select += `,  n.Activity_Name_ka`;
          // groupBy += `, n.Activity_Name_ka`;


          return {join, select, groupBy}
        }


      // console.log(item.select_1.map((o) => o).join(","));
        const apiUrl =  "http://localhost:3000/search";

        // Axios request with search parameter
        try {
          cancelTokenSource.value = axios.CancelToken.source();
          isSearching.value = true
          
          const response = await axios.get(apiUrl, { params: { searchParam: item }, cancelToken: cancelTokenSource.value.token  });
          let data = response.data;

          if (data) {
            console.log('Response Data:', data);

          // Assuming you have a route named 'search' defined in your Vue Router configuration
            router.push({ name: 'Search', query: { searchData: encodeURIComponent(JSON.stringify(data))  } });
          }
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message); // Log the cancel reason
          }
          console.error('Axios Error:', error);
          isSearching.value = false
        }finally{
          isSearching.value = false
        }
       
      
      // axios.get(apiUrl, { params: { searchParam: item } })
      //   .then(response => {
      //     // Handle the response
      //     router.push({
      //       name: 'search',
      //       params:{id: 1},
      //     });
      //     console.log('response.data',response.data);
      //   })
      //   .catch(error => {
      //     // Handle errors
      //     console.error(error);
      //   });
    }

    const stopSearch = () => {

      if (cancelTokenSource.value) {
        console.log(cancelTokenSource.value);
        cancelTokenSource.value.cancel('Search canceled by user');
      }

      // Set isSearching to false
      isSearching.value = false;
      // Add your stop searching logic here
    }
    const cancel = () => {
      location.reload();
    }
    

        const validateAndEmit = () =>{
          console.log(m.value);
        }
      return {
        m,
        value: null,
        legal_forms,
        regions,
        municipals,
        size,
        activitiesNACE2,
        ownershipTypes,
        validateAndEmit,
        lang,
        search,
        router,
        stopSearch,
        isSearching,
        cancel
      }
    },

}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="css">
.text-center{
  color: #333;
  font-size: 20px;
  padding: 2% 0;
}

p{
  color: #333;
  text-align: center;
}

.btn{
  margin: auto;
  font-size: 18px;
  margin: 0 3px;
}
.custom{
  --ms-tag-bg: #0080BE;
  --ms-ring-color: none;
  --ms-border-color-active: #0080BE;

}




</style>