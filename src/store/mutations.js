import {
  LOADING
} from "./mutations_type";
export default {
  [LOADING](state,loading){
    state.loading = loading
  }
}
