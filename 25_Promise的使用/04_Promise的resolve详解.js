/*
 * @Author: Gauche楽
 * @Date: 2023-06-12 15:48:22
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 17:35:23
 * @FilePath: /learn-JavaScript-Senior/25_Promised的使用/04_Promise的resolve详解.js
 */
/**
 * resolve传入的三种值区别
 * 1> null、undefined、同一时刻都是空对象
 * 2> 传入普通对象或者对象，值会作为then回调参数
 * 3> 传入Promise的话 ，那么新的Promise会决定原来Promise的状态   
 * 4> 传染对象，并且这个对象有实现then方法，那么会执行该then的方法，根据then方法的结果来决定Promise的状态  统称为thenable
 */

// 第一种
new Promise((resolve, reject) => {
    //第一阶段pending   待定
    resolve({ name: 'xxx', age: 18 })
}).then(res => {
    console.log(res);
    //第二阶段fulfilled 已兑现
}).catch(err => {
    // 第三阶段 rejected 已拒绝
})

const newPromise = new Promise((resolve, reject) => {
    resolve('返回的是我')
})

// 第二种
new Promise((resolve, reject) => {
    //第一阶段pending   待定
    resolve(newPromise)
}).then(res => {
    console.log(res);
    //第二阶段fulfilled 已兑现
}).catch(err => {
    // 第三阶段 rejected 已拒绝
})

// 第三种
new Promise((resolve, reject) => {
    //第一阶段pending   待定
    resolve({
        then: (resolve, reject) => {   //统称为thenable
            resolve('返回的是我')
        }
    })
}).then(res => {
    console.log(res);
    //第二阶段fulfilled 已兑现
}).catch(err => {
    // 第三阶段 rejected 已拒绝
})