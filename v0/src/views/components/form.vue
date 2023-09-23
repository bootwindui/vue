<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Form BootWind Component</h1>
        
        <ul class="w-full lg:w-2/3 mb-12 justify-center flex flex-wrap">
               <!-- <li class="w-full p-2" v-for="(list,id) in listCom" :key="id" :id="'list-'+id">
                    <bw-code :data="list.code" :title="list.title" />
                </li> -->
                <li class="p-2 w-full">
                
                        <!-- component -->
                    <div class="neu-in rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full neu-in border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane">
                        <p class="text-red text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full neu-in border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe">
                        </div>
                    </div>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input class="appearance-none block w-full neu-in border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************">
                        <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div class="-mx-3 md:flex mb-2">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full neu-in border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque">
                        </div>
                        <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full neu-in py-3 px-4 pr-8 rounded" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                        </div>
                        </div>
                        <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input class="appearance-none block w-full neu-in border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210">
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
           listCom:[
          ]
        }
    }
}
</script>

