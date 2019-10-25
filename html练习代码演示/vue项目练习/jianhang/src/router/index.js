import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import child from '@/components/child'
import child2 from '@/components/child2'
import grandChild from '@/components/grandChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'HelloWorld',
	    component: HelloWorld
    },
    {
        path: '/child',
        name: 'child',
        component: child,
        children:[
        {
        	path: '/child/grandChild',
        	name: 'grandChild',
        	component: grandChild
        }
        ]

    },
    {
    	path: '/child2',
    	name: 'child2',
    	component: child2,
    	children:[
        {
        	path: '/child2/grandChild',
        	name: 'grandChild',
        	component: grandChild
        }
        ],
        redirect: '/child2/grandChild'
    },

  ]
})
