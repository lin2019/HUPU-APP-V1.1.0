<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="height:25px">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" v-model="$store.state.count" @change="countChanged" ref="numbox"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
				</div>
</template>

<script>
     import mui from '../../lib/mui/js/mui.js'

     export default {
        mounted(){
            mui(".mui-numbox").numbox()
            mui(".mui-numbox").numbox().setOption('max',100)
        },
        methods:{
            countChanged(){
                // console.log(this.$refs.numbox.value);
                this.$emit("getcount",parseInt(this.$refs.numbox.value));
            },
            add(){
                this.$store.commit('increment')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>

