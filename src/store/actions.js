import {
  LOADING
} from "./mutations_type";
import {getLyric, getMusicUrl} from "../config/fetch";

export default {
  setLoading({commit,state},payload){
    commit(LOADING,payload)
  },
  async playSong({commit,state},payload){
    commit('PUSH_LISH',payload);
    if(!state.list.length){
      return;
    }
    let indexSong = state.list[state.index],
      indexId = indexSong.id,
      res;
    if(!indexSong.lyric){
      res =  await getLyric(indexSong.id);
      res = res.code === 200? res.lrc.lyric:'';
      console.log('我是lyric',res);
      state.list[state.index] = {lyric:res,...indexSong};
    }
    if(!indexSong.url){
      res = await getMusicUrl(indexSong.id);
      res = res.code === 200? res.data[0].url:'';
      state.list[state.index] = {url:res,...indexSong};
    }
    commit('SET_PLAY_SONG');
    console.log('indexSong',indexSong,'\n','currentSong',state.currentSong,'\n','list',state.list);

  }
}
