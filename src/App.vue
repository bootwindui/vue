<template>
  <div id="app" :class="className">
  <div class="flex flex-wrap">
    <div @click="toggleMenu" class="hidden bg-gray-100 sidebar-bg-close text-right p-3 px-5 ">
      <span>Close</span>
    </div>
    <div class=" w-full lg:w-1/6 ">
     <nav-menu class="lg:pt-16"></nav-menu>
    </div>
    <div class="w-full lg:w-5/6">
      <div class="flex fixed top-0 right-0 bg-indigo-800 text-white w-full shadow-sm p-2 px-6 z-40">
             
             <div @click="toggleMenu" class="block lg:hidden py-1 px-2 shadow-sm rounded-lg  text-white text-sm">
               <svg id="i-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
              </svg>
            </div>
            <h1 class=" py-1 px-3 font-bold text-lg text-center flex">
                <img class="border-solid border-2 border-indigo-100 rounded-full" width="30px" src="@/assets/logo-bootwind-template-sm.png" alt="logo-bootwind-template">
                <router-link class="font-semibold text-xl tracking-tight ml-3" to="/">
                 BootWind
                </router-link>
            </h1>
            <div class="ml-auto p-1 hidden lg:block" >
              <router-link to="/"> Github</router-link>
            </div>
      </div>
      <router-view class="bg-gray-100 pt-16 p-3 min-h-screen"/>

          <!-- <div v-if="alert" class="p-2 px-3 bg-indigo-800 items-center text-indigo-100  rounded-lg flex  flex-wrap fixed top-0 right-0 max-w-md m-1 border-2 border-gray-100 shadow-lg lg:mr-8 lg:mt-8 z-50" >
                <span class="rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs">Info</span>
                <span class="p-2 font-bold flex-auto">Selamat Malam BootWinder!
                      <svg @click="alert = false" class="bi bi-x-circle cursor-pointer float-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                </span>
                <p class="p-2">
                    Terimakasih Sudah Subscribe Channel Ini
                </p>
                <p class="p-2 pt-0">
                    Semoga kita selalu diberi kesehatan agar bisa terus berkarya bersama bootwind template
                </p>
            </div> -->
    </div>
  </div>
  </div>
</template>
<script>
import navMenu from './components/Sidebar.vue'
export default {
  components: {
    navMenu
  },
  data(){
    return {
      alert: true,
      className: ''
    }
  },
  methods:{
    toggleMenu(){
      if(this.className == 'sidebar-active'){
         this.className = '';
      }else{
         this.className = 'sidebar-active';
      }
     
    }
  },
   watch: {
    $route(to, from) {
      this.className = '';
      // react to route changes...
    }
  }
}
</script>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.sidebar{
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 100px;
}
.sidebar::-webkit-scrollbar{
  display: none;
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
  width: 280px;
  z-index: 100;
}

</style>
