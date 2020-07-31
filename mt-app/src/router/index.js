import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//一级路由
import Goods from '@/components/goods/Goods.vue'
import Ratings from '@/components/ratings/Ratings.vue'
import Seller from '@/components/seller/Seller.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods',
    },
    {
      path: '/goods',
      name: 'goodsLink',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratingsLink',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'sellerLink',
      component: Seller
    }
  ],
  mode:"history",
  linkActiveClass: 'active'
})
