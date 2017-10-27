import {LOADING} from "./mutations_type";
import {getLyric,  getMusicUrl} from "../config/fetch";

export default {
  setLoading({    commit,    state  }, payload) {
    commit(LOADING, payload)
  },
  async pushList({    commit,    state  ,dispatch}, payload) {
    commit('PUSH_LIST', payload); //同时改变了state.index
    if (!state.list.length) {
      return;
    }
    dispatch('setPlaysong')
    console.log('currentSong', state.currentSong)
    console.log('list', state.list)
  },

  
  async setPlaysong({  state,  commit,  dispatch}) {
    //检查lyric是否存在
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
    commit('SET_CURRENTSONG', state.index);  
  }
}


