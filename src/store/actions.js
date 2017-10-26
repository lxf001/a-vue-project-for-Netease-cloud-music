import {
  LOADING
} from "./mutations_type";
import {
  getLyric,
  getMusicUrl
} from "../config/fetch";

export default {
  setLoading({
    commit,
    state
  }, payload) {
    commit(LOADING, payload)
  },
  async setCurrentSong({
    commit,
    state
  }, payload) {
    commit('PUSH_LIST', payload);
    if (!state.list.length) {
      return;
    }
    //check if lyric exist
    let indexSong = state.list[state.index],
      indexId = indexSong.id;
    if (!indexSong.lyric) {
      try {
        let res = await getLyric(indexSong.id);
        res = res.code === 200 ? res.lrc.lyric : '';
        state.list[state.index] = {
          lyric: res,
          ...indexSong
        };
      } catch (e) {
        console.log('get indexsong lyric', e)
      }
    }
    try {
      let res = await getMusicUrl(indexId);
      res = res.code === 200? res.data[0].url:'';
      commit('SET_CURRENTSONG',{
        url:res,
        ...state.list[state.index]
      })
    }catch(e){
      console.log('get currentsong url',e)
    }
    console.log('currentSong',state.currentSong)
    console.log('list',state.list)
    

  },
  // async setPlaysong({state,commit,dispatch},payload){

  // }
}
