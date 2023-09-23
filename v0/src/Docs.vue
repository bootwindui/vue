<template>
  <div :class="settings" >
       <div class="flex flex-wrap " >
        <div class="w-full lg:w-1/6 ">
          <left-menu class="hidden lg:block fixed sidebar w-2/3 lg:w-1/6 z-50 neu-push" />
          <div @click="$store.commit('toggleLeftMenu','')"  class="hidden w-full sidebar-bg-close bg-theme_secondary text-theme_primary opacity-50" >
         </div>
        </div>
        <div class="w-full lg:w-5/6">
          <top-menu class="lg:px-10 py-3 lg:fixed bg-theme_primary right-0 " />
             <router-view class="p-5 lg:p-10 lg:pt-20 min-h-screen bg-theme_primary" />
          <settings />
        </div>
      </div>
  </div>
</template>
<script>


import Vue from 'vue'

import rightMenu from '@/components/rightMenu.vue'
import bwCode from "./components/bwCode.vue";
var VueScrollTo = require('vue-scrollto');


Vue.component("bw-code", bwCode);
Vue.component("right-menu", rightMenu);
Vue.use(VueScrollTo)


import leftMenu from '@/components/leftMenu.vue'
import topMenu from '@/components/topMenu.vue'
import settings from '@/components/settings.vue'
export default {
  components:{
    leftMenu,
    topMenu,
    settings
  },
  computed:{
    settings(){
      return this.$store.state.leftMenu +" "+ this.$store.state.theme+" "+ this.$store.state.primaryColor;
    }
  }
}
</script>
