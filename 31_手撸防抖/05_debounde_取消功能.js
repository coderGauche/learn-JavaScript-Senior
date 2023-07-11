/*
 * @Author: Gauche楽
 * @Date: 2023-07-11 18:26:21
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-11 18:38:53
 * @FilePath: /learn-JavaScript-Senior/31_手撸防抖/05_debounde_取消功能.js
 */
function debounceChange(fn, delay, immediate = false,) {
    let time = null
    let isInvoke = null
    let debounce = function (...params) {
        if (time) clearTimeout(time)
        if (immediate && !isInvoke) {
            fn.apply(this, params)
            isInvoke = true
        } else {
            time = setTimeout(() => {
                fn.apply(this, params)
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
