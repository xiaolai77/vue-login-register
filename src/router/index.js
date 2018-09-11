import Vue from 'vue'
import Router from 'vue-router'
import {localSto } from '@/util/localStorage'

import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: HelloWorld,
			 meta: {
            title: '首页'
        }
    },
		{
			path: '/login',
			name: 'login',
			component: login,
			 meta: {
            title: '登录'
        }
		},
		{
			path: '/register',
			name: 'register',
			component: register,
			 meta: {
            title: '注册'
        }
		}
  ]
})
router.beforeEach((to, from, next) => {
	  if (to.meta.title) {
			document.title = to.meta.title;
		}
		if(to.name=="index"){
			  if(localSto.get("userId")){}else{
					router.push({ name: 'login'})
				}
		};
		next();
  // ...
})

export default router;
