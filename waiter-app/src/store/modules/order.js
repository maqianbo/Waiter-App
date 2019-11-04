import {get} from '@/http/axios'
import {getToken} from "@/utils/auth"
export default{
    namespaced:true,
    state:{
        time:'',
        info:{},
        token:getToken(),
        allorder:[],
        djdorder:[],
        dfworder:[],
        dqrorder:[],
        ywcorder:[]
    },
    getters:{
       
    },
    mutations:{
        refreshinfo(state,info){
            state.info = info;
        },
        // 把数据分状态分类，并刷新数据
        refreshorder(state,response){
            // 过滤出与登录服务员相关的所有订单
            state.allorder =  response.data;
            // 待接单
            state.djdorder = state.allorder.filter(item => item.status == "待接单");
            // 待服务
            state.dfworder = state.allorder.filter(item => item.status == "待服务");
            // 待派单
            state.dqrorder = state.allorder.filter(item => item.status == "待确认");
            // 已完成
            state.ywcorder = state.allorder.filter(item => item.status == "已完成")
        }
    },
    actions:{
         // 通过token获取info
         async infoHandler({commit},token){
            let response = await get("/user/info",{token:token});
            // 将用户信息存储到状态机
            commit("refreshinfo",response.data);
        },
        // // 通过分页查询订单获取某个员工的所有订单数据
        // async orderfindall({commit,rootState}){
        //     // let response = await get("/order/query?waiterId=");
        //     let response = await get("/order/query",{waiterId:rootState.login.info.id});
        //     commit("refreshorder",response)
        // }
        // 通过分页查询订单获取某个员工的所有订单数据
        async orderfindall({commit,rootState},info){
            // let response = await get("/order/query?waiterId=");
            let response = await get("/order/query",{waiterId:info.id});
            commit("refreshorder",response)
        },
        // 完成服务
        async serviceCompleteOrder({context},id){
            await get("/order/serviceCompleteOrder",{orderId:id});
        }
        
    }
}