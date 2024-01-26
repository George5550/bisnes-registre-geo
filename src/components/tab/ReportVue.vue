<template lang="">
 
 <div class="report-section">

    <a v-for="(item, index) in 10" :key="index"  @click.prevent="report(item)" class="report">
        <div>
            {{$t(`report.div_${item }`)}}
        </div>
    </a>
      
    <!-- <router-link to="/report" class="report">
        <div>
            {{$t('report.div_2')}}
        </div>
    </router-link>

    <router-link to="/report" class="report">
        <div>
            {{$t('report.div_3')}}
        </div>
    </router-link>
        
    <router-link to="/report" class="report">
        <div>
            {{$t('report.div_4')}}
        </div>
    </router-link>

    <router-link to="/report" class="report">
        <div>
            {{$t('report.div_5')}}
        </div>
    </router-link>
        
    <router-link to="/report" class="report">
        <div>
            {{$t('report.div_6')}}
        </div>
    </router-link>

    <router-link to="/report" class="report">
        <div>
            {{$t('report.div_7')}}
        </div>
    </router-link>
    <router-link to="/report" class="report">
        <div>
            {{$t('report.div_8')}}
        </div>
    </router-link>
    <router-link to="/report" class="report">
        <div>
            {{$t('report.div_9')}}
        </div>
    </router-link>
    <router-link to="/report" class="report">
        <div>
            {{$t('report.div_10')}}
        </div>
    </router-link> -->
 
 </div>

</template>
<script>
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
    setup() {
         const router = useRouter();
        const report = async (item) =>{
            let mapId = {
                1: 30,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 8,
                7: 11,
                8: 9,
                9: 9,

            }
             console.log('item', item);
             const apiUrl = "http://localhost:3000/report";

                try {
                    const routerName = item < 6 ? "Report" : "Report2"
                    const routerPath = item < 6 ? "/report" : "/report2"
                    console.log('mapId[item]',mapId[item]);
                    const response = await axios.get(apiUrl, { params: { searchParam: mapId[item] } });
                    console.log('response.data', response.data);
                    let data = makeData(item, response.data);

                    if (data) {
                        console.log('Response Data:', data);
                        router.push({ path: routerPath, name: routerName,   query: { searchData: encodeURIComponent(JSON.stringify(data)), index:JSON.stringify(item) } });
                    }
                } catch (error) {
                    console.error('Axios Error:', error);
                }
        };

        const makeData = (id, data) => {
            console.log(data);
            // let newObj = {
            //     id:'',
            //     name: '',
            //     register:'',
            //     pct: '',
            //     active:'',
            //     pct_act: '',

            // };



            for (let i= 0; i < data.length; i++) {
                let newObj = {};
                if (id == 1) {
                    newObj = {
                        id: data[i].Activity_Code,
                        name_ka: data[i].Activity_Name_ka,
                        name_en: data[i].Activity_Name_en,
                        register:data[i].Registered_Qty,
                        pct: data[i].pct.toFixed(1),
                        active: data[i].Active_Qty,
                        pct_act: data[i].pct_act.toFixed(1),

                    };
                    
                }

                if (id == 2) {
                    newObj = {
                        id: data[i].ID,
                        name_ka: data[i].Legal_Form_ka,
                        name_en: data[i].Legal_Form_ka,
                        register:data[i].Registered_Qty,
                        // pct: data[i].pct.toFixed(1),
                        active: data[i].Active_Qty,
                        // pct_act: data[i].pct_act.toFixed(1),

                    };
                    
                }

                if (id == 3) {
                    newObj = {
                        id: data[i].ID,
                        name_ka: data[i].Ownership_Type_ka,
                        name_en: data[i].Ownership_Type_en,
                        register:data[i].Registered_Qty,
                        // pct: data[i].pct.toFixed(1),
                        active: data[i].Active_Qty,
                        // pct_act: data[i].pct_act.toFixed(1),

                    };
                    
                }

                if (id == 4) {
                    newObj = {
                        id: data[i].Location_Code,
                        name_ka: data[i].Location_Name_ka,
                        name_en: data[i].Location_Name_en,
                        register:data[i].Registered_Qty,
                        // pct: data[i].pct.toFixed(1),
                        active: data[i].Active_Qty,
                        // pct_act: data[i].pct_act.toFixed(1),

                    };
                    
                }

                if (id == 5) {
                    newObj = {
                        id: data[i].Location_Code,
                        name_ka: data[i].Location_Name_ka,
                        name_en: data[i].Location_Name_en,
                        register:data[i].Registered_Qty,
                        // pct: data[i].pct.toFixed(1),
                        active: data[i].Active_Qty,
                        // pct_act: data[i].pct_act.toFixed(1),

                    };
                    
                }

                if (id == 6) {
                    const { ID, Activity_Code: id, Activity_Name_ka, Activity_Name_en, ...allyears  } = data[i]
                    newObj = {
                        ID,
                        id: id,
                        name_ka: Activity_Name_ka,
                        name_en: Activity_Name_en,
                        ...allyears

                    };
                    
                }

                if (id == 7) {
                   
                    const { ID:id, Legal_Form_ka, Legal_Form_en, Abbreviation_en, Abbreviation_ka, Total, ...allyears  } = data[i]
                    console.log(Abbreviation_en, Abbreviation_ka, Total,);
                    newObj = {
                        
                        id: id,
                        name_ka: Legal_Form_ka,
                        name_en: Legal_Form_en,
                        ...allyears,

                    };
                    
                }


                if (id == 8) {
                    const { Activity_Code, Activity_Name_ka, Activity_Name_en, ...allyears  } = data[i]
                    newObj = {
                        
                        id: Activity_Code,
                        name_ka: Activity_Name_ka,
                        name_en: Activity_Name_en,
                        ...allyears

                    };
                    
                }

                if (id == 9) {
                    const { Activity_Code, Activity_Name_ka, Activity_Name_en, ...allyears  } = data[i]
                    newObj = {
                        
                        id: Activity_Code,
                        name_ka: Activity_Name_ka,
                        name_en: Activity_Name_en,
                        ...allyears

                    };
                    
                }

              
                    data[i] = newObj
                    
                }
            console.log('newObj', data);
            return data
        }

        return{
            report
        } 
    }

}
</script>
<style >
.report-section{
    width: 100%;
  
}
.report-section div{
    padding: 10px 12px;
    transition: 0.2s;
    cursor: pointer;
    font-size: 17px;
   
}
.report-section div:hover{
    background: #0080BE ;
    color: #fff;
    border-radius: 4px;
}

.report-section .report:hover{
    color: #fff;
}
.report{
    text-decoration: none;
    color: black;
}





</style>