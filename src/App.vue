<template>
    <div class="app_container">
        <!--App顶部，不变区域-->
        <mt-header fixed title="虎扑体育">
            <span slot="left" @click="goback" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>


        <!--路由显示区域-->
        <transition>
            <router-view></router-view>
        </transition>

        <!--App底部，不变区域-->

        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-llb" to="/home">
                <span class="mui-icon iconfont icon-tiyu"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/member">
                <span class="mui-icon iconfont icon-saicheng"></span>
                <span class="mui-tab-label">赛程</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/shopcar">
                <span class="mui-icon iconfont icon-gouwuche"><span class="mui-badge" id="badge">{{ $store.getters.getcot }}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/search">
                <span class="mui-icon iconfont icon-wo-full"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                flag:false
            }
        },
        created(){
            this.flag = this.$route.path === '/home' ? false : true;
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        },
        watch:{
            "$route.path":function(newVal){
                if(newVal == '/home'){
                    this.flag = false;
                }
                else{
                    this.flag = true;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .iconfont{
         font-family: iconfont;
    }
    .mint-header{
        background: #a41f24;
        font-size: 18px;
    }
    .app_container{
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active{
        transition: all .5s ease;
    }
    .mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #a41f24;
}
.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

