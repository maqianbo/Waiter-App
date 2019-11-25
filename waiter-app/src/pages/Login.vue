<template>
    <div id="login">
    <!-- layout布局 -->
        <!-- <van-row>
            <van-image width="100%" height="150" 
            src="http://scs.ganjistatic1.com/gjfsqq/64c5827197204628b9259adf7f2d2ab4_310-235_6-0.jpg"/>
        </van-row> -->
        <div class="image">
            <div class="title">
                家政系统-服务员管理系统
            </div>
        </div>
        <div class="biaodan">
                <van-row>
                    <!-- 登录表单 -->
                    <van-cell-group>
                    <van-field  v-model="form.username" label="用户名" right-icon="question-o"
                        placeholder="请输入用户名"
                    />
                    <van-field
                        v-model="form.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                    />
                    </van-cell-group>
                <!-- /登录表单 -->
                </van-row>
                <van-row>
                    <div class="denglu">
                         <div @click.prevent="registerHandler"><span>注册账号</span></div>   
                         <div @click.prevent="findpasswordHandler"><span>忘记密码？</span></div>   
                    </div>    
                </van-row>
                <van-row>
                    <van-button type="primary" size="large" round  @click="loginHandler">登录</van-button>
                </van-row>
        </div>
        
    <!-- layout布局 -->
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
            form:{
                type:"waiter",
            }
        }
    },
    computed:{
        ...mapState("login",["token"]),
        ...mapGetters("login",[])
    },
    methods:{
        ...mapMutations("login",[]),
        ...mapActions("login",["login"]),
        // 登录
        loginHandler(){
            this.login(this.form)
            .then((response)=>{
                // 跳转到首页
                this.$router.push({path:'/manager/home'})
            })
            .catch(()=>{
                this.$toast('帐号或密码错误');
                this.form = {type:"waiter",}
            })
        },
        // 注册
        registerHandler(){
            this.$router.push('/register');
        },
        // 找回密码
        findpasswordHandler(){
            this.$router.push('/retrievePassword');
        }
    },
    created(){
        let response = this.$route.query;
        if(response.form){
            this.form.username = response.form.username;
            this.form.password = response.form.password;

        }
    }
    

}
</script>
<style scoped>
    .image{
        position: relative;
        width: 100%;
        height:200px;
        text-align: center;
       
        background:lightblue;
    }
    .title{
        position: absolute;
        top: 50%;
        left:50%;
        margin-top: -12px;
        margin-left: -150px;
        text-align: center;
        font-size: 25px;
        color:red;
    }
    .biaodan .denglu {
        height: 2em;
    }
    .biaodan{
        padding:0 1em;
    }
    .biaodan .denglu div:first-child{
        float: left;
        line-height: 2em;
        font-size: 0.5em;
        margin-left: 1.5em;
    }
    .biaodan .denglu div:last-child{
        float: right;
        line-height: 2em;
        font-size: 0.5em;
        margin-right: 1.5em;
    }
</style>