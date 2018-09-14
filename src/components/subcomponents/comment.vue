<template>
    <div class="cmt-container">
        <h3>发表评论：</h3>
        <hr>
        <textarea placeholder="吐槽一下" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="pushComments">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-items" v-for="(item,index) in comments" :key="item.add_time">
                <div class="cmt-title">
                    <span>第{{index+1}}楼</span>
                    <span>{{item.user_name}}</span>
                    <span>发表时间{{item.add_time | dateFormat}}</span>
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default {
        data(){
            return {
                pageindex:1,
                comments:[],
                msg:''
            }
        },
        created(){
            this.getComments(),
            this.pushComments()
        },
        methods:{
            getComments(){
                this.$http.get("comment.json").then(result => {
                    if(result.body.status === 0){
                        this.comments = result.body.message;
                    }else{
                        Toast('获取评论失败！')
                    }
                })
            },
            pushComments(){
                if(this.msg.trim().length === 0){
                    return Toast('评论为空！');
                }
                this.$http.get('comment.json',{
                    content:this.msg.trim()
                    }).then(function(result){
                        if(result.body.status === 0){
                            var cmt = {
                                user_name:'匿名用户',
                                add_time:Date.now(),
                                content:this.msg.trim()
                                };
                            this.comments.unshift(cmt);
                            var data = this.comments;
                            localStorage.setItem("data",JSON.stringify(data));
                            this.msg = ''
                        }
                    })
            }
        },
        props:["id"]
    }
</script>

<style scoped lang="less">
    .cmt-container{
        .mint-button--danger{
            background-color: #a41f24;
            margin-top: 20px;
        }
        .mint-button--primary{
            margin: 10px 0;
        }
        margin: 20px 10px 0;
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-items{
                margin-top: 8px;
                .cmt-title{
                    background-color: #a41f24;
                    font-size: 13px;
                    line-height: 30px;
                    color:#fff;
                    display: flex;
                    justify-content: space-around;
                    border-radius: 8px 8px 0 0;
                }
                .cmt-body{
                    line-height: 30px;
                    text-indent: 2em;
                    color:#fff;
                    background-color: #123;
                    border-radius: 0 0 8px 8px;
                }
            }
        }
    }
</style>

