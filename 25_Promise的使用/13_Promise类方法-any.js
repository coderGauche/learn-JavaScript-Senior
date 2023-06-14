/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:39:10
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 03:19:54
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/13_Promise类方法-any.js
 */
/**
 * any会等到fulfilled状态才会决定Promise的状态
 * 如果有Promise都是reject，也会等到所有Promise变成rejected
 * 如果所有Promise都是reject，那么会报AggregateError的错误
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


Promise.any([p1, p2, p3]).then(res => {
    console.log('res', res);
}).catch(err => {
    console.log(err);
})