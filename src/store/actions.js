import {
  LOADING
} from "./mutations_type";

export default {
  setLoading({commit,state},payload){
    commit(LOADING,payload)
  }
}
