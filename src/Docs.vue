<template>
  <div id="app" :class="settings" >
       <div class="flex flex-wrap " >
        <div class="w-full lg:w-1/6 ">
          <left-menu class="hidden lg:block fixed sidebar w-2/3 lg:w-1/6 bg-theme_primary_dark" />
          <div @click="$store.commit('toggleLeftMenu','')"  class="hidden w-full sidebar-bg-close bg-theme_secondary text-theme_primary opacity-50" >
         </div>
        </div>
        <div class="w-full lg:w-5/6">
          <top-menu class="lg:px-4 py-3 lg:fixed bg-theme_primary right-0" />
          <router-view class="p-4 lg:pt-20 min-h-screen bg-theme_primary " />
          <settings />
        </div>
      </div>
  </div>
</template>
<script>

import leftMenu from '@/components/leftMenu.vue'
import topMenu from '@/components/topMenu.vue'
import settings from '@/components/settings.vue'
export default {
  components:{
    leftMenu,
    topMenu,
    settings
  },
  computed:{
    settings(){
      return this.$store.state.leftMenu +" "+ this.$store.state.theme+" "+ this.$store.state.primaryColor;
    }
  },
   watch: {
    $route(to, from) {
     this.$store.commit('toggleLeftMenu','')
      // react to route changes...
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.sidebar{
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 100px;
}
::-webkit-scrollbar{
  display: none;
}


.sidebar-active .sidebar-bg-close{
  height: 100vh;
  width: 100%;
  display: block;
  position: fixed;
  z-index: 99;
}

.sidebar-active .sidebar{
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}

code[class*="language-"],
pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}


/* Code blocks */

pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
}

pre::-webkit-scrollbar {
    display: none;
}

:not(pre)>code[class*="language-"],
pre[class*="language-"] {
    background: #172b4d
}


/* Inline code */

:not(pre)>code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: slategray;
}

.token.punctuation {
    color: #f8f8f2;
}

.token.namespace {
    opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
    color: #f92672;
}

.token.boolean,
.token.number {
    color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
    color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
    color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
    color: #e6db74;
}

.token.keyword {
    color: #66d9ef;
}

.token.regex,
.token.important {
    color: #fd971f;
}

.token.important,
.token.bold {
    font-weight: bold;
}

.token.italic {
    font-style: italic;
}

.token.entity {
    cursor: help;
}
</style>
