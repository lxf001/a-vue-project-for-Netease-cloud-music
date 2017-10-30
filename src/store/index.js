import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import initMusic from '../assets/music/init.mp3'
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
    name: "イエスタデイ・ワンス・モア (カーペンターズ)",
    id:868830,
    cover:"http://p1.music.126.net/UmHoklpGmQCaUbkC18dEIQ==/880708813848823.jpg",
    url:initMusic,
    lyric:'[00:01]abc\n[99:99]aa`',
    artist:'陈奕迅',
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
