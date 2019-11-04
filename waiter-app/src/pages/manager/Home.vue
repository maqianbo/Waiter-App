<template>
    <div id="home">
        <div class="header">
            <img  width="100%" src="../../assets/images/home_02.png" >
        </div>
        <div class="sections">
            <ul class="order">
                <li v-for="item in djdorder" :key="item.id">
                    <div class="order_header">
                        <div class="guke">{{item.customer.realname}}</div>
                        <div class="status">{{item.status}}</div>
                    </div>
                    <div class="order_section">
                        <div class="order_section_left">
                            <img width="100" height="100" src="../../assets/images/home_05.png"/>
                        </div>
                        <div class="order_section_right">
                            <div class="price">
                                <van-icon name="gem-o"/>&nbsp;&nbsp;<span>总额:{{item.total}}</span>
                            </div>
                            <div class="time">
                                <van-icon name="underway-o"/>&nbsp;&nbsp;<span>下单时间:{{item.orderTime |datefmt}}</span>
                            </div>
                            <div class="content">
                                <van-icon name="medel-o" />&nbsp;&nbsp;<span>服务内容:{{}}</span>
                            </div>
                            <div class="address">
                                <van-icon name="location-o"/>&nbsp;&nbsp;<span>服务地址:{{item.address.province}}&nbsp;{{item.address.city}}&nbsp;{{item.address.area}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="order_footer">
                        <van-button plain hairline 
                        type="danger" 
                        size="small"
                        round 
                        style="margin-right:2em"
                        @click.prevent="rejectorderhandler(item.id)"
                        >拒绝</van-button>
                        <van-button 
                        plain hairline 
                        type="primary" 
                        size="small" 
                        round 
                        @click.prevent="takeorderhandler(item.id)">接单</van-button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import {get} from '@/http/axios'
export default {
   data(){
        return{
            
        }
    },
    computed:{
        ...mapState("order",["djdorder"]),
        ...mapState("order",['info','token'])
    },
    methods:{
        ...mapActions("order",["infoHandler","orderfindall"]),
        ...mapActions("home",["takeorder","rejectorder"]),
        takeorderhandler(id){
            this.takeorder(id)
            .then(()=>{
                 // 查询所有订单
                this.orderfindall(this.info);
            })
        },
        rejectorderhandler(id){
            this.rejectorder(id)
            .then(()=>{
                // 查询所有订单
                this.orderfindall(this.info);
            })
        }
    },
    created(){
         this.infoHandler(this.token)
        .then(()=>{
             // 查询所有订单
            this.orderfindall(this.info);
        })
    }
}
</script>
<style scoped>
    ul.order{
        margin-bottom: 50px;
    }
    ul.order li{
        border:1px solid #ededed;
        border-radius: 1em 1em 0 0;
        margin-top: .5em;
        /* background-color: aliceblue; */
    }
    .order_header{
        height:2em;
        line-height: 2em;
        border-bottom: 1px solid #ededed;
    }
    .guke{
        float:left;
        margin-left: 2em;
    }
    .status{
        float:right;
        margin-right: 2em;
        color: red;
    }
    .order_section{
        line-height: 1.5em;
        margin: .5em;
    }
    .order_section_left{
        float: left;
    }
    .order_section_right{
        margin-left: 102px;
    }
    .order_footer{
        /* background-color: #ededed; */
        padding:.5em;
        padding-left:13em;
    }
</style>