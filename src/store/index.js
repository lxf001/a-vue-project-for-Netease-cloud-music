import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const state = {
  activeTab:'high',//music 选项卡状态
  loading:true,
  listStorage:[],//歌单封面图片缓存
  playStorage:[],//歌曲缓存
  duration:0,
  currentTime:0,

  playStatus:false,
  list:[],
  listShow:false,
  currentSong:{
    name: "未添加歌曲",
    id:868830,
    cover:require('../assets/init.png'),
    url:'',
    lyric:'[00:01]没有添加歌曲\n[99:99]没有添加音乐`',
    artist:'无',
    album:''
  },
  index:0,
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
