import {LOADING} from "./mutations_type";
import {getLyric,  getMusicUrl} from "../config/fetch";

export default {
  
  async setCurrentSong({state,commit,dispatch},index=state.index) {
    if (!state.list.length) {
      return;
    }
    
    index = index<0? 0 :(index>=state.list.length? 0: index);//判断index范围
    state.index = index;
      //检查lyric是否存在
    let indexSong = state.list[index],
      indexId = indexSong.id;
    if (!indexSong.lyric) {
      try {
        let res = await getLyric(indexId);
        res = res.code === 200 ? (res.lrc?res.lrc.lyric:'歌词未收录') : '';
        state.list[index] = {
          lyric: res,
          ...indexSong
        };
      } catch (e) {
        console.log('get indexsong lyric', e)
      }
    }
    commit('SET_CURRENTSONG'); 
    
     
  }
}


