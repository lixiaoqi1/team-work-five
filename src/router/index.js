import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/Main'
import SpotTicket from '@/pages/spotDetails/spot-home'
import Register from '@/pages/register/index'
import Tour from '@/pages/tour/Main'
import City from '@/pages/city/city-home'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/spotTicket',
      name: 'spotTicket',
      component: SpotTicket
    },
    {
    path: '/register',
    name: 'register',
    component: Register
    },
    {
    	path: '/tour',
    	name: 'Tour',
    	component: Tour
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
