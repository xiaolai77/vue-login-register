import request from './request'
const apiStr='http://www.yangliutech.com/apiStr';

export function loginApi(dataJ){//登录
    return request({
        url: apiStr+'/index/login', 
        method: 'post',
		data:dataJ
    })
}
export function deviceListApi(dataJ){//设备
    return request({
        url: apiStr+'/device/list', 
        method: 'post',
		data:dataJ
    })
}

export function deviceCodeApi(id){//设备二维码
    return request({
        url: apiStr+'/device/getCode?id='+id, 
        method: 'get'
    })
}

export function settingListApi(dataJ){//设置
    return request({
        url: apiStr+'/setting/list', 
        method: 'post',
		data:dataJ
    })
}
export function settingAddApi(dataJ){//添加设置
    return request({
        url: apiStr+'/setting/add', 
        method: 'post',
		data:dataJ
    })
}
export function settingDelApi(id){//添加设置
    return request({
        url: apiStr+'/setting/del', 
        method: 'post',
        data:{id}
    })
}