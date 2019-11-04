<template>
    <div id="user">
        <div class="header">
            我的
        </div>
        <div class="message">
            <van-row>
                <van-col span="8">
                    <van-image width="100" height="100"   fit="fill" round :src="info.avatar" />
                </van-col>
                <van-col span="8">
                    <van-row> 
                        <van-col span="24" class="message_name">{{info.name}}</van-col>
                        <van-col span="24" class="message_introduction">评定：{{info.introduction}}</van-col>
                    </van-row>
                </van-col>
                
            </van-row>
        </div>
       <van-cell-group>
            <van-cell title="我的收入" border value="" is-link icon="debit-pay" @click.prevent="revenue"/>
            <van-cell title="我的订单"  border value="" is-link  icon="orders-o" @click.prevent="myOrder"/>
            <van-button  type="primary" size="large" @click.prevent="loginouthandler" >退出</van-button>
       </van-cell-group>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState("login",["info"])
    },
    methods:{
        ...mapActions('login',['logout']),
        // 退出登录
        loginouthandler(){
            this.logout()
            .then(()=>{
                this.$router.push({path:'/'})
            })           
        },
        // 点击收入，跳转收入界面
        revenue(){
             this.$router.push({path:'/revenue'})
        },
         // 点击收入，跳转收入界面
        myOrder(){
             this.$router.push({path:'/myorder'})
        }
    }
}
</script>
<style scoped>
    #user{
        text-align: center;
    }
    .header{
        line-height: 2em;
        margin-bottom:1em;
        border-bottom:1px solid #ededed;
    }
    van-cell_title{
        text-align: left;
    }
    .message_name{
        margin-top:20px;
        font-size:20px;
        font-weight:  blod;
        text-align: left;
    }
    .message_introduction{
        margin-top:10px;
        font-size:12px;
        text-align: left;
    }
</style>