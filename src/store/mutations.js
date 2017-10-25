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
  
}
