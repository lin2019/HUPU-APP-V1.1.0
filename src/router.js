import VueRouter from 'vue-router'

import homeContainer from './components/tabbar/homeContainer.vue'

import memberContainer from './components/tabbar/memberContainer.vue'

import shopcarContainer from './components/tabbar/shopcarContainer.vue'

import searchContainer from './components/tabbar/searchContainer.vue'

import NewsList from './components/news/newList.vue'

import newsinfo from './components/news/newsinfo.vue'

import photoList from './components/photos/photoList.vue'

import photoinfo from './components/photos/photoinfo1.vue'

import goodsList from './components/goods/goodslist.vue'

import goodsinfo from './components/goods/goodsinfo.vue'

import goodsdesc from './components/goods/goodsdesc.vue'

import goodscomment from './components/goods/goodscomment.vue'


var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/member',component:memberContainer},
        {path:'/shopcar',component:shopcarContainer},
        {path:'/search',component:searchContainer},
        {path:'/home/newList',component:NewsList},
        {path:'/home/newsinfo/:id',component:newsinfo},
        {path:'/home/photoList',component:photoList},
        {path:'/home/photoinfo1',component:photoinfo},
        {path:'/home/goodslist',component:goodsList},
        {path:'/home/goodsinfo/:id',component:goodsinfo},
        {path:'/home/goodsdesc/:id',component:goodsdesc,name:"goodsdesc"},
        {path:'/home/goodscomment/:id',component:goodscomment,name:"goodscomment"}
    ],
    linkActiveClass:"mui-active"
})

export default router