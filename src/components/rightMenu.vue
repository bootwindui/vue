<template>
<div >
    
    <div style="position:sticky;top:100px" >
    <ul class="pb-5">
        <li class="cursor-pointer px-2 py-1 text-primary font-semibold" v-for="(i,id) in list" :key="id" v-scroll-to="'#list-'+id">{{ i.title }}</li>
    </ul>
    <div v-if="youtube" class="videowrapper bg-theme_secondary" style="border-radius:30px">
        <iframe style="border-radius:30px" width="560" height="315" :src="`https://www.youtube.com/embed/${youtube}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="flex flex-wrap mt-5 justify-between">
    <router-link v-if="back" :to="back" class="flex neu-out text-primary p-1 px-4 float-left rounded-full my-2">
        <svg class="bi bi-arrow-left-circle mt-1 mr-2" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
            <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
        </svg>
        {{ back }}
    </router-link>
        <router-link v-if="next" :to="next" class="flex neu-out text-primary p-1 px-4 float-right rounded-full my-2">
         {{ next }}
            <svg class="bi bi-arrow-right-circle mt-1 ml-2" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
            <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </router-link>
    </div>

    
    </div>
</div>
</template>

<script>
export default {
    props: ['youtube','back','next','list']
}
</script>

<style  scoped>
.videowrapper { float: none; clear: both; width: 100%; position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0; } .videowrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>