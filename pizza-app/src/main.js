import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:"history"
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
