import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'

Vue.use(VueRouter);

//axios 默认请求连接
axios.defaults.baseURL = "https://axios-app-b8cca.firebaseio.com/";

// 配置Vue原型 (在任何组件中都可以正常使用axios)
Vue.prototype.http = axios;


const router = new VueRouter({
  routes,
  mode:"history",
  scrollBehavior(to, from, savedPosition) {
    //return { x:0, y:100 }
    //return { selector: '.btn'}

    // if (savedPosition) {
    //   return savedPosition;
    // } else {
    //   return { x: 0, y: 0 };
    // }
  }
})

//全局守卫
//前置守卫
// router.beforeEach((to, from, next) => {
//   if(['/login', '/register'].includes(to.path)){
//     next();
//   }else{
//     alert("您还没登录，请先登录！");
//   }
// })

//后置守卫
// router.afterEach((to, from)=>{
//   alert("45646");
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
