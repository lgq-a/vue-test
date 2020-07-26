import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import PresonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'

export const routes = [
  {path:'/',name:"homeLink",components:{
    default:Home,
    'orderingGuide':OrderingGuide,
    'delivery':Delivery,
    'history':History
  }},
  {path:'/menu', name : 'menuLink', component:Menu},
  {path:'/admin', name : 'adminLink', component:Admin, 
    //beforeEnter: (to, from, next) => {
      //路由独享守卫
      // if(['/login', '/register'].includes(to.path)){
      //   next();
      // }else{
      //   alert("您还没登录，请先登录！");
      //   next('/login');
      // }
    //}
  },
  {path:'/login', name : 'loginLink', component:Login},
  {path:'/register', name : 'registerLink', component:Register},
  {path:'/about', name : 'aboutLink',  redirect:'/about/history', component:About, children:[
    { path:'/about/contact', component:Contact, redirect:'/about/contact/phone', name: 'contactLink', children:[
      { path:'/about/contact/personName', component:PresonName, name: 'personName' },
      { path:'/about/contact/phone', component:Phone, name: 'phoneNumber' }
    ]},
    { path:'/about/delivery', component:Delivery, name: 'deliveryLink' },
    { path:'/about/history', component:History, name: 'historyLink' },
    { path:'/about/orderingGuide', component:OrderingGuide, name: 'orderingGuideLink' },
  ]},
  {path:'*', redirect:'/'}
]