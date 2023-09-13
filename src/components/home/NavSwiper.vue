<template>
    <div class="nav-swiper">
      <div class="nav-swiper-main">
          <div class="swiper-t">
              <ul @mouseleave="mouseOut">
                  <li 
                  v-for="item in firstList" 
                  :key="item.id" 
                  @mouseenter="mouseHover(item.id)"
                  :class="item.id==currentIndex ? 'active':''"
                  >
                      <span>{{item.categoryName}}</span>
                      <el-icon><ArrowRight /></el-icon>
                  </li>
                  <div class="active-r" v-if="isShow">
                    <div class="active-r-t">
                        <h3 class="active-title">基础知识</h3>
                        <div>
                        <div>知识点:</div>
                        <ul>
                            <li 
                            v-for="item in secondList"
                            :key="item.id"
                            >{{item.categoryName}}</li>
                        </ul>
                    </div>
                    </div>
                    <div class="active-r-b">
                        <ul>
                            <li
                            v-for="item in courseList"
                            :key="item.id"
                            >
                                <img :src="item.courseCover">
                                <div>
                                    <div class="active-course-title">{{item.categoryName}}</div>
                                    <div class="active-course-type">{{courseTypeFn(item.courseLevel)}}*{{item.clicks}}人报名</div>
                                    <div class="active-course-price">免费学习</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                  </div>
              </ul>
              <div>
                  <el-carousel :interval="3000" arrow="always">
                  <el-carousel-item v-for="item in sliderList" :key="item.id">
                  <img :src="item.imageUrl">
                  </el-carousel-item>
                  </el-carousel>
              </div>
          </div>
          <ul class="swiper-b">
            <li>
                <h3>
                    <img src="@/assets/img/chuji.png">
                </h3>
                <div>
                    <h4>初级课程</h4>
                    <span>入门快,岗位多</span>
                </div>
            </li>
            <li>
                <h3>
                    <img src="@/assets/img/chuji.png">
                </h3>
                <div>
                    <h4>初级课程</h4>
                    <span>入门快,岗位多</span>
                </div>
            </li>
            <li>
                <h3>
                    <img src="@/assets/img/chuji.png">
                </h3>
                <div>
                    <h4>初级课程</h4>
                    <span>入门快,岗位多</span>
                </div>
            </li>
            <li>
                <h3>
                    <img src="@/assets/img/chuji.png">
                </h3>
                <div>
                    <h4>初级课程</h4>
                    <span>入门快,岗位多</span>
                </div>
            </li>
            <li>
                <h3>
                    <img src="@/assets/img/chuji.png">
                </h3>
                <div>
                    <h4>初级课程</h4>
                    <span>入门快,岗位多</span>
                </div>
            </li>
          </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ArrowRight} from '@element-plus/icons-vue'
  import { onBeforeMount } from 'vue';
  import { getSliders } from '../../utils/api/slider';
  import {getFirstCategorys,getSecondCategorys,courseSearch} from '../../utils/api/course';
  import courseType from '../../mixins/courseType';
  let {courseTypeFn}=courseType() 

  //轮播图数据
  let sliderList=ref([])
  //一级分类数据
  let firstList=ref([])
  //右侧数据切换
  let isShow=ref(false)
  //二级分类数据
  let secondList=ref([])
  //课程数据
  let courseList=ref([])
  //控制li的显示类
  let currentIndex=ref('')
  onBeforeMount(()=>{
    getSliders().then(res=>{
        sliderList.value=res.data.list
    })
    getFirstCategorys().then(res=>{
        firstList.value=res.data.list
    })
  })
  //鼠标移入
  const mouseHover=(id)=>{
    isShow.value=true
    currentIndex.value=id
    getSecondCategorys({
        categoryId:id
    }).then(res=>{
        secondList.value=res.data.list
    })
    courseSearch({
        pageNum:1,
        pageSize:4,
        entity:{
            firstCategory:id
        }
    }).then(res=>{
        courseList.value=res.data.pageInfo.list
    })
  }
  //鼠标移出
  const mouseOut=()=>{
    isShow.value=false
    currentIndex.value=''
  }
  </script>
  
  <style scoped>
  .nav-swiper{
      background: url('@/assets/img/transitionbg.png') no-repeat;
      width: 100%;
      height: 600px;
  }
  .nav-swiper-main{
      width:1000px;
      padding: 47px 0;
      margin: 0 auto;
  }
  .swiper-t{
      display: flex;
      height: 373px;
      border-radius: 11px 11px 0px 0px;
  }
  .swiper-t>ul{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 160px;
      height: 100%;
      background: #2b283d;
      border-radius: 11px 0px 0px 0px;
      position: relative;
  }
  .active-r{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top:0;
    left: 160px;
    width: 724px;
    z-index: 999;
    height: 373px;
    background: #ffffff;
    border-radius: 0px 11px 0px 0px;
  }
  .active-r-t{
    padding:23px 30px;
  }
  .active-r-t>div{
    display: flex;
    margin-top: 11px;
  }
  .active-r-t>div ul{
    display: flex;
    flex-wrap: wrap;
    margin-left: 7px;
  }
  .active-r-t>div ul li+li{
    margin-left: 20px;
  }
  .active-r-b>ul li>div{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left: 4px;
  }
  .active-course-title{
    font-size: 14px;
    color: #333333;
  }
  .active-course-type{
    font-size: 14px;
    color: #808080;
  }
  .active-course-price{
    font-size: 14px;
    color: #3586ff;
  }
  .active-r-b{
    width: 724px;
    height: 217px;
    background: #f3f5f6;
  }
  .active-r-b>ul{
    display: flex;
    padding: 0 30px;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
  }
  .active-r-b>ul li{
    display: flex;
    width: 50%;
  }
  .active-r-b>ul li img{
    width: 140px;
    height: 81px;
  }
  .swiper-t>ul>li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 120px;
      height: 37px;
      padding: 0 20px;
      font-size: 16px;
      color:#f2f2f2;
      cursor: pointer;
  }
  .swiper-t>div{
      width: 840px;
      height: 373px;
  }
  .swiper-b{
    display: flex;
  }
  .swiper-b li{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 213px;
    height: 133px;
    background: #ffffff;
    border-radius: 0px 0px 0px 11px;
    text-align: center;
    cursor: pointer;
  }
  .swiper-b li img{
    width: 64px;
    height: 64px;
  }
  .active{
    background: #16e6f0;
  }
  .el-carousel img{
    width: 100%;
    height: 373px;
  }
 .el-carousel{
    height: 373px;
 }
  ::v-deep .el-carousel__container{
    height: 373px;
  }
  </style>