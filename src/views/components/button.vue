<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-lg">Button BootWind Component</h1>
        
        <ul class="w-full lg:w-1/2">
        
            <li class="p-2">

      <!-- Simple -->
        <button class="bg-indigo-700 hover:bg-indigo-800  text-white py-1 px-4 m-1 rounded">
        Button
      </button>
      <!-- Pill -->
      <button class="bg-indigo-700 hover:bg-indigo-800  text-white  py-1 px-4 m-1 rounded-full">
          Button
      </button>

      <!-- Outline -->
      <button class="bg-transparent hover:bg-indigo-700 text-indigo-800  font-semibold hover:text-white py-1 px-4 m-1 border border-indigo-700 hover:border-transparent rounded">
        Button
      </button>


      <!-- Icon -->

 
    <button class="bg-indigo-700 hover:bg-indigo-800 text-indigo-100 font-bold py-1 px-4 rounded inline-flex items-center">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Download</span>
    </button>
      </li>
      <li class="p-2">
        <!-- 1 -->
        <h1 class="p-2">Color</h1>

        <button type="button" class="px-4 py-1 shadow-sm hover:shadow-md m-1 bg-indigo-700 hover:bg-indigo-800  text-white rounded-md">Primary</button>
        <button type="button" class="px-4 py-1 shadow-sm hover:shadow-md m-1 bg-gray-700 hover:bg-gray-800 text-white rounded-md">Secondary</button>
        <button type="button" class="px-4 py-1 shadow-sm hover:shadow-md m-1 bg-green-700 hover:bg-green-800 text-white rounded-md"> Success </button>
        <button type="button" class="px-4 py-1 shadow-sm hover:shadow-md m-1 bg-red-700 hover:bg-red-800 text-white rounded-md"> Danger </button>
        <button type="button" class="px-4 py-1 shadow-sm hover:shadow-md m-1 bg-yellow-700 hover:bg-yellow-800 text-white rounded-md">Warning</button>
        <button type="button" class="px-4 py-1 shadow-sm hover:shadow-md m-1 bg-blue-700 hover:bg-blue-800 text-white rounded-md">Info</button>
      </li>
      <li class="p-2">
        <h1 class="p-2">Button Group</h1>
         <div class="flex">
          <input type="text" class=" max-w-md rounded-l bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700" placeholder="Input group example">
          <button type="button" class="rounded-r py-2 px-4 shadow-sm hover:shadow-md bg-indigo-700 hover:bg-indigo-800  text-white">Button</button>
        </div>
      </li>
        </ul>
        <right-menu class="w-full lg:w-1/2 shadow-sm p-2 lg:p-12" youtube="D0dJYE5Dc1o" next="card" back="breadcrumb" />
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

