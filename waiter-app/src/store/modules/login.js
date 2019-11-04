import {get,post_json,post} from "@/http/axios"
import {setToken,getToken,removeToken} from "@/utils/auth"
export default{
    namespaced:true,
    state:{
       info:{},
       token:getToken()   
    },
    getters:{},
    mutations:{
        refreshinfo(state,info){
            state.info = info;
        },
        refreshtoken(state,token){
            state.token = token;
        }
    },
    actions:{
        // 用户登录
        async login({commit},playload){
            // 将用户密码提交后台，获得token
            let response = await post_json("/user/login",playload);
            let token = response.data.token;
            // 把token存储到本地存储
            setToken(token);
            // 把token维护到状态机
            commit("refreshtoken",token);
        },
        // 通过token获取info
        async infoHandler({commit},token){
            let response = await get("/user/info",{token,token});
            // 将用户信息存储到状态机
            commit("refreshinfo",response.data);
        },
        // 用户退出时
        async logout({commit}){
            // 请求后台
            await post("/user/logout");
            // 清除本地缓存
            removeToken();
            // 清除状态机里的token，清除用户信息
            commit("refreshtoken","");
            commit("refreshinfo",{});
        }
    }
}