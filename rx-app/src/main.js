import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import router from './router'
// import index from './vuex/index.js'
import style from '../style.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: 'body',
    router,
    store,
    render: h => h(App)
})