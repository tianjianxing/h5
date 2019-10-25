import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import section from '@/components/section'
import footer from '@/components/footer'
import sectionChild from '@/components/sectionChild'
import footerChild1 from '@/components/footerChild1'
import footerChild2 from '@/components/footerChild2'
import footerChild3 from '@/components/footerChild3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/header',
    	name: 'header',
    	component: header
    },
    {
    	path: '/section',
    	name: 'section',
    	component: section
    },
    {
    	path: '/footer',
    	name: 'footer',
    	component: footer,
    	children:[
    		{
    			path: '/footer/footerChild1',
    			name: 'footerChild1',
    			component: footerChild1,
    		},
    		{
    			path: '/footer/footerChild2',
    			name: 'footerChild2',
    			component: footerChild2,
    		},
    		{
    			path: '/footer/footerChild3',
    			name: 'footerChild3',
    			component: footerChild3,
    		}
    	]
    },
    {
    	path: '/sectionChild',
    	name: 'sectionChild',
    	component: sectionChild
    }
  ]
})
