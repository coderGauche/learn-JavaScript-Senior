/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:36:58
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 03:03:43
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/07_Promise对象方法-finally.js
 */
/**
 * finally:无论fulfilled状态还是reject状态都会执行
 */
const promise = new Promise((resolve, reject) => {
    resolve('resolve')
})

promise.then(res => {

}).catch(err => {

}).finally(() => {
    console.log('finally');
})