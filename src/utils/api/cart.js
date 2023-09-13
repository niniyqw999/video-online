import request from '@/utils/request.js'


//获取购物车商品
export function getShopCarList(){
    return request({
        url:'/api/shopcar/getShopCarList',
    })
}
//删除购物车商品
export function deleteShopCar( params,token ){
	return request({
		url:'/api/shopcar/deleteShopCar',
		params,
		headers:{
			token
		}
	})
}
//加入购物车商品
export function addShopCar(data,token){
	return request({
		url:'/api/shopcar/addShopCar',
        method: 'post',
		data,
        headers:{
			token
		}
	})
}
//去结算
export function settlement(data){
	return request({
		url:'/api/order/settlement',
        method: 'post',
		data
	})
}
//支付宝支付
export function alipayOrder(data){
	return request({
		url:'/api/pay/alipay/createOrder',
        method: 'post',
		data
	})
}
//查询支付宝订单状态
export function queryAlipay(params){
	return request({
		url:'/api/pay/alipay/queryOrder',
		params
	})
}

//支付宝支付
export function wxpayOrder(data){
	return request({
		url:'/api/pay/wxpay/createOrder',
        method: 'post',
		data
	})
}
//查询支付宝订单状态
export function queryWxpay(params){
	return request({
		url:'/api/pay/wxpay/queryOrder',
		params
	})
}