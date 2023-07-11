/*
 * @Author: Gauche楽
 * @Date: 2023-07-11 18:39:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-11 18:42:34
 * @FilePath: /learn-JavaScript-Senior/31_手撸防抖/06_debounde_回调.js
 */
function debounceChange(fn, delay, immediate = false, resultCallback) {
    let time = null
    let isInvoke = null
    let debounce = function (...params) {
        if (time) clearTimeout(time)
        if (immediate && !isInvoke) {
            const result = fn.apply(this, params)
            if (resultCallback) resultCallback(result)
            isInvoke = true
        } else {
            time = setTimeout(() => {
                const result = fn.apply(this, params)
                if (resultCallback) resultCallback(result)
                isInvoke = false
            }, delay)
        }

    }
    time = null
    //取消功能
    debounce.cancel = function () {
        if (time) clearTimeout(time)
        time = null
        isInvoke = false
    }
    return debounce
}
