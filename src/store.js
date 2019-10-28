import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    // listId:0,
    // checkId:0,
  },
  mutations: {
    // SETlistId(state, listId){
    //   state.listId = listId
    // },
    // SETcheckId(state, checkId){
    //   state.checkId = checkId
    // },
  },
  actions: {
    // SETlistIdfn(context,checkId,listId){ //context是個參數，有包含很多功能
    //   context.commit('SETlistId',listId)
    //   context.commit('SETcheckId', checkId)
    // }
  }
})
