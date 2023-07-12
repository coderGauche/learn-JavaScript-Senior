function throttle(fn, interval, { leading = false, trailing = false }) {
    let ival = interval || 250;
    //记录上一次的开始时间
    let lastTime = 0
    let timer = null
    // 事件触发式真正执行的函数
    const _throttle = function (...params) {
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
            fn.apply(this, params)
            // 保留上次触发的时间
            lastTime = nowTime
        }
        if (!trailing && !timer) {
            timer = setTimeout(() => {
                timer = null
                lastTime = !leading ? 0 : new Date().getTime()
                fn.apply(this, params)
            }, remainTime)
        }
    }
    _throttle.cancel = function () {
        if (timer) clearTimeout(timer)
        timer = null
        lastTime = 0
    }
    return _throttle
}