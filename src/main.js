import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import rightMenu from '@/components/rightMenu.vue'
import bwCode from "./components/bwCode.vue";
import VuePrismEditor from "vue-prism-editor";

var VueScrollTo = require('vue-scrollto');
Vue.component("prism-editor", VuePrismEditor);
Vue.component("bw-code", bwCode);
Vue.component("right-menu", rightMenu);
Vue.use(VueScrollTo)


Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')