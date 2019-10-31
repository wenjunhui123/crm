import Vue from 'vue';
import Index from './Index.vue';
import store from './store/index';
import router from './routers/index';
import ElementUI from 'element-ui';
import './assets/reset.min.css';
import './assets/common.less';
import 'element-ui/lib/theme-chalk/index.css';
import {isLogin} from './api/requstCustomer';

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.directive('power',{inserted(el,binding){
  let arrVal = binding.split('|'),
      power = store.state.customer.power,
      flag = false ;
      flag = binding.some(item=>{
        return power.include(item)
      });
    !flag?el.parentNode.removeChild(el):null;  
}
})
//检测是否登录：只有保证是登陆状态，才让其继续渲染组件等
isLogin().then(result=>{
  if(parseInt(result.code)===0){
    store.state.isLoging = true;
    console.log(store.state.isLoging);
    new Vue({
      store,
      router,
      render: h => h(Index)
    }).$mount('#index');
    return;
  }
   Vue.prototype.$alert("只有登录的用户才能访问系统，请您先登录！",'系统提示',{
     callback:action=>{
       location.href = 'login.html';
       return;
     }
   })
})





