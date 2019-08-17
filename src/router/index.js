import Vue from 'vue';
import Router from 'vue-router';
import { localSto } from '@/util/localStorage';
import index from '@/components/index';
import login from '@/components/login';
import setting from '@/components/setting';
import settingEdit from '@/components/settingEdit';
Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index,
			meta: {
				title: '首页'
			}
		},
		{
			path: '/index',
			name: 'index',
			component: index,
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
			path: '/setting',
			name: 'setting',
			component: setting,
			meta: {
				title: '设置'
			}
		},
		{
			path: '/settingEdit',
			name: 'settingEdit',
			component: settingEdit,
			meta: {
				title: '设置'
			}
		}
	]
})
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	if (to.name == "index") {
		if (localSto.get("userId")) {
            
		} else {
			router.push({ name: 'login' })
		}
	};
	next();
 
})

export default router;
