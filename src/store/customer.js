import {
  login
} from '../api/requstCustomer';
export default {
  namespaced:true,
  state: {
    userPerson: null,
    power:null
  },
  getter: {},
  mutation: {
    login(state, payload) {
      state.userPerson = payload;
    }
  },
  actions: {
    userLogin(context) {
      let loginName = "login";
      login().then(result => {
        console.log(result)
        if (parseInt(result.code) === 0) {
          console.log(1)
          context.commit(loginName, result.power);
          
        }
      })
    }
  },
}