import request from '@/utils/request.js'
//创建Token
export function createToken(){
    return request({
        url:'/api/token/createToken',
    })
}