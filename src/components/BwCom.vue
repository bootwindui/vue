<template>
    <div>
      
        <div v-html="data"></div>
        <div class="flex mt-2 mt-3 flex-wrap ">
            <div @click="copyToClipboard(data)" :class="(coppied) ? classA : classNonA">
                <svg class="bi bi-bookmarks m-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7 13l5 3V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.234z"/>
                    <path d="M14 14l-1-.6V2a1 1 0 0 0-1-1H4.268A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v12z"/>
                </svg>
               {{ (coppied) ? 'Copied' : 'Copy'}}
            </div>
            <div @click="showCode = !showCode" :class="(showCode) ? classA : classNonA">
                <svg class="bi bi-code-slash m-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                </svg>
                Code
            </div>
           
        </div>
         <prism-editor class="mt-2" v-if="showCode" v-model="data" :code="data" language="html"></prism-editor>

        <hr class="mt-3">
    </div>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return{
            coppied: false,
            classNonA: 'mx-auto flex cursor-pointer text-center p-1 px-5 bg-gray-100 text-indigo-700  rounded-full  border hover:bg-indigo-700 hover:text-indigo-100',
            classA: 'mx-auto flex cursor-pointer  text-center p-1 px-5 text-indigo-100 rounded-full bg-indigo-700 border',
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