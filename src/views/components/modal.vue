<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Form BootWind Component</h1>
        
        <ul class="w-full lg:w-2/3 mb-12 justify-center flex flex-wrap">
               <!-- <li class="w-full p-2" v-for="(list,id) in listCom" :key="id" :id="'list-'+id">
                    <bw-code :data="list.code" :title="list.title" />
                </li> -->
                <li class="p-2 w-full">

                       <button @click="modalActive = !modalActive" class="px-6 py-2 text-secondary rounded-lg bg-primary ">
                            Open Modal
                        </button>

                
                <div v-if="modalActive" class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50">
                        <!--
                            Background overlay, show/hide based on modal state.

                            Entering: "ease-out duration-300"
                            From: "opacity-0"
                            To: "opacity-100"
                            Leaving: "ease-in duration-200"
                            From: "opacity-100"
                            To: "opacity-0"
                        -->
                        <div class="fixed inset-0 transition-opacity" @click="modalActive = !modalActive">
                            <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
                        </div>

                        <!--
                            Modal panel, show/hide based on modal state.

                            Entering: "ease-out duration-300"
                            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            To: "opacity-100 translate-y-0 sm:scale-100"
                            Leaving: "ease-in duration-200"
                            From: "opacity-100 translate-y-0 sm:scale-100"
                            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        -->
                        <div class="neu-out rounded-lg overflow-hidden  transform transition-all sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div class="neu-in px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                </svg>
                                </div>
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Deactivate account
                                </h3>
                                <div class="mt-2">
                                    <p class="text-sm leading-5 text-gray-500">
                                    Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                <button @click="modalActive = !modalActive" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium neu-out bg-primary text-secondary hover:bg-primary_dark hover:text-secondary focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Deactivate
                                </button>
                            </span>
                            <span  class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                <button @click="modalActive = !modalActive" type="button" class="inline-flex justify-center w-full rounded-md border  px-4 py-2 text-base leading-6 font-medium neu-in hover:text-gray-500 focus:outline-none focus:border-blue-300  transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Cancel
                                </button>
                            </span>
                            </div>
                        </div>
                        </div>
                </li>
        </ul>
        <right-menu :list="listCom" class="w-full lg:w-1/3 p-2 lg:p-12" youtube="" next="dropdown" back="carousel" />
    </div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
      return{
            modalActive: false,
           listCom:[
          ]
        }
    }
}
</script>

