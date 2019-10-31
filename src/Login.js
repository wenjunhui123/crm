import Vue from 'vue';
import Login from './Login.vue';
import ElementUI from 'element-ui';
import './assets/reset.min.css';
import './assets/common.less';
import "element-ui/lib/theme-chalk/index.css";
import store from './store/index'


Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Login),
}).$mount('#login')