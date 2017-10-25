import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  loading:false,
  playStatus:false,
  listStatus:false,
  tracks:[],
  duration:0,
  currentTime:0,
  lyric:'',
  url:'',

  list:[],
  listShow:false
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
