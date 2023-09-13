<template>
  <footer>
    <div class="foot-main">
    <div class="foot-logo">
        <img class="logo02" src="src/assets/img/logo02.png">
        <img class="factory" src="src/assets/img/foot-factory.png">
    </div>
    <div class="foot-c">
        <ul>
            <li>关于我们</li>
            <li>|</li>
            <li>联系我们</li>
            <li>|</li>
            <li>意见反馈</li>
            <li>|</li>
            <li>版权声明</li>
        </ul>
        <div>Copyright 2023 yqw.com 汉ICP备</div>
    </div>
    <div class="wx">
        <ul>
            <li>
                <img src="https://img1.baidu.com/it/u=3399068960,832185498&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500">
                <span>官方微信</span>
            </li>
            <li>
                <img src="https://img2.baidu.com/it/u=1897061819,2616491174&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">
                <span>指导老师微信</span>
            </li>
        </ul>
    </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
footer{
    width: 100%;
    height: 187px;
    background: #3483ff;
}
.foot-main{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    height: 187px;
    margin: 0 auto;
}
footer .logo02{
    width: 127px;
    height: 50px;
}
footer .factory{
    width: 127px;
    height: 110px;
}
.foot-c{
    font-size: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 31px;
}
.foot-c ul{
    display: flex;
    color: #fff;
}
.wx ul{
    display: flex;
    color: #fff;
    font-size: 12px;
}
.wx ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.wx ul li+li{
    margin-left: 10px;
}
.wx img{
    width: 70px;
    height: 70px;
}
.wx span{
    margin-top: 10px;
}
.foot-logo{
    display: flex;
    align-items: center;
}
</style>