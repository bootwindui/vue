<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-4 pt-2 font-bold text-lg">Alert BootWind Component</h1>
        <ul class="w-full lg:w-1/2">
         
            <li class="p-2">
                <!-- 1 -->
                <h2 class="p-2">Indigo Alert</h2>
                <div class="p-2 px-3 bg-indigo-800 items-center text-indigo-100  rounded-lg  flex" >
                    <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs mr-3">Info</span>
                    <span class="mr-2 text-left flex-auto">A simple primary alert - check it out!</span>
                    <svg class="bi bi-x-circle cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                </div>
            </li>
            <li class="p-2">
                <!-- 2 -->
                <h1 class="p-2"> With Content</h1>
                <div class="p-2 px-3 bg-indigo-800 items-center text-indigo-100  rounded-lg flex  flex-wrap" >
                    <span class="rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs">Info</span>
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
                </div>
            </li>
            <li class="p-2">
                <!-- 3 -->
                <h1 class="p-2">Green Alert</h1>
                <div class="p-2 px-3 bg-green-600 items-center text-green-100  rounded-lg  flex" >
                    <span class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs mr-3">Success</span>
                    <span class="mr-2 text-left flex-auto">A simple alert - check it out!</span>
                     <svg class="bi bi-x-circle cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                </div>
            
            </li>
            <li class="p-2">
                <!-- 4 -->
                <h1 class="p-2">Red Alert</h1>
                <div class="p-2 px-3 bg-red-600 items-center text-red-100  rounded-lg  flex" >
                    <span class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs mr-3">Error</span>
                    <span class="mr-2 text-left flex-auto">A simple alert - check it out!</span>
                     <svg class="bi bi-x-circle cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                </div>
            
            </li>
            
        </ul>
        <right-menu class="w-full lg:w-1/2 shadow-sm p-2 lg:p-12" youtube="J7kZrNYiiuc" next="badge" back="/" />
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

