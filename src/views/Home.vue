<template>
	<Header></Header>
	<NavSwiper></NavSwiper>
	<div ref="target">
	<NewCourse v-if="targetIsVisible"></NewCourse>
    </div>
	<Footer></Footer>
</template>

<script setup>
import {useIntersectionObserver} from '@vueuse/core'
import { defineAsyncComponent } from 'vue';

import Header from '../components/common/Header.vue'
import Footer from '../components/home/Footer.vue';
import NavSwiper from '../components/home/NavSwiper.vue'

const NewCourse=defineAsyncComponent(()=>
	import('@/components/home/NewCourse.vue')
)
const target=ref(null)
const targetIsVisible =ref(false)

const {stop} = useIntersectionObserver(
	target,
	([{isIntersecting}])=>{
		if(isIntersecting){
			targetIsVisible.value=isIntersecting
		}
	}
)
</script>