import request from '@/utils/request.js'

//用户名密码登录
export function loginByJson(data){
    return request({
        url:'/api/u/loginByJson',
        method:'post',
        data
    })
}
//发送验证码
export function sendCaptcha(params){
    return request({
        url:'/api/sms/sendRegisterOrLoginCaptcha',
        params
    })
}
//验证码登录
export function loginByMobile(data){
    return request({
        url:'/api/u/loginByMobile',
        method:'post',
        data
    })
}
//获取个人信息
export function getInfo(params){
    return request({
        url:'/api/member/getInfo',
        params
    })
}
//退出登录
export function logout(){
    return request({
        url:'/api/u/logout',
    })
}