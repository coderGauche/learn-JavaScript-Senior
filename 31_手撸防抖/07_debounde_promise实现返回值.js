/*
 * @Author: Gauche楽
 * @Date: 2023-07-11 18:39:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-11 18:50:36
 * @FilePath: /learn-JavaScript-Senior/31_手撸防抖/07_debounde_promise实现返回值.js
 */
function debounceChange(fn, delay, immediate = false, resultCallback) {
    let time = null
    let isInvoke = null
    let debounce = function (...params) {
        return new Promise((resolve, reject) => {
            if (time) clearTimeout(time)
            if (immediate && !isInvoke) {
                try {
                    const result = fn.apply(this, params)
                    if (resultCallback) resultCallback(result)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
                isInvoke = true
            } else {
                time = setTimeout(() => {
                    try {
                        const result = fn.apply(this, params)
                        if (resultCallback) resultCallback(result)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }

                    isInvoke = false
                }, delay)
            }

        })
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
