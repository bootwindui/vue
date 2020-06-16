<template>
    <div class="flex flex-wrap justify-center">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Cards BootWind Component</h1>
        
        <ul class="w-full lg:w-2/3">
              <li class="p-2" v-for="(list,id) in listCom" :key="id" :id="'list-'+id">
                <bw-code :data="list.code" :title="list.title" />
            </li>
        </ul>
        
        <right-menu :list="listCom" class="w-full lg:w-1/3 shadow-sm p-2 lg:p-12" youtube="laI_rwHPnNM" next="breadcrumb" back="alert" />
    </div>
</template>

<script>
export default {
  data(){
      return{
listCom:[
{
  title: 'Simple',
  code: `<div class="shadow-lg flex flex-wrap  border rounded-lg text-center ">
    <div class="w-full py-2 px-4 ">
        Featured
    </div>
    <div class="w-full py-2 px-4 flex flex-col">
        <h5 class="text-xl font-bold flex-col py-1">Special title treatment</h5>
        <p class="flex-col">With supporting text below as a natural lead-in to additional content.</p>
        <span class="py-3">
            <a href="#" class="bg-primary hover:bg-primary rounded-full text-white px-4 py-2">Go somewhere</a>
        </span>
    </div>
    <div class="w-full py-2 px-4 ">
        2 days ago
    </div>
</div>`
},
{
  title: 'With Image',
  code: `<div class="mx-1 rounded-lg shadow-lg max-w-sm mx-auto border">
    <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
    <div class="px-6 py-4">
        <div class="font-bold text-md lg:mb-2">The Coldest Sunset</div>
        <p class="text-theme_secondary text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia... 
        </p>
    </div>
    <div class="px-6 py-4">
        <span class="inline-block bg-indigo-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-indigo-700 mr-2">#photography</span>
        <span class="inline-block bg-indigo-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-indigo-700 mr-2">#travel</span>
        <span class="inline-block bg-indigo-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-indigo-700">#winter</span>
    </div>
</div>`
},
{
  title: 'With Left Image',
  code: `<div class="w-full lg:flex justify-center">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
        </div>
        <div class="border-r border-b border-l border-indigo-400 lg:border-l-0 lg:border-t lg:border-indigo-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
            <p class="text-sm text-indigo-600 flex items-center">
                <svg class="fill-current text-primary w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
            </p>
            <div class="text-theme_secondary font-bold text-xl mb-2">Can coffee make you a better developer?</div>
            <p class="text-theme_secondary text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
            <div class="text-sm">
                <p class="text-theme_secondary leading-none">Jonathan Reinink</p>
                <p class="text-indigo-600">Aug 18</p>
            </div>
        </div>
    </div>
</div>`
}
]}}}
</script>

