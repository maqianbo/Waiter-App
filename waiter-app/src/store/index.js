import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './modules/login'
import order from './modules/order'
import user from './modules/uesr'
import home from './modules/home'

const store = new Vuex.Store({
  modules:{
    login,
    order,
    user,
    home
  }
})

export default store