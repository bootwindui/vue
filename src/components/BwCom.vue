<template>
    <div>
      
        <div v-html="data"></div>
        <div class="flex mt-2 mt-3 flex-wrap">
            <div class="w-full lg:w-2/4"></div>
            <div @click="copyToClipboard(data)" :class="(coppied) ? classA : classNonA">
                {{ (coppied) ? 'Copied' : 'Copy'}}</div>
            <div @click="showCode = !showCode" :class="(showCode) ? classA : classNonA">Show Code</div>
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
            classNonA: 'w-1/2 lg:w-1/4 cursor-pointer text-center p-1 px-5 text-indigo-800  rounded-full shadow-sm',
            classA: 'w-1/2 lg:w-1/4 cursor-pointer shadow-sm text-center p-1 px-5 text-indigo-100 rounded-full bg-indigo-700',
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