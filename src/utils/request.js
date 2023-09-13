import axios from 'axios'
import {useUserStore} from '../store/user'

//创建axios对象
const service=axios.create()

//请求拦截器
service.interceptors.request.use(config=>{
    const useStore =useUserStore()
    let token =useStore.token
    if(token){
        config.headers['Authorization']=token
    }
    return config
},error=>{
    return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response=>{
    return response.data
},error=>{
    return Promise.reject(error)
})

export default service