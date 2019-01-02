import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    temperature:[]
  },
  getters: {
    //最高气温
    getHigh({temperature}){
      const newValue =[];
      temperature.forEach(value=>{
        if(value.high.substr(3,1) == '-'){
          newValue.push(+value.high.substr(3,2))
        }else{
          newValue.push(+value.high.substr(3,1))
        }
      })
      return newValue
    },
    //最低气温
    getLow({temperature}){
      const newValue =[];
      temperature.forEach(value=>{
        if(value.low.substr(3,1) == '-'){
          newValue.push(+value.low.substr(3,2))
        }else{
          newValue.push(+value.low.substr(3,1))
        }
      })
      return newValue
    }
  }
  ,
  mutations: {
    getValue(state,paylod){
      state.temperature = paylod;
    }
  },
  actions: {
    a_getValue(store,value){
      store.commit('getValue', value)
    }
  }
})
