import request from '@/utils/request.js'

export function getSliders(data){
    return request({
        url:'/api/slider/getSliders',
    })
}