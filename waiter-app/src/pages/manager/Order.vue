<template>
    <div id="order">
        <div class="header">
            订单
        </div>
        <div class="active">
            <!-- 状态栏 -->
                <van-tabs active="标签 1">
                    <van-tab title=" 所有订单" name="所有订单">
                        <ul class="order">
                            <li v-for="item in allorder" :key="item.id">
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
                            </li>
                        </ul>
                    </van-tab>
                    <van-tab title="待接单" name="待接单">
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
                            </li>
                        </ul>
                    </van-tab>
                    <van-tab title=" 待服务" name="待服务">
                        <ul class="order">
                            <li v-for="item in dfworder" :key="item.id">
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
                                    <van-button 
                                    plain hairline 
                                    type="primary" 
                                    size="small" 
                                    round 
                                    @click.prevent="serviceCompleteOrderHanlder(item.id)">已完成</van-button>
                                </div>
                            </li>
                        </ul>
                    </van-tab>
                    <van-tab title="待确认" name="待确认">
                        <ul class="order">
                             <li v-for="item in dqrorder" :key="item.id">
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
                            </li>
                        </ul>
                    </van-tab>
                    <van-tab title="完成订单" name="完成订单">
                        <ul class="order">
                             <li v-for="item in ywcorder" :key="item.id">
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
                            </li>
                        </ul>
                    </van-tab>
                </van-tabs>
            <!-- 状态栏 -->
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
        ...mapState("order",["allorder","djdorder","dfworder","dqrorder","ywcorder"]),
        ...mapState("order",['info','token'])
    },
    methods:{
        ...mapActions("order",["infoHandler","orderfindall","serviceCompleteOrder"]), 
        // 完成服务
        serviceCompleteOrderHanlder(id){
            this.serviceCompleteOrder(id)
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
    .header{
        text-align:center;
        line-height: 2em;
        border-bottom:1px solid #ededed;
    }
    ul.order{
        margin-bottom: 50px;
    }
    ul.order li{
        border:1px solid #ededed;
        border-radius: 1em 1em 0 0;
        margin-bottom: .5em;
        background-color: aliceblue;
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
        padding-left:18em;
    }
</style>