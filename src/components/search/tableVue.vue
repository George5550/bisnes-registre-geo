<template >
  <div class="table-responsive position-relative">
    <table class="table table-hover align-middle table-bordered ">
      <thead class="table-primary sticky-top align-top"> 
        <tr>
          <th class="hed" scope="col" v-for="(item, index) in header" :key="index">{{$t(item)}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-start" v-for="(item, index) in items.data" :key="index">
          <td class="th" scope="row">{{ item.Legal_Code }}</td>
          <td>{{ item.Personal_no}}</td>
          <td>{{ item.Abbreviation_ka}} </td>
          <td>{{ item.Full_Name}}</td>
          <td>{{ item.IlLocationNameKA ?  `${item.IlParentLocationNameKA}; ${item.IlLocationNameKA}` : '' }} </td>
          <td>{{ item.IAddress}}</td> <!-- იურიდიული მის. -->
          <td>{{  item.FLocationNameKA ? ` ${item.FParentLocationNameKA}; ${item.FLocationNameKA} ` : '' }} </td> <!-- რეგიონი -->
          <td>{{ item.FAddress}}</td> <!-- ფაქტობრივი მის. -->
          <td> {{ item.Activity_Code}}</td>
          <td>{{ item.Activity_Name_ka}}</td>
          <td>{{ item.Head}}</td>
          <td>{{ item.mob }}</td>
          <td>{{ item.Partner}}</td>
          <td>{{ item.Email}}</td>
          <td>{{ item.Ownership_Type_ka}}</td>
          <td>{{item.ISActive ? 'აქტიური'  : 'არა აქტიური'}}</td>
          <td>{{ item.zoma_ka}}</td>
          
        </tr>
      
        

      
      </tbody>
    </table>
  </div>
   
</template>
<script>
export default {
        props:{
            header: Array,
            items:Object
        },
        setup(props) {
            console.log('table', props.items);
        }
}
</script>
<style >
tr{
  font-size: 17px;
  
}
.th{
  text-decoration: underline;
  cursor: pointer;
}
.th:hover{
  color: blue;
}

</style>