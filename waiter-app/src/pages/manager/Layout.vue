<template>
    <div class="layout">
        <router-view></router-view>
        <div>
            <!-- info:{{info}}  <br/> -->
            <!-- token:{{token}} -->
            <van-tabbar v-model="active" @change="tabChangeHandler">              
                <van-tabbar-item name="/manager/home" icon="wap-home-o">首页</van-tabbar-item>
                <van-tabbar-item name="/manager/order" icon="search">订单</van-tabbar-item>
                <van-tabbar-item name="/manager/user" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            active:0
        }
    },
    computed:{
        ...mapState("login",["token","info"])
    },
    methods:{
        tabChangeHandler(path){
            this.$router.push({path});
        },
        ...mapActions('login',["infoHandler"])
    },
    created(){
        if(this.token){
            // 用token查询用户信息
           this.infoHandler(this.token);
        }else{
            // 提示token失效
            this.$toast('用户信息丢失，请重新登录');
            this.$router.push({path:'/'})
        }
    }
}
</script>
<style scoped>

</style>