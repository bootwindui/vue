<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-lg">Breadcrumb BootWind Component</h1>
        
        <ul class="w-full lg:w-1/2">
         
            <li class="p-2">
                <!-- 1 -->
                <nav class="flex bg-gray-200 rounded-md p-2 px-3">
                    <div class="px-2 border-l-2 font-semibold">
                        Data
                    </div>
                </nav>
            </li>

             <li class="p-2">
                <!-- 1 -->
                <nav class="flex bg-gray-200 rounded-md p-2 px-3">
                    <router-link to="/" class="px-2 border-l-2 text-indigo-600 hover:text-indigo-700">
                       Home
                    </router-link>
                    <div class="px-2 border-l-2 font-semibold">
                        Data
                    </div>
                </nav>
            </li>
             <li class="p-2">
                <!-- 1 -->
                <bw-com :data="breadcrumb1"  />
            </li>
        </ul>
        <right-menu class="w-full lg:w-1/2 shadow-sm p-2 lg:p-12" youtube="D0dJYE5Dc1o" next="button" back="badge" />
    </div>
</template>

<script>
import rightMenu from '@/components/right.vue'
export default {
  components: {
    rightMenu
  },
  data(){
      return {
breadcrumb1: `<nav class="flex bg-gray-200 rounded-md p-2 px-3">
<router-link to="/" class="px-2 border-l-2 text-indigo-600 hover:text-indigo-700">
    Home
</router-link>
<router-link to="/" class="px-2 border-l-2 text-indigo-600 hover:text-indigo-700">
    Library
</router-link>
<div class="px-2 border-l-2 font-semibold">
    Data
</div>
</nav>`
      }
  }
}
</script>

