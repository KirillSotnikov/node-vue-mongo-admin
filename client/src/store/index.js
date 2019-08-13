import Vue from 'vue'
import Vuex from 'vuex'
import team from './modules/team'
import user from './modules/user'
import images from './modules/images'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    team,
    user,
    images
  }
})