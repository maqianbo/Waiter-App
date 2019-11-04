import {get} from '@/http/axios'

export default{
    namespaced:true,
    state:{},
    getters:{},
    mutations:{},
    actions:{
        // 确认接单
        async takeorder(context,id){
            await get("/order/takeOrder",{orderId:id});
        },
        // 拒绝接单
        async rejectorder(context,id){
            await get("/order/rejectOrder",{orderId:id});
        }
    }
}