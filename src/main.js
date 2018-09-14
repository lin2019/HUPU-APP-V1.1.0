import Vue from 'vue'

import app from './App.vue'

import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        increment(state){
            state.count++;
        }
    },
    getters: {
        getcot(state){
            return state.count;
        }
    }
})

// import MintUI from 'mint-ui'
// Vue.use(MintUI)

import './lib/mui/css/mui.css'

import { Header,Swipe, SwipeItem,Button,Lazyload,Switch } from 'mint-ui'

Vue.component(Header.name,Header)

Vue.component(Swipe.name, Swipe)

Vue.component(SwipeItem.name, SwipeItem)

Vue.component(Button.name, Button)

Vue.component(Switch.name, Switch);

// Vue.use(Lazyload,{
//     error:'./images/刷新.png',
//     loading:'./images/loading.gif'
// })
Vue.use(Lazyload)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router.js'

import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = '../../static'

Vue.http.options.emulateJSON = true

import moment from 'moment'

Vue.filter('dateFormat',function(datastr,pattern = 'YYYY-MM-DD HH:mm:ss'){
    return moment(datastr).format(pattern);
})

import VuePreview from 'vue-preview'

import './lib/mui/css/iconfont.css'
 
// defalut install
Vue.use(VuePreview)



var vm = new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c => c(app),
    router,
    store
})