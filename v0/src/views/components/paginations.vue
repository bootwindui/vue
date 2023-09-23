<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Form BootWind Component</h1>
        
        <ul class="w-full mb-12 justify-center flex flex-wrap">
               <!-- <li class="w-full p-2" v-for="(list,id) in listCom" :key="id" :id="'list-'+id">
                    <bw-code :data="list.code" :title="list.title" />
                </li> -->
                <li class="p-2 w-full">
                    <div class="neu-in px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
  <div class="flex-1 flex justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300  active:text-gray-700 transition ease-in-out duration-150">
      Previous
    </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300  active:text-gray-700 transition ease-in-out duration-150">
      Next
    </a>
  </div>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p class="text-sm leading-5 text-gray-700">
        Showing
        <span class="font-medium">1
        </span>
        to
        <span class="font-medium">10
        </span>
        of
        <span class="font-medium">97
        </span>
        results
      </p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex shadow-sm">
        <button type="button" class="relative inline-flex items-center px-2 py-2 rounded-l-md border neu-in font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border neu-in font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-700 transition ease-in-out duration-150">
          1
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border neu-in font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-700 transition ease-in-out duration-150">
          2
        </button>
        <button type="button" class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border neu-in font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-700 transition ease-in-out duration-150">
          3
        </button>
        <span class="-ml-px relative inline-flex items-center px-4 py-2 border neu-in font-medium text-gray-700">
          ...
        </span>
        <button type="button" class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border neu-in font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-700 transition ease-in-out duration-150">
          8
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border neu-in font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-700 transition ease-in-out duration-150">
          9
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border neu-in font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-700 transition ease-in-out duration-150">
          10
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border neu-in font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
      </nav>
    </div>
  </div>
</div>
                </li>
        </ul>
        <right-menu :list="listCom" class="w-full p-2 lg:p-12" youtube="" next="dropdown" back="carousel" />
    </div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
      return{
           listCom:[
          ]
        }
    }
}
</script>

