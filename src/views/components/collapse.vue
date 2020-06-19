<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Collapse BootWind Component</h1>
        
        <ul class="w-full lg:w-2/3 mb-12">
             <li class="p-2">
                <h1 class="py-2 font-semibold text-lg ">Simple</h1>

                <button @click="collapseActive = !collapseActive" class="px-6 py-2 neu-out rounded-lg">
                    Button Collapse
                </button>

                <div v-if="collapseActive" class="flex flex-wrap rounded-xl neu-out p-4 mt-3">
                    <div class="w-full py-2 px-4 flex flex-col">
                        <h5 class="text-xl font-bold flex-col py-1">Collapse Content</h5>
                        <p class="flex-col">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                   
            </li>
            <li class="p-2">
                <h1 class="py-2 font-semibold text-lg ">Accordion</h1>

                <ul class=" rounded-xl neu-out p-4">
                    <li v-for="list in listAccordion" :key="list.id" class="px-6 py-3 pb-2 w-full text-left rounded-lg hover:neu-in" :class="(list.id == accordionActive) ? 'neu-in rounded-lg my-2': ''">
                        <button @click="accordionActive = list.id" class="font-bold w-full text-left pb-2">{{ list.title }}</button>
                        <p v-if="list.id == accordionActive" >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores earum commodi non tempore cum minima at quidem. Quae exercitationem obcaecati qui voluptatum non numquam iste omnis. Beatae neque porro blanditiis.
                        </p>
                    </li>
                </ul>
            </li>
        </ul>
        <right-menu class="w-full lg:w-1/3 p-2 lg:p-12" youtube="" next="dropdown" back="carousel" />
    </div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
      return{
          collapseActive: true,
          listAccordion: [
              {
                 id: 1,
                 title: '# Collapsible Group Item 1' ,
              },
              {
                 id: 2,
                 title: '# Collapsible Group Item 2' ,
              },
              {
                 id: 3,
                 title: '# Collapsible Group Item 3' ,
              },
              {
                 id: 4,
                 title: '# Collapsible Group Item 4' ,
              }
          ],
          accordionActive: 2
        }
    }
}
</script>

