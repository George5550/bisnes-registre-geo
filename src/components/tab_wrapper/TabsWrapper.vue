<template>
  <div class="tabs">
    <ul class="tabs_header">
      <li
        v-html="text(title, customIndex, tabLink[index])"
        v-for="(title, index) in tabTitles"
        :key="index"
        :class="{ selected: index == selectedIndex }"
        @click="setter(title, index)"
      >
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from 'vue';

export default {
  props: ['title', 'link', 'customIndex'],
  emits:['emitTab'],
  setup(props, { slots, emit }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);
    const tabLink = ref(slots.default().map((tab) => tab.props.link));

    const selectedIndex = ref(0)

    const setter = (title, index = 0) => {
      emit('emitTab', index)
      selectedIndex.value = index == 3? 0:index;
      tabLink.value[index];
      
    }
    provide("selectedIndex", selectedIndex);

    return {
      selectedIndex,
      selectedTitle,
      tabTitles,
      tabLink,
      setter
    };
  },
  methods: {
    
    text(title, index, link) {
      return link
        ? "<a class='test' href='" + link + "' target='_blank'>" + title + "</a>"
        : "<div class='test tabs_header_padding'>" + title + "</div>";
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 


   .tabs_header{
    margin-bottom: 1%;
    list-style: none;
    padding: 0;
    display: flex;
    animation: fa-spin 1000ms ease;
   }
   .tabs_header li{
    width: 8%;
    margin-right:  1%;
    border-radius: 5px;
    text-align: center;
   text-align: center;
    background: #0080BE;
    color: white;
    cursor: pointer;
    transition: 0.5s ease-out;
   }
  
   .tabs_header li:not(.selected) >>> .test {
    color: white;
    
    
   }

   .tabs_header li >>> .test {
     padding: 10px 20px;
     display:block; 
     text-decoration: none;
   }
   

   .tabs_header_padding {
    padding: 10px 20px;
 
   }


   .tabs_header li.selected{
    background: #fafafa;
    color: #0080BE;
   }

   @-webkit-keyframes fa-spin {
    0% {
      -webkit-transform: rotateX(110deg);
              transform: rotateX(110deg);
    }

  }
  
  @keyframes fa-spin {
    0% {
      -webkit-transform: rotateX(110deg);
              transform: rotateX(110deg);
    }

  }
  @media (min-width: 290px) {

   
    .tabs_header li{
      width: 24%;
      height: 10%;
   
     }
     .tabs_header li:not(.selected) >>> .test {
      height: 50px;
     }
  
  }
   @media (min-width: 390px) {

   
    .tabs_header li{
      width: 26%;
      height: 10%;
   
     }

     .tabs_header li:not(.selected) >>> .test {
      height: 50px;
     }
  
  }
  @media (min-width: 576px) {

 
    .tabs_header li{
      width: 40%;
      height: 10%;
   
     }

     .tabs_header li:not(.selected) >>> .test {
      height: 50px;
     }
  }
  
  
  @media (min-width: 768px) { 


    .tabs_header li{
      width: 40%;
   
     }

     .tabs_header li:not(.selected) >>> .test {
      height: 10%;
     }
  }
  
  
  @media (min-width: 992px) { 

    .tabs {
      max-width: 70%;
      margin: 0 auto;
     }
    .tabs_header li{
      width: 25%;
   
     }

     .tabs_header li:not(.selected) >>> .test {
      height: 10%;
     }
  }
  
  
  @media (min-width: 1200px) { 

    .tabs {
      max-width: 70%;
      margin: 0 auto;
     }
    .tabs_header li{
      width: 20%;
   
     }

     .tabs_header li:not(.selected) >>> .test {
      height: 10%;
     }
  }
  
  
  @media (min-width: 1400px) { 

    .tabs {
      max-width: 70%;
      margin: 0 auto;
     }
  
  .tabs_header li{
   width: 15%;

  }

  .tabs_header li:not(.selected) >>> .test {
    height: 10%;
   }


  }
  
  </style>