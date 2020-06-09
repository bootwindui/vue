<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-lg">Badge BootWind Component</h1>
        
        <ul class="w-full lg:w-1/2">
            <li class="p-2">
                <bw-com :data="badge1"  />
            </li>
            <li class="p-2 ">
                 <bw-com :data="badge2"  />
            </li>
            <li>
                 <bw-com :data="badge3"  />
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
  },
  data(){
      return {
badge1: `<h3 class="text-xl py-1">Example heading <span class="text-sm m-1 py-1 px-2 bg-indigo-700 text-indigo-100 rounded-full">New</span></h3>`,
badge2: `<div class="flex flex-wrap">
<button type="button" class="px-4 py-2 bg-indigo-700 hover:bg-indigo-700 rounded-lg text-indigo-100">
    Notifications <span class="text-sm m-1 py-1 px-2 text-indigo-700 bg-indigo-100 rounded-full">4</span>
</button>
<button class="mx-3 p-2 shadow-lg text-indigo-700 hover:bg-indigo-200 rounded-lg text-indigo-100 flex">
    <svg class="bi bi-bell m-1" width="24px" height="24px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
        <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
    </svg>
    <span class="text-sm px-2 bg-indigo-700 text-indigo-100 rounded-full">4</span>
</button>
</div>`,
badge3: `<span class="p-1 px-3 text-sm bg-red-600 hover:bg-red-500 text-white rounded-full mx-1">Red</span>
<span class="p-1 px-3 text-sm bg-green-600 hover:bg-green-500 text-white rounded-full mx-1">Green</span>
<span class="p-1 px-3 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-full mx-1">Blue</span>`
    }
  }
}
</script>

