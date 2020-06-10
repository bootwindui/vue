<template>
    <div class="flex flex-wrap">
        <h1 class="w-full px-4 pt-2 font-bold text-3xl">Alert BootWind Component</h1>
        <ul class="w-full lg:w-1/2 ">
            
            <li class="p-2">
                <h2 class="p-2">Simple</h2>
                <bw-code :data="alert" />
            </li>
             <li class="p-2">
                <h2 class="p-2">Dismissing</h2>
                <bw-code :data="alert1" />
            </li>
            <li class="p-2">
                <h1 class="p-2"> With Content</h1>
                <bw-code :data="alert2" />
            </li>
            <li class="p-2">
                <h1 class="p-2"> Coloring </h1>
                <bw-code :data="alert3" />
            </li>
            
        </ul>
        <right-menu class="w-full lg:w-1/2 shadow-sm p-2 lg:p-12" youtube="J7kZrNYiiuc" next="badge" back="/started/install" />
    </div>
</template>

<script>
export default {
  data(){
      return {
alert: `<div class="my-4 p-2 px-3 bg-primary items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Info</span>
    <span class="mr-2 text-left flex-auto">A simple alert - check it out!</span>
</div>`,
alert1: `<div class="my-4 p-2 px-3 bg-primary items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Info</span>
    <span class="mr-2 text-left flex-auto">A simple alert - check it out!</span>
    <svg class="bi bi-x-circle cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    </svg>
</div>`,
alert2: `<div class="my-4 p-2 px-3 bg-primary items-center text-indigo-100  rounded-lg flex  flex-wrap" >
    <span class="rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs">Info</span>
    <span class="p-2 font-bold flex-auto">Notification !
            <svg class="bi bi-x-circle cursor-pointer float-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
    </span>
    <p class="p-2">
    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </p>
    <p class="p-2">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
</div>`,
alert3: `
<div class="my-4 p-2 px-3 bg-default items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="text-default flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Default</span>
    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>
</div>
<div class="my-4 p-2 px-3 bg-primary items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="text-primary flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Primary</span>
    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>
</div>
<div class="my-4 p-2 px-3 bg-secondary items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="text-primary flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Secondary</span>
    <span class="text-primary mr-2 text-left flex-auto">A Simple Alert- check it out!</span>
</div>
    <div class="my-4 p-2 px-3 bg-info items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="text-info flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Info</span>
    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>
</div>
<div class="my-4 p-2 px-3 bg-success items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="text-success flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Success</span>
    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>
</div>
<div class="my-4 p-2 px-3 bg-danger items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="text-danger flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Danger</span>
    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>
</div>
<div class="my-4 p-2 px-3 bg-warning items-center text-indigo-100  rounded-full  flex shadow-md" >
    <span class="text-warning flex rounded-full bg-indigo-100 uppercase text-primary px-2 py-1 text-xs mr-3 shadow-md">Warning</span>
    <span class="mr-2 text-left flex-auto">A Simple Alert- check it out!</span>
</div>`
}
  }
}
</script>

