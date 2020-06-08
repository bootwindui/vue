<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-lg">Badge BootWind Component</h1>
        
        <ul class="w-full lg:w-1/2">
         
            <li class="p-2">
            <hr class="mb-3">
                <!-- 1 -->
                <h3 class="text-xl">Example heading <span class="text-sm m-1 py-1 px-2 bg-indigo-800 text-indigo-100 rounded-full">New</span></h3>
                <h4 class="text-lg">Example heading <span class="text-sm m-1 py-1 px-2 bg-indigo-800 text-indigo-100 rounded-full">New</span></h4>
                <h5 class="text-md">Example heading <span class="text-sm m-1 py-1 px-2 bg-indigo-800 text-indigo-100 rounded-full">New</span></h5>
                <h6 class="text-sm">Example heading <span class="text-sm m-1 py-1 px-2 bg-indigo-800 text-indigo-100 rounded-full">New</span></h6>
            </li>
            <li class="p-2">
                <hr>
                <br>
                <button type="button" class="px-4 py-2 bg-indigo-800 hover:bg-indigo-700 rounded-lg text-indigo-100">
                    Notifications <span class="text-sm m-1 py-1 px-2 text-indigo-800 bg-indigo-100 rounded-full">4</span>
                </button>
            </li>
            <li>
                <br>
                <hr>
                <br>
                <span class="p-1 px-3 text-sm bg-red-600 hover:bg-red-500 text-white rounded-full mx-1">Red</span>
                <span class="p-1 px-3 text-sm bg-green-600 hover:bg-green-500 text-white rounded-full mx-1">Green</span>
                <span class="p-1 px-3 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-full mx-1">Blue</span>
            </li>
        </ul>
        <right-menu class="w-full lg:w-1/2 shadow-sm p-2 lg:p-12" youtube="fbLOB3y6OPs" next="breadcrumb" back="alert" />
    </div>
</template>

<script>
import rightMenu from '@/components/right.vue'
export default {
  components: {
    rightMenu
  }
}
</script>

