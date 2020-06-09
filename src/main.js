import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'


import BwCom from "./components/BwCom.vue";

import VuePrismEditor from "vue-prism-editor";

Vue.component("prism-editor", VuePrismEditor);
Vue.component("bw-com", BwCom);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')