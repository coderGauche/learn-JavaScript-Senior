/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:37:25
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 03:10:26
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/09_Promise类方法-reject.js
 */
const promise = new Promise((resolve, reject) => {
    reject('reject')
})


Promise.reject('reject')

//无论传入什么状态，都会直接作为reject状态的参数传递到catch