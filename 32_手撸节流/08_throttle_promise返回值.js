/*
 * @Author: Gauche楽
 * @Date: 2023-07-12 19:27:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-12 19:44:34
 * @FilePath: /learn-JavaScript-Senior/32_手撸节流/08_throttle_promise返回值.js
 */
function throttle(fn, interval, { leading = false, trailing = false }, callbackChange) {
    let ival = interval || 250;
    //记录上一次的开始时间
    let lastTime = 0
    let timer = null
    // 事件触发式真正执行的函数
    const _throttle = function (...params) {
        return new Promise((resolve, reject) => {
            // 获取当前事件出发的时间
            const nowTime = new Date().getTime()
            if (!leading && !lastTime) lastTime = nowTime
            // 使用当前触发的时间和之前的时间间隔以及上一次的开始时间，计算出还剩多长时间来触发函数
            const remainTime = ival - (nowTime - lastTime)
            if (remainTime <= 0) {
                if (timer) {
                    clearTimeout(timer)
                    timer = null
                }
                // 真正触发的函数
                const result = fn.apply(this, params)
                console.log(this);
                if (callbackChange) callbackChange(result)
                resolve(result)
                // 保留上次触发的时间
                lastTime = nowTime
            }
            if (!trailing && !timer) {
                timer = setTimeout(() => {
                    timer = null
                    lastTime = !leading ? 0 : new Date().getTime()
                    const result = fn.apply(this, params)
                    resolve(result)
                    if (callbackChange) callbackChange(result)
                }, remainTime)
            }
        })
    }
    _throttle.cancel = function () {
        if (timer) clearTimeout(timer)
        timer = null
        lastTime = 0
    }
    return _throttle
}