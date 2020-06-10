<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Badge BootWind Component</h1>
        
        <ul class="w-full lg:w-1/2">
            <li class="p-2">
                <bw-code :data="badge1"  />
            </li>
            <li class="p-2 ">
                 <bw-code :data="badge2"  />
            </li>
            <li class="p-2">
                 <bw-code :data="badge3"  />
            </li>
        </ul>
        <right-menu class="w-full lg:w-1/2 shadow-sm p-2 lg:p-12" youtube="fbLOB3y6OPs" next="breadcrumb" back="alert" />
    </div>
</template>

<script>

export default {
  data(){
      return {
badge1: `<h1 class="text-3xl py-1">Example heading <span class="text-sm m-1 py-1 px-2 bg-primary  text-indigo-100 rounded-full">New</span></h1>
<h2 class="text-2xl py-1">Example heading <span class="text-sm m-1 py-1 px-2 bg-primary text-indigo-100 rounded-full">New</span></h2>
<h3 class="text-xl py-1">Example heading <span class="text-sm m-1 py-1 px-2 bg-primary text-indigo-100 rounded-full">New</span></h3>
<h4 class="text-lg py-1">Example heading <span class="text-sm m-1 py-1 px-2 bg-primary text-indigo-100 rounded-full">New</span></h4>
<h5 class="text-md py-1">Example heading <span class="text-sm m-1 py-1 px-2 bg-primary text-indigo-100 rounded-full">New</span></h5>
<h6 class="text-sm py-1">Example heading <span class="text-sm m-1 py-1 px-2 bg-primary text-indigo-100 rounded-full">New</span></h6>`,
badge2: `<div class="flex flex-wrap">
    <button type="button" class="px-4 py-2 bg-primary hover:bg-primary_dark  rounded-lg text-indigo-100">
        Notifications <span class="text-sm m-1 py-1 px-2 text-primary bg-indigo-100 rounded-full">4</span>
    </button>
    <button class="mx-3 p-2 shadow-lg bg-primary text-secondary hover:bg-primary_dark rounded-lg text-indigo-100 flex">
        <svg class="bi bi-bell m-1" width="24px" height="24px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
            <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
        </svg>
        <span class="text-sm px-2 bg-secondary text-primary rounded-full">4</span>
    </button>
</div>`,
badge3: `
<div class="flex">
<span class="bg-default p-1 px-3 text-sm  text-white rounded-full mx-1">Default</span>
<span class="bg-primary p-1 px-3 text-sm text-white rounded-full mx-1">Primary</span>
<span class="bg-secondary p-1 px-3 text-sm text-primary rounded-full mx-1">Secodary</span>
<span class="bg-info p-1 px-3 text-sm text-white rounded-full mx-1">Info</span>
<span class="bg-success p-1 px-3 text-sm text-white rounded-full mx-1">Success</span>
<span class="bg-danger p-1 px-3 text-sm text-white rounded-full mx-1">Danger</span>
<span class="bg-warning p-1 px-3 text-sm text-white rounded-full mx-1">Warning</span>
</div>
`
}
  }
}
</script>

