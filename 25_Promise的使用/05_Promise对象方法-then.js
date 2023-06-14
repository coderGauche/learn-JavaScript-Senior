/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:36:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 02:56:55
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/05_Promise对象方法-then.js
 */
/**
 * 一、then接受两个参数
 * >1 fulfilled 和 reject
 * 二、then可多次被调用
 * 三、then的返回值
 * >1 返回一个普通值，会被promise实例化resolve输出的值
 * >2 返回一个promise实例，该promise实例会被resolve
 * >3 返回对象thenable,返回是then的resolve输出的值
 * then方法抛出异常，那么处于reject状态
 */
const promise = new Promise((resolve, reject) => {
    resolve('resolve')
    // reject('reject')
})



promise.then(res => {
    // return 'xxxxx1'
    // return new Promise((resovle, reject) => {
    //     resovle('xxxq')
    // })
    // return {
    //     then: (resovle, reject) => {
    //         resovle('xxxa')
    //     }
    // }
}, err => {
    console.log(err); //reject
}).then(res2 => {
    console.log(res2); //resolve
})


/**
 * 一、二、的案例
 */
// promise.then(res => {
//     console.log(res); //resolve
// }, err => {
//     console.log(err); //reject
// })

// promise.then(res => {
//     console.log(res); //resolve
// }, err => {
//     console.log(err); //reject
// })