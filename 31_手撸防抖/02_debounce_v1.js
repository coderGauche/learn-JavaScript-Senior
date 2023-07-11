/*
 * @Author: Gauche楽
 * @Date: 2023-07-11 17:40:18
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-11 18:04:20
 * @FilePath: /learn-JavaScript-Senior/31_手撸防抖/02_debounce_v1.js
 */
function debounceChange(fn, delay) {
    let time = null
    const debounce = function (params) {
        if (time) clearTimeout(time)
        time = setTimeout(() => {
            fn()
        }, delay)
    }
    time = null
    return debounce
}
