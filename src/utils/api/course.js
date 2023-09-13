import request from '@/utils/request.js'

//新上好课数据渲染
export function mostNew(data){
    return request({
        url:'/api/course/mostNew',
        method:'post',
        data
    })
}
//获取一级菜单数据
export function getFirstCategorys(){
    return request({
        url:'/api/course/category/getFirstCategorys',
    })
}
//获取二级菜单数据
export function getSecondCategorys(params){
    return request({
        url:'/api/course/category/getSecondCategorys',
        params
    })
}
//获取课程数据
export function courseSearch(data){
    return request({
        url:'/api/course/search',
        method:'post',
        data
    })
}
//获取课程详情数据
export function getDetail(params){
    return request({
        url:'/api/course/getDetail',
        params
    })
}
//检查是否有权限
export function coursecheckAuth(params){
    return request({
        url:'/api/course/checkAuth',
        params
    })
}
//下载课程资料
export function downloadAttachment(params){
    return request({
        url:'/api/course/downloadAttachment',
        params,
        reponseType:'blob'
    })
}
//播放课程
export function player(params){
    return request({
        url:'/api/player/play',
        params,
    })
}
//记录播放历史
export function recordHistory(data){
    return request({
        url:'/api/course/history/recordHistory',
        method:'post',
        data,
    })
}
//最后一次记录
export function getLastHistoryByChapterId(params){
    return request({
        url:'/api/course/history/getLastHistoryByChapterId',
        params,
    })
}