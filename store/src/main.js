import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import VueResource from 'vue-resource';
import axios from 'axios';

// 
Vue.prototype.$http = axios;
axios.defaults.withCredentials = true;
Vue.use(VueResource);
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next)=>{
  console.log('to',to,'from',from,'next',next)

  if (to.meta.requiresAuth){
      const api = "https://vue-course-api.hexschool.io/api/user/check";
      axios.post(api).then((response) =>{
        console.log(response.data);
        if (response.data.success){
          next();
        }
        else{
          console.log(response.data.message);
          next();
        }
      });
    console.log('這裡需要驗證')
  }else{
    next();
  }
});