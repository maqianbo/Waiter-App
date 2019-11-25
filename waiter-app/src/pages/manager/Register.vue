<template>
    <div class="register">
        <van-nav-bar title="申请注册" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-cell-group>
            <van-field v-model="form.username" placeholder="请输入用户名" label="用户名" />
            <van-field v-model="form.realname" placeholder="请输入真实姓名" label="真实姓名" />
            <van-field v-model="form.password" placeholder="设置密码" label="密码"/>
            <van-field v-model="form.telephone" placeholder="请输入手机号" label="手机号"/>
            <van-field v-model="form.qq" placeholder="请输入qq号" label="qq"/>
            <van-field v-model="address"  label="地址" @click.prevent="showPopup" />
            <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
                <van-area
                :area-list="areaList"
                :columns-placeholder="['请选择', '请选择', '请选择']"
                @confirm = "getprams"
                @cancel = "quxiao"
                />
            </van-popup>
        </van-cell-group>
        <van-button type="primary" size="large" @click.prevent="registerHandler">注册</van-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import {post} from '@/http/axios'
export default {
    data(){
        return{
            form:{
                type:'waiter',
            },
            address:"",
            show:false,
        }
    },
    computed:{
        ...mapState("address",["areaList"])
    },
     methods:{
        //  点击返回，返回到登录页面
        onClickLeft(){
            this.$router.go(-1);
        },
        // 点击地区，弹出模态框
        showPopup(){
            this.show = true;
        },
        // 把地址选择的参数传给form表单，并显示出来
        getprams(response){
            this.form.province = response[0].name;
            this.form.city = response[1].name;
            this.form.area = response[2].name;
            this.address =  response[0].name +" "+response[1].name+" "+response[2].name;
            this.show = false;
        },
        // 取消地址选择
        quxiao(){
            this.show = false;
        },
        // 注册
        async registerHandler(){
            let response = await post("/waiter/saveOrUpdate",this.form);
            if(response.status == "200"){
                this.$toast("注册成功");
                let form = this.form;
                this.$router.push({path:'./',query:{form}})
            } 
        }
    },
    created(){
    }
}
</script>
<style scoped>

</style>