<template>
    <div>
      
        <div class="relative flex items-center justify-between my-3">
            <h1 class="py-2 font-semibold text-lg ">{{ title }}</h1>
            <div class="flex">
                <div @click="copyToClipboard(data)" :class="classNonA">
                    <svg class="bi bi-bookmarks m-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7 13l5 3V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.234z"/>
                        <path d="M14 14l-1-.6V2a1 1 0 0 0-1-1H4.268A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v12z"/>
                    </svg>
                  {{ (coppied) ? 'Copied' : '' }}
                </div>
                 <div @click="showCode = !showCode" :class="(showCode) ? classA : classNonA">
                    <svg class="bi bi-code-slash m-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                    </svg>
                </div>
            </div>
           
        </div>
           <prism-editor readonly="true" class="mt-2" v-if="showCode" v-model="data" :code="data" language="html"></prism-editor>

         <div v-html="data" ></div>
      
        <hr class="mt-3">
    </div>
</template>
<script>
import '@/assets/prism.js'
export default {
    props: ['data','title'],
    data(){
        return{
            coppied: false,
            classNonA: 'flex cursor-pointer mx-2 p-1 px-2 neu-out rounded-lg',
            classA: 'flex cursor-pointer mx-2 p-1 px-2 neu-out active rounded-lg',
            showCode: false
        }
    },
    methods:{
        copyToClipboard(str){
            const el = document.createElement('textarea');
            el.value = str;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.coppied = true
            var self = this;
            setTimeout(function(){
                self.coppied = false;
            }, 1000);
        }
    },
}
</script>