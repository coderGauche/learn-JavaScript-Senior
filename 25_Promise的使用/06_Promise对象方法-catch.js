/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 02:36:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-14 03:02:04
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/06_Promise对象方法-catch.js
 */
/**
 * 一、catch可多次被调用
 * 二、then的返回值
 * >1 catch传入回调执行完后，默认状态依然是fulfilled
 * >2 后续继续执行cath的话需要抛出异常
 */
const promise = new Promise((resolve, reject) => {
    // resolve('resolve')
    // reject('reject')
    throw new Error('xxx')
})



promise.catch(err => {
    console.log(err, 'err');
}).catch(err2 => {
    console.log(err2, 'err2');
}).then(res => {
    console.log(res); //resolve
}).catch(err3 => {
    console.log(err3, 'err3');
})


/**
 * 一、二、的案例
 */
// promise.catch( err => {
//     console.log(err); //reject
// })

// promise.catch( err => {
//     console.log(err); //reject
// })