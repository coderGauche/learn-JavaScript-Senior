/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:38:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 03:15:45
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/11_Promise类方法-allSettled.js
 */
// [
//     { status: 'fulfilled', value: 'resolve1' },
//     { status: 'rejected', reason: 'resolve2' },
//     { status: 'fulfilled', value: 'resolve3' }
// ]
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


Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})