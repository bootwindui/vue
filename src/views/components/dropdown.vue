<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Dropdown BootWind Component</h1>
        
        <ul class="w-full lg:w-2/3 mb-12 justify-center flex flex-wrap">
               <li class="w-full p-2" v-for="(list,id) in listCom" :key="id" :id="'list-'+id">
                    <bw-code :data="list.code" :title="list.title" />
                </li>
                <li class="p-2 w-full">
                       <h1 class="py-2 font-semibold text-lg ">Dropdown Clicked</h1>

                        <div @click="dropdownActive = !dropdownActive" class="neu-out rounded-lg w-full lg:w-1/2 relative">
                        <button class="font-bold pl-4 py-2 neu-out rounded-lg w-full flex-wrap text-left" >
                        Simple
                        <svg class="float-right mr-2 mt-1" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                        </button>
                        <ul v-if="dropdownActive" class="w-full py-3 flex flex-wrap absolute neu-out z-30">
                            <li  class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">Action</a></li>
                            <li class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">Another action</a></li>
                            <li class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">Something else here</a></li>
                        </ul>
    </div>

                </li>
        </ul>
        <right-menu :list="listCom" class="w-full lg:w-1/3 p-2 lg:p-12" youtube="" next="dropdown" back="carousel" />
    </div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
      return{
          dropdownActive:true,
           listCom:[
              {
                  title: 'Dropdown Hover',
                  code: ` <div class="neu-out rounded-lg to-hover w-full lg:w-1/2 relative">
        <button class="font-bold pl-4 py-2 neu-out rounded-lg w-full flex-wrap text-left" >
        Simple
        <svg class="float-right mr-2 mt-1" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
        </svg>
        </button>
        <ul class="z-30 w-full hovered py-3 flex flex-wrap absolute neu-out">
            <li  class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">Action</a></li>
            <li class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">Another action</a></li>
            <li class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">Something else here</a></li>
        </ul>
    </div>`
              }
          ]
        }
    }
}
</script>

