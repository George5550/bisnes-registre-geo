import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { allCla } from '@/api/cla'
import _ from 'lodash';


export const useClaStore = defineStore('cla', () => {
    const cla = ref([])
    const fetchCla =  async() =>{
      const { data } = await allCla();
      // const { activitiesNACE2, legal_forms, locations, ownership_types, size } = data
     
      cla.value = data;
    }

    const legalForms = computed(() => {
      for (let a = 0; a < cla.value.legal_forms.length; a++) {
        cla.value.legal_forms[a].legal_name_ka = (cla.value.legal_forms[a].ID < 5 || (cla.value.legal_forms[a].ID == 30 ||cla.value.legal_forms[a].ID == 98 || cla.value.legal_forms[a].ID == 99))?`${cla.value.legal_forms[a].Abbreviation_ka} - ${cla.value.legal_forms[a].Legal_Form_ka}`: `${cla.value.legal_forms[a].Legal_Form_ka}`;
        cla.value.legal_forms[a].legal_name_en = (cla.value.legal_forms[a].ID < 5 || (cla.value.legal_forms[a].ID == 30 ||cla.value.legal_forms[a].ID == 98 || cla.value.legal_forms[a].ID == 99))?`${cla.value.legal_forms[a].Abbreviation_en} - ${cla.value.legal_forms[a].Legal_Form_en}`:`${cla.value.legal_forms[a].Legal_Form_en}`;
      }
      return cla.value.legal_forms
    });

    const activities = computed(() => {
      for (let i = 0; i < cla.value.activitiesNACE2.length; i++) {
        cla.value.activitiesNACE2[i].name_ka =  `${cla.value.activitiesNACE2[i].Activity_Code} - ${cla.value.activitiesNACE2[i].Activity_Name_ka}`
        cla.value.activitiesNACE2[i].name_en =  `${cla.value.activitiesNACE2[i].Activity_Code} - ${cla.value.activitiesNACE2[i].Activity_Name_en}`
            // Access the element to update in each object  
      }
      return cla.value.activitiesNACE2
    });

    const region = computed(() => {
      let item = _.filter(cla.value.locations, function(o){ return o.Level == 2 })
      item = _.sortBy(item, [function(o) { return o.Location_Code; }]);
      for (let r = 0; r < item.length; r++) {
        item[r].regions_name_ka = `${item[r].Location_Code} - ${item[r].Location_Name_ka}`;
        item[r].regions_name_en = `${item[r].Location_Code} - ${item[r].Location_Name_en}`;
        // Access the element to update in each object  
      }
      return item
    });

    const municipal = computed(() => {
      let item = _.filter(cla.value.locations, function(o){ return o.Level == 3 })
      item = _.sortBy(item, [function(o) { return o.Location_Code; }]);
      for (let i = 0; i < item.length; i++) {
        item[i].municipals_name_ka = `${item[i].Location_Code} - ${item[i].Location_Name_ka}`;
        item[i].municipals_name_en = `${item[i].Location_Code} - ${item[i].Location_Name_en}`;
        // Access the element to update in each object  
      }
      return item
    });
    return{  fetchCla, cla, legalForms, activities, region, municipal }
   
})
