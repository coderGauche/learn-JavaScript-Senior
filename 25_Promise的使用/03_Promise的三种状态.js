/*
 * @Author: Gauche楽
 * @Date: 2023-06-12 15:41:11
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-12 17:29:00
 * @FilePath: /learn-JavaScript-Senior/25_Promised的使用/03_Promise的三种状态.js
 */
new Promise(resolve, reject => {
    //第一阶段pending   待定
    resolve('xxxx')
}).then(res => {
    //第二阶段fulfilled 已兑现
}).catch(err => {
    // 第三阶段 rejected 已拒绝
})