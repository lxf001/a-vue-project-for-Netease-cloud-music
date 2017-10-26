import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import initMusic from '../assets/music/init.mp3'
const state = {
  loading:false,
 
  listStatus:false,
  tracks:[],
  duration:0,
  currentTime:0,
  lyric:'',
  url:'',

  playStatus:false,
  list:[],
  listShow:false,
  currentSong:{
    name: "イエスタデイ・ワンス・モア (カーペンターズ)",
    id:868830,
    cover:"http://p1.music.126.net/UmHoklpGmQCaUbkC18dEIQ==/880708813848823.jpg",
    url:initMusic,
    lyric:'',
    artist:'陈奕迅',
    album:''
  },
  index:0
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
