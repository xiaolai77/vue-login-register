import request from './request'
const apiStr='http://rap.zjiansoft.com/mockjsdata/1/api';

export function loginApi(dataJ){//登录
    return request({
        url: apiStr+'/user/login.htm', 
        method: 'post',
		data:dataJ
    })
}