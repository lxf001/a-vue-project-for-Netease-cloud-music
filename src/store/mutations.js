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
  PUSH_LISH(state,payload){
    let index = state.list.length;
    state.list.push(payload);
    if(state.list.length>index){
      state.index = index;
    }
  },
  SET_PLAY_SONG(state){
    state.currentSong = state.list[state.index];
  }
}
