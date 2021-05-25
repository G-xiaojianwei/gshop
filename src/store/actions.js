import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
 } from './mutations-types' 

 import {
     requestAddress,
     requestCategory,
     requestShops
 } from '../until/api'

 export default {

    //异步获取地址
    async getAddress({commit,state}){
        const geohash=state.latitude + ',' + state.longitude
        const result= await requestAddress(geohash)
        if(result.code === 0){
            const address=result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },

     //异步获取商品分类
     async getCategory({commit}){
        const result= await requestCategory()
        if(result.code === 0){
            const categorys=result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },


     //异步获取商家列表
     async getShops({commit,state}){
        const result= await requestShops(state.latitude,state.longitude)
        if(result.code === 0){
            const shops=result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    }

 }