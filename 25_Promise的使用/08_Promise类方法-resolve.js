/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:37:25
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 03:10:23
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/08_Promise类方法-resolve.js
 */
const promise = new Promise((resolve, reject) => {
    resolve('resolve')
})


Promise.resolve('resolve')

//传入的值和resolve一样的三种
