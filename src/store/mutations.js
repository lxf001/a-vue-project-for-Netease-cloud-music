
export default {
  setLoading(state,loading){
    state.loading = loading
  },
  setPlayStorage(state,payload){
    state.playStorage = payload;
  },
  toggleListShow(state){
    state.listShow = !state.listShow;
  },
  pushList(state,payload){
    let index = state.list.length;
    let ids = state.list.map(x=>x.id); //播放列表歌曲id的数组
    if(!payload.length){ //把单个歌曲转为数组
      payload = [payload];
    }
    let repetition = payload.filter(x=>ids.indexOf(x.id)>=0);//获取重复歌曲的数组
    let repeIndex = 0;
    if(repetition.length>0){
      repeIndex = ids.indexOf(repetition[0].id);    //重复歌曲在播放列表中的位置
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
    }else{
      state.index = repeIndex; //如果没有添加新的歌曲，则播放重复歌曲的第一首
    }
  },
  //设置当前播放音乐
  SET_CURRENTSONG(state){
    state.currentSong = state.list[state.index];
  },
  togglePlayStatus(state,payload){
    state.playStatus = ! state.playStatus;
  },
  //设置播放状态为true
  play(state,payload){
    state.playStatus = true;
    
  },
  
  setCurrentTime(state,payload){
    state.currentTime = payload;
  },
  setDuration(state,payload){
    state.duration = payload;
  }
}
