import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      userInfo:{}
    }
  },
  actions:{
    //设置token
  	setToken( token ){
  		this.token = token;
  	},
    //清楚token
    	clearToken(){
        this.token = '';
        this.userInfo={};
      }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [{
      key: 'xiaoluxian_user',
      storage: localStorage,
      //paths: ['token']
    }]
  }
})