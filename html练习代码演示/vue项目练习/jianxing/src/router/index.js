import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import session from '@/components/session'
import end from '@/components/end'
import search from '@/components/search'
import miss from '@/components/miss'
import scoped from '@/components/scoped'

const extend = () => import('@/components/extend')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      	 {
    	path: '/home',
    	name: '/home',
    	component: home
	    },
	    {
	    	path: '/session',
	    	name: '/session',
	    	component: session
	    },
	    {
	    	path: '/end',
	    	name: '/end',
	    	component: end
	    },
	    {
	    	path: '/extend',
	    	name: 'extend',
	    	component: extend
	    },
	    {
	    	path: '/scoped',
	    	name: '/scoped',
	    	component: scoped
	    }
      ],
      redirect: '/end'
    },
    {
    	path: '/search',
    	name: 'search',
    	component: search
    },


    {
    	path: '*',
    	name: 'miss',
    	component: miss
    }
  ]
})
