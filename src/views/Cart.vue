<template>
    <Header></Header>
      <div class="fixed">
        <div class="bgColor">
          <h1 class="main-shopcart">购物车</h1>
        </div>
        <div class="container">
          <div class="main">
            <div class="nav">
              <span class="left">全部课程</span>
            </div>
            <ul class="head">
              <li class="item check">
                <el-checkbox 
                v-model="isChecked"
                @change="checkAll"
                >全选</el-checkbox>
              </li>
              <li class="item classInfo">课程信息</li>
              <li class="item price">单价</li>
              <li class="item count">数量</li>
              <li class="item total">金额</li>
              <li class="item function">操作</li>
            </ul>
            <div v-if="cartList.length>0">
              <ul class="haveorder"
              v-for="(item,index) in cartList"
              :key="item.id"
              >
                <li class="order-item">
                  <el-checkbox 
                  v-model="item.check"
                  @change="cartStore.itemChecked(index)"
                  ></el-checkbox>
                </li>
                <li class="order-item info" >
                  <div class="courseimg" >
                    <img :src="item.courseCover" alt="">
                  </div>
                  <div class="course-name">{{item.courseName}}</div>
                </li>
  
                <li class="order-item">￥{{item.discountPrice}}</li>
                <li class="order-item num">{{item.counter}}</li>
                <li class="order-item totoalprice">￥{{item.discountPrice*item.counter}}</li>
                <li class="order-item delete" @click="del(item.id)">
                  <a href="javascript:;">
                    <i class="el-icon-delete"></i>
                    <span class="deletd-text">删除</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="noOrder" v-else>
              <div class="order-alert">哎呦！暂无订单</div>
            </div>
            <el-divider class="line"></el-divider>
            <ul class="foot">
              <li class="foot-item">已选课程<span class="unique">{{total.number}}</span></li>
              <li class="foot-item">合计<span class="unique">{{total.price}}</span></li>
              <li >
                <button class="btn" @click="goOrder">去结算</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <Footer></Footer>
</template>
  
<script setup>
//组件
import { onBeforeMount } from 'vue'
import Header from '../components/common/Header.vue'
import Footer from '../components/home/Footer.vue'

import {getShopCarList,deleteShopCar} from '../utils/api/cart'
import {createToken} from '../utils/api/createToken'
import {useCartStore} from '../store/cart'
import { storeToRefs } from 'pinia'
let cartStore=useCartStore()
let  {cartList,isChecked,total} =storeToRefs(cartStore)

onBeforeMount(()=>{
    getShopCarList().then(res=>{
        cartStore.addCart(res.data.list)
    })
  })

//点击全选
const checkAll=()=>{
   if(isChecked.value){
    cartStore.unAll()
   }else{
    cartStore.all()
   } 
}

import { ElMessageBox } from 'element-plus';
import { ElMessage } from 'element-plus';
//删除购物车数据
const del=(id)=>{
    ElMessageBox.confirm('确定删除该课程吗？', '删除', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      createToken().then(res=>{
        let token = res.data.token;
        deleteShopCar({
          id
        },token)
        .then(res=>{
        if( res.meta.code =='200' ){
          ElMessage.success({
            message: '删除成功!'
          });
          getShopCarList().then(res=>{
            cartStore.cartList = res.data.list;
          })
        }
      })
    })
  }).catch(() => {
    ElMessage.info({
      message: '已取消删除'
    });
  });
}
//结算页
let router = useRouter();
const goOrder = ()=>{
  router.push('/confirmOrder');
}
</script>
<style scoped>
  .fixed{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
  }
  .bgColor{
    width: 100%;
    height: 200px;
    background-color: red;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .container{
    width: 1200px;
    margin: -100px auto 50px auto;
    background: #EBEDF2;
    border-radius: 12px;
    box-shadow: 0px 2px 5px #888888;
  }
  .main{
    padding:20px;
    border-radius: 5px;
  }
  .main-shop{
    position: relative;
    display: flex;
    align-content: center;
  }
  .main-shop i{
    font-size: 35px;
    padding: 20px 10px 0 0;
    color: #FF4400;
    font-weight: bold;
  }
  .main-shopcart{
    width: 1200px;
    margin: 0 auto;
    height: 42px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    line-height: 35px;
    color: #FFFFFF;
    padding: 30px 0;
    opacity: 1;
  }
  .nav{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #E6E6E6;
  
  }
  .nav .left{
    width: 80px;
    height: 26px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    line-height: 0px;
    color: #FF4400;
    opacity: 1;
    border-bottom: 2px solid #FF4400;
  }
  .nav .right{
    width: 108px;
    height: 24px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0px;
    color: #333333;
    opacity: 0.5;
  }
  
  /* 头部开始 */
  .head{
    display: flex;
    padding: 0 10px;
    margin: 20px 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background: #FCFCFC;
    opacity: 1;
    border-radius: 0px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 2px #cccccc;
  }
  .head .item{
    width: 150px;
    font-size: 14px;
    color: #333333;
  }
  .check .all{
    margin-right: 10px;
  }
  .check .text{
    width: 1487px;
    height: 40px;
  
  }
  .classInfo{
    width: 400px!important;
    color: #333333;
  }
  /* 头部结束 */
  
  /* 订单开始 */
  .haveorder{
    display: flex;
    width: 100%;
    height: 200px;
    background: #FCFCFC;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 2px #cccccc;
  }
  .haveorder .order-item{
    height: 200px;
    line-height: 200px;
    margin:  5px;
  }
  .order-item:first-child{
    width: 30px;
  }
  .order-item{
    width: 150px;
    font-size: 16px;
    color: #333333;
  }
  .totoalprice{
    color: #E2231A;
  }
  .num{
    width: 120px !important;
    padding-left: 15px;
  }
  .info{
    display: flex;
    width: 470px !important;
    height: 200px;
    line-height: 200px;
  }
  .courseimg{
    margin:40px 20px 40px 0;
    width: 200px;
    height: 120px;
  }
  .courseimg img{
    width: 100%;
    height: 100%;
  }
  .info .course-name{
    width: 300px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .delete{
    cursor: pointer;
  }
  .deletd-text{
    margin-left: 5px;
  }
  
  /* 订单结束 */
  
  /* 暂无订单开始 */
  .noOrder{
    width: 100%;
    height: 100%;
    text-align: center;
    margin:200px 0;
  }
  .order-alert{
    height: 31px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 0px;
    color: #B5B9BC;
    opacity: 1;
    margin:20px 120px;
  
  }
  /* 暂无订单结束 */
  .foot{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #333333;
    margin-bottom: 10px;
  }
  .foot-item{
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  .unique{
    margin-left: 5px;
    font-size: 24px;
    color: #FF4400;
  }
  .btn{
    width: 120px;
    height: 40px;
    margin-left: 20px;
    border: none;
    color: #FFFFFF;
    font-size: 22px;
    border-radius: 5px;
    background: #FF4400;
    cursor: pointer;
    box-shadow: 0px 3px 5px 2px #ff727f;
  }
  </style>