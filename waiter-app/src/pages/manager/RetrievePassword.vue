<template>
    <div class="retrievePassword">
        <van-nav-bar title="密码找回" left-text="返回" left-arrow @click-left="onClickLeft" />
        <template v-if="state">
            <van-cell-group>
                <van-field v-model="form1.username" placeholder="请输入用户名" label="用户名"/>
                <van-field v-model="form1.telephone" center clearable label="短信验证码" placeholder="请输入短信验证码">
                    <van-button slot="button" size="small" type="primary" @click.prevent="findPassword">发送验证码</van-button>
                </van-field>
            </van-cell-group>
            <!-- <van-button type="primary" size="large" >确认找回</van-button> -->
        </template>
        <template v-else>
            <van-cell-group>
                <van-field v-model="judge.password1" type="password" placeholder="请输入新密码" label="密码"/>
                <van-field v-model="judge.password2" type="password" placeholder="请再次输入新密码" label="确认密码" />
            </van-cell-group>
           <div class="button">
                <van-button type="primary" size="large" @click.prevent="resetPassword">确定</van-button>
           </div>
        </template>
    </div>
</template>
<script>
import {get,post} from '@/http/axios'
export default {
    data(){
        return{
            active:0,
            state:true,
            form1:{},
            judge:{},
            form2:{}
        }
    },
    methods:{
        //  点击返回，返回到登录页面
        onClickLeft(){
            this.$router.go(-1);
        },
        // 点击确认找回，从所有的waiter信息中查找去用户名，电话号码相同的服务员信息，获取id，如果找不到或者找得多，提示帐号或电话信息错误
        async findPassword(){
            let response = await get("/waiter/findAll");
            // 用用户名过滤
            let response1 = response.data.filter(item=>item.username == this.form1.username);
            // 电话号码过滤
            let response2 = response1.filter(item=>item.telephone == this.form1.telephone);
            // 判断服务员信息是否唯一，唯一取出id
            if(response2.length !== 1){
                this.$toast("用户名电话不匹配");
                this.form1 = {};
            }else{
                this.state = false;
                // 不能只取id,否则修改的时候，其他信息默认为空，数据会被后台清空
                this.form2 = response2[0];
            }
        },
        //点击确定按钮，判断两次密码师傅相同，若果一样，修改密码
        async resetPassword(){
            // 判断两次密码是否相同，相同就修改
            if(this.judge.password1 == this.judge.password2){
                this.form2.password = this.judge.password1;
                let response = await post("/waiter/saveOrUpdate",this.form2);
                if(response.status == "200"){
                    this.$toast("修改成功"); 
                    this.$router.push({path:'./'});
                } 
            }else{
                 this.$toast("前后密码不一致");
            }
        } 
    }
}
</script> 
<style scoped>
    .button{
        width:90%;
        margin-left: 5%;
        border-radius: 2em;                                                                
    }
</style>