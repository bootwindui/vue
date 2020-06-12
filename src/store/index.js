import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        leftMenu: '',
        themeMode: localStorage.getItem("themeMode") || 'dark-mode'
    },
    mutations: {
        toggleLeftMenu(state, to) {
            state.leftMenu = to;
        },
        toggleTheme(state, to) {
            state.themeMode = to
            localStorage.setItem("themeMode", to)
        }
    },
    actions: {

    },
    modules: {}
})