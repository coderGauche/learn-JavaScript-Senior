/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:38:33
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 03:13:56
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/10_Promise类方法-all.js
 */
/**
 * 如果都是fulfilled的话会返回输出的数组
 * 一旦有一个是reject的话，会返回reject的状态  而且是回应最快的那个不按照顺序
 */
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('resolve1')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('resolve2')
    }, 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('resolve3')
    }, 3000)
})


Promise.all([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})