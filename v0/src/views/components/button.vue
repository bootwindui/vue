<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Button BootWind Component</h1>
        
        <ul class="w-full lg:w-2/3">
        
            <li class="p-2" v-for="(list,id) in listCom" :key="id" :id="'list-'+id">
                <bw-code :data="list.code" :title="list.title" />
            </li>
        </ul>
        <right-menu :list="listCom" class="w-full lg:w-1/3  p-2 lg:p-12" youtube="D0dJYE5Dc1o" next="cards" back="badge" />
    </div>
</template>

<script>
export default {
  data(){
    return {
listCom:[
{
  title: 'Style',
  code: `
<div class="flex flex-wrap justify-center ">
<button class="py-2 px-6 rounded-lg neu-in  m-2 font-bold">
  Neu In Style 
</button>
<button class="py-2 px-6 rounded-lg neu-out  m-2 font-bold">
  Neu Out Style 
</button>

<button class="py-2 px-6 rounded-lg neu-push  m-2 font-bold">
  Neu Push Style 
</button>
<button class="ont-bold py-2 px-6  rounded-lg m-2 neu-in font-bold">
  <svg class="float-left mr-2 bg-white rounded-full" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
 with Icon
</button>
</div>

`
},

{
  title: 'Coloring',
  code: `
<div class="flex flex-wrap justify-center">
<button type="button" class="px-6 py-2 shadow-sm hover:opacity-75 hover:shadow-lg m-2 bg-default text-white rounded-lg">Default</button>
<button type="button" class="px-6 py-2 shadow-sm hover:opacity-75 hover:shadow-lg m-2 bg-primary hover:bg-primary_dark text-white rounded-lg">Primary</button>
<button type="button" class="px-6 py-2 shadow-sm hover:opacity-75 hover:shadow-lg m-2 bg-secondary text-default rounded-lg">Secondary</button>
<button type="button" class="px-6 py-2 shadow-sm hover:opacity-75 hover:shadow-lg m-2 bg-info text-white rounded-lg">Info</button>
<button type="button" class="px-6 py-2 shadow-sm hover:opacity-75 hover:shadow-lg m-2 bg-success text-white rounded-lg"> Success </button>
<button type="button" class="px-6 py-2 shadow-sm hover:opacity-75 hover:shadow-lg m-2 bg-danger text-white rounded-lg"> Danger </button>
<button type="button" class="px-6 py-2 shadow-sm hover:opacity-75 hover:shadow-lg m-2 bg-warning text-white rounded-lg">Warning</button>
</div>`
},
{
  title: 'Block',
  code: `<button  class="
font-bold cursor-pointer px-6 p-1 shadow-sm hover:shadow-lg bg-primary text-indigo-100 
hover:bg-primary_dark rounded-full flex w-full">
<div class="mx-auto flex">
<svg class="float-left mr-2 mt-1 bg-white rounded-full" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
<span class="p-1">Btn fullwidth</span>
</div> 
</button>`
},
{
  title: 'Button Group',
  code: ` <div class="flex">
<input type="text" class=" max-w-md rounded-lg bg-indigo-100 appearance-none border-2 border-indigo-200 w-full py-2 px-6 text-indigo-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" placeholder="Input group example">
<button type="button" class="rounded-r py-2 px-6 shadow-smhover:shadow-lg bg-primary hover:bg-primary_dark  text-white">Button</button>
</div>`
}
]}}}
</script>

