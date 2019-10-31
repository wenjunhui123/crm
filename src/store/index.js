import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import customer from './customer';
import system from './system';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    customer,
    system
  },
  state:{
    isLoging:null
  },
  mutation:{},
  getter:{},
  action:{},
  plugins: [createLogger()]
})