import {
  LOADING,
  LIST_SHOW
} from "./mutations_type";
export default {
  [LOADING](state,loading){
    state.loading = loading
  },
  toggleListShow(state){
    state.listShow = !state.listShow;
    console.log('mutation',state.listShow)
  },
  PUSH_LIST(state,payload){
    let index = state.list.length;
    let ids = state.list.map(x=>x.id);
    if(!payload.length){
      payload = [payload];
    }
    payload = payload.filter(x=>ids.indexOf(x.id)===-1);
    payload = payload.map(x=>({
      id:x.id,
      name:x.name,
      cover:x.al.picUrl,
      artist:x.ar[0].name,
      album:x.al.name
    }))
    state.list.push(...payload);
    if(state.list.length>index){
      state.index = index;
    }
  },
  //设置当前播放音乐
  SET_CURRENTSONG(state,payload){
    state.currentSong = payload;
  },
  togglePlayStatus(state){
    state.playStatus = ! state.playStatus;
  }
}
