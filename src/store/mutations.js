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
    let ids = state.list.map(x=>x.id); //播放列表歌曲id的数组
    if(!payload.length){
      payload = [payload];
    }
    payload = payload.filter(x=>ids.indexOf(x.id)===-1);//过滤掉播放列表中已经存在的歌曲
    payload = payload.map(x=>({       //过滤不必要的property
      id:x.id,
      name:x.name,
      cover:x.al.picUrl,
      artist:x.ar[0].name,
      album:x.al.name,
      url:x.url
    }))
    state.list.push(...payload);   
    if(state.list.length>index){  //改变对应播放表里中正在播放歌曲的index
      state.index = index;
    }
  },
  //设置当前播放音乐
  SET_CURRENTSONG(state,index){
    state.currentSong = state.list[index];
    state.playStatus = false;
  },
  togglePlayStatus(state,payload){
    state.playStatus = ! state.playStatus;
  },
  play(state,payload){
    state.playStatus = true;
  },
  setCurrentTime(state,payload){
    state.currentTime = payload;
    console.log('current time',state.currentTime)
  },
  setDuration(state,payload){
    state.duration = payload;
    console.log('duration',state.duration);
  }
}
