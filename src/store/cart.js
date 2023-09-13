import { defineStore } from 'pinia'
export const useCartStore = defineStore({
  id: 'cart',
  state: () => {
    return {
     cartList:[],//购物车数据
     select:[],//选中的商品id
     order:[],//结算商品
    }
  },
  getters:{
    isChecked(){
        return this.select.length==this.cartList.length
    },
    //总价和数量
    total(){
        this.order = [];
        let total={
            price:0,
            number:0
        }
        this.cartList.forEach(v=>{
            this.order.push({
                id:v.courseId,
                number:1
              })
            if(this.select.indexOf(v.id) !=-1){
                total.price+=v.counter*v.discountPrice
                total.number=this.select.length
            }
        })
        return total
    }
  },
  actions:{
    //存储购物车数据
    addCart(list){
       list.forEach(v=>{
            v['check']=true
            this.select.push(v.id)
        })
        this.cartList=list
    },
    //全选
    all(){
        this.select=this.cartList.map(v=>{
            v['check']=true
            return v.id
        })
    },
    //全不选
    unAll(){
        this.cartList.forEach(v=>{
            v['check']=false
        })
        this.select=[]
    },
    //单选
    itemChecked(index){
        let id =this.cartList[index].id
        let idx=this.select.indexOf(id)
        if(idx>-1){
            this.cartList[index].check=false
            this.select.splice(idx,1)
        }else{
            this.cartList[index].check=true
            this.select.push(id)
        }
    }
  },
})