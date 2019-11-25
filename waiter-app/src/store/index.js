import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './modules/login'
import order from './modules/order'
import user from './modules/uesr'
import home from './modules/home'
import address from './modules/address'

const store = new Vuex.Store({
  modules:{
    login,
    order,
    user,
    home,
    address
  }
})

export default store