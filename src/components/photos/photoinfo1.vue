<template>
    <div class="photo-container">
       <h3>精彩瞬间</h3>
       <p class="subtitle">
           <span>发表时间：2018-09-09 20:30:23</span>
           <span>浏览次数:33</span>
       </p>
       <hr>

         <div class="pics">
             <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
         </div>

       <div class="content">
           <p>
               虎扑8月14日讯 NBA自由球员德维恩-韦德今日更新了个人推特回忆热火时期的美好时光。
           </p>
           <p>
               “刚刚才看完“Heatles”的纪录片，那是多么美好的时光啊！！！都已经8年了。”韦德写道。
           </p>
           <p>
               Heatles是勒布朗-詹姆斯自创的一个词，是为当时的迈阿密热火队起的绰号，它由‘Heat(热火)’和‘Beatles(披头士)’两个单词结合而来。
           </p>
           <p>
               2010-11赛季，德维恩-韦德、勒布朗-詹姆斯和克里斯-波什组成了热火三巨头。
           </p>
           <p>
               2017-18赛季常规赛，韦德场均上场22.9分钟，能够得到11.4分3.8篮板3.4助攻。
           </p>
       </div>
       <cmt-box></cmt-box>

    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'

    export default {
        data(){
            return {
                 slide1: [
          {
            src: 'https://c2.hoopchina.com.cn/uploads/star/event/images/180911/d9e3ca6b5d333f4fba0a1523901f52d924bf41a9.png',
            msrc: 'https://c2.hoopchina.com.cn/uploads/star/event/images/180911/thumbnail-d9e3ca6b5d333f4fba0a1523901f52d924bf41a9.png',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180824/8c48446f8897c00519da75f348cbba8721bec2e8.jpg',
            msrc: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180824/thumbnail-8c48446f8897c00519da75f348cbba8721bec2e8.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 600,
            h: 400
          },
           {
            src: 'https://c2.hoopchina.com.cn/uploads/star/event/images/180823/fafca9dfd042ba40aa48471e36b6ba36e3410073.jpg',
            msrc: 'https://c2.hoopchina.com.cn/uploads/star/event/images/180823/thumbnail-fafca9dfd042ba40aa48471e36b6ba36e3410073.jpg',
            alt: 'picture3',
            title: 'Image Caption 3',
            w: 600,
            h: 400
          },
          {
            src: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180814/5bede7c39a7a3ece76e84389b9cf9956c4d0c8e6.jpg',
            msrc: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180814/thumbnail-5bede7c39a7a3ece76e84389b9cf9956c4d0c8e6.jpg',
            alt: 'picture4',
            title: 'Image Caption 4',
            w: 600,
            h: 400
          },
           {
            src: 'https://c2.hoopchina.com.cn/uploads/star/event/images/180728/2ae49b35a51c111ae23fb6f06ed63988604c0c3e.jpg',
            msrc: 'https://c2.hoopchina.com.cn/uploads/star/event/images/180728/thumbnail-2ae49b35a51c111ae23fb6f06ed63988604c0c3e.jpg',
            alt: 'picture5',
            title: 'Image Caption 5',
            w: 600,
            h: 400
          },
          {
            src: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180912/eae48c1629a7dbd1265021cc2fab9fbd6160fe36.png',
            msrc: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180912/thumbnail-eae48c1629a7dbd1265021cc2fab9fbd6160fe36.png',
            alt: 'picture6',
            title: 'Image Caption 6',
            w: 600,
            h: 400
          },
          {
            src: 'https://c2.hoopchina.com.cn/uploads/star/event/images/180718/ba6caccc846db29eadbfc18d662be3205d86494d.png',
            msrc: 'https://c2.hoopchina.com.cn/uploads/star/event/images/180718/thumbnail-ba6caccc846db29eadbfc18d662be3205d86494d.png',
            alt: 'picture7',
            title: 'Image Caption 7',
            w: 600,
            h: 400
          },{
            src: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180719/aeaceb2eb7d95f1a04dc2e27960b15ae6ba7e94a.png',
            msrc: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180719/thumbnail-aeaceb2eb7d95f1a04dc2e27960b15ae6ba7e94a.png',
            alt: 'picture8',
            title: 'Image Caption 8',
            w: 600,
            h: 400
          },
          {
            src: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180721/9d16ce8f49fcf6ff67d28c469b0bbd7d38d6e5db.png',
            msrc: 'https://c1.hoopchina.com.cn/uploads/star/event/images/180721/thumbnail-9d16ce8f49fcf6ff67d28c469b0bbd7d38d6e5db.png',
            alt: 'picture9',
            title: 'Image Caption 9',
            w: 600,
            h: 400
          }
        ]
            }
        },
        methods(){},
        components:{
            "cmt-box":comment
        },
         handleClose () {
        console.log('close event')
      }
    }
</script>

<style lang="less">
    .photo-container{
        padding: 0 15px;
        h3{
            color: #2266aa;
            font-size: 20px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content{
            font-size: 13px;
            line-height: 24px;
            p{
                text-indent: 2em;
                color: chocolate;
            }
        }
        .pics{
            figure{
                width: 100px;
                height: 70px;
                margin: 0;
                display: inline-block;
                margin-right: 10px;
                margin-bottom: 10px;
            img{
                width: 100px !important;
                height: 80px;
            }
        }
    }
    }
    
</style>

