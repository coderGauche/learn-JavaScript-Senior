/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:39:10
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 03:16:12
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/12_Promise类方法-race.js
 */
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve1')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('resolve2')
    }, 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve3')
    }, 3000)
})


Promise.race([p1, p2, p3]).then(res => {
    console.log('res', res);
}).catch(err => {
    console.log(err);
})