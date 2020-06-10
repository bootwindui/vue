<template>
  <div id="app" :class="settings" >
       <div class="flex flex-wrap">
        <div class="w-full lg:w-1/6 ">
          <left-menu class="hidden lg:block fixed sidebar w-2/3 lg:w-1/6" />
          <div @click="$store.commit('toggleLeftMenu','')"  class="hidden w-full sidebar-bg-close bg-theme_secondary text-theme_primary text-right" >
         </div>
        </div>
        <div class="w-full lg:w-5/6">
          <top-menu class="mt-2" />
          <router-view class="p-3 min-h-screen"/>
        </div>
      </div>
  </div>
</template>

<style rel="stylesheet" href="/prism-default.css"></style>
<script src="/prism.js"></script>

<script>
import leftMenu from '@/components/leftMenu.vue'
import topMenu from '@/components/topMenu.vue'
export default {
  components:{
    leftMenu,
    topMenu
  },
  computed:{
    settings(){
      return this.$store.state.leftMenu +" "+ this.$store.state.themeMode;
    }
  },
   watch: {
    $route(to, from) {
     this.$store.commit('toggleLeftMenu','')
      // react to route changes...
    }
  }
}
</script>

<style>

/* In your CSS */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.sidebar{
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 100px;
}
::-webkit-scrollbar{
  width: 8px;
  background: #f7fafc; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e2e8f0;
}


.sidebar-active .sidebar-bg-close{
  height: 100vh;
  width: 100%;
  display: block;
  position: fixed;
  z-index: 99;
}

.sidebar-active .sidebar{
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}

</style>
