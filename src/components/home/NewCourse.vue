<template>
  <div class="new-course">
    <div class="new-course-main">
        <div class="new-course-t">
            <div class="title-hot">
                <div class="hot">HOT</div>
                <div class="hot-c"></div>
            </div>
            <div class="title-txt">新上好课</div>
        </div>
        <ul class="new-course-b">
            <li v-for="item in newList" :key="item.id" @click="goDetail(item.id)">
                <img :src="item.courseCover">
                <div class="course-content">
                    <h3>{{item.courseName}}</h3>
                    <div>{{courseTypeFn(item.courseLevel)}} * {{item.clicks}}人报名</div>
                    <div class="price">
                        <div class="price-vip">会员专享</div>
                        <div class="price-total">¥ {{item.discountPrice}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import courseType from '../../mixins/courseType';
let {courseTypeFn}=courseType()
import { mostNew } from '../../utils/api/course';

let newList =ref([])
onBeforeMount(()=>{
    mostNew({
        pageNum:1,
        pageSize:8
    }).then(res=>{
        newList.value=res.data.pageInfo.list
    })
})

let router =useRouter()
const goDetail=(id)=>{
    router.push({
        path:'/course-Info',
        query:{
            id
        }
    })
}
</script>

<style scoped>
.new-course-main{
    width: 1000px;
    margin: 0 auto;
}
.new-course-t{
    display: flex;
}
.title-hot .hot{
    text-align: center;
    width: 65px;
    color: #fff;
    height: 25px;
    line-height: 25px;
    background: linear-gradient(90deg,#ff727f 0%,#fc685c 100%);
    border-radius: 5px 0px 5px 5px;
}
.title-hot{
    display: flex
}
.title-hot .hot-c{
    width:0 ;
    height: 0;
    border: 3px solid #fc685c;
    border-bottom-color: transparent;
    border-right-color: transparent;
}
.title-txt{
    position: relative;
    margin-left: 5px;
    z-index: 999;
    font-size: 23px;
    line-height: 25px;
    color: #333333;
}
.title-txt:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 120%;
    margin-left: -10%;
    height: 9px;
    background:linear-gradient(90deg,#fbf84f 0%,#fea935 100%); 
    border-radius: 5px;
}
.new-course{
    padding: 38px 0;
    background: #f3f5f9;
}
.new-course-b{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.new-course-b li{
    float: left;
    width: 240px;
    height: 275px;
    background: #ffffff;
    box-shadow: 1px 3px 3px rgba(27,39,94,0.1);
    border-radius: 5px;
    margin-top: 38px;
}
.new-course-b li img{
    width: 240px;
    height: 153px;
}
.course-content{
    padding: 7px 16px;
}
.course-content h3{
    font-size: 12px;
    color: #333333;
    margin-top: 8px;
}
.course-content >div{
    font-size: 12px;
    color:#808080;
    margin-top: 20px;
}
.price{
    display: flex;
    margin-bottom: 10px;
}
.price-vip{
    background: linear-gradient(90deg,#ff928e 0%,#fe7062 99%);
    border-radius: 16px 0px 16px 0px;
    text-align: center;
    color: #fff;
    width:64px ;
    height: 16px;
}
.price-total{
    font-size: 12px;
    color: #ff727f;
}
</style>