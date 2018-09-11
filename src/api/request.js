import axios from 'axios'
import { cache } from './cache'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {// 在发送请求之前做些什么
    return config;
  }, function (error) {// 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {// 对响应数据做点什么
      console.log(response.data);
			if(response.data.code=="LOGIN_OVER_TIME"){
					window.location.href="/static/login/login.html"
					return;
			}else if(response.data.code=="200"){
				  return response.data.data;
			}else{
				  return Promise.reject(response.data);
			}
		
  }, function (error) {// 对响应错误做点什么
      return Promise.reject(error);
  });

function operateData(a,b){//a:配置参数  b:原始数据
			 if(a&&Array.isArray(a)&&Array.isArray(b)){
						let newRes=b.map( item=>{//过滤b
									for(let i in a[0]){//便利a数组里的对象
											if(!item[i]){
													item[i]=a[0][i];
											} 
									}return item;
						})
						return newRes;
			 }else if(a&&Array.isArray(a)&&!Array.isArray(b)){
					for(let i in a[0]){//便利a数组里的对象
							if(!b[i]){
									b[i]=a[0][i];
							} 
					}return b;
			 }else{return b;}
}	
	
export default service