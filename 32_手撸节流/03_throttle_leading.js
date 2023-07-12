/*
 * @Author: Gauche楽
 * @Date: 2023-07-12 12:35:20
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-12 12:43:42
 * @FilePath: /learn-JavaScript-Senior/32_手撸节流/03_throttle_leading.js
 */
function throttle(fn, interval, { leading = false }) {
    let ival = interval || 250;
    //记录上一次的开始时间
    let lastTime = 0
    // 事件触发式真正执行的函数
    const _throttle = function (params) {
        // 获取当前事件出发的时间
        const nowTime = new Date().getTime()
        if (!leading && !lastTime) lastTime = nowTime
        // 使用当前触发的时间和之前的时间间隔以及上一次的开始时间，计算出还剩多长时间来触发函数
        const remainTime = ival - (nowTime - lastTime)
        if (remainTime <= 0) {
            // 真正触发的函数
            fn()
            // 保留上次触发的时间
            lastTime = nowTime
        }
    }
    return _throttle
}