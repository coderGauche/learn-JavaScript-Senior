/*
 * @Author: Gauche楽
 * @Date: 2023-07-11 18:56:37
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-11 19:07:53
 * @FilePath: /learn-JavaScript-Senior/32_手撸节流/02_throttle_v1.js
 */
function throttle(fn, interval) {
    let ival = interval || 250;
    let lastTime = 0
    const _throttle = function (params) {
        const nowTime = new Date().getTime()
        const remainTime = ival - (nowTime - lastTime)
        if (remainTime <= 0) {
            fn()
            lastTime = nowTime
        }
    }
    return _throttle
}