/*
 * @Author: Gauche楽
 * @Date: 2023-07-11 18:06:02
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-11 18:09:19
 * @FilePath: /learn-JavaScript-Senior/31_手撸防抖/03_debounce_this_参数_v2.js
 */
function debounceChange(fn, delay) {
    let time = null
    const debounce = function (...params) {
        if (time) clearTimeout(time)
        time = setTimeout(() => {
            fn.apply(this, params)
        }, delay)
    }
    time = null
    return debounce
}
