/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 02:44:56
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 02:59:38
 * @FilePath: /learn-JavaScript-Senior/09_纯函数-柯里化-组合/08_通用的组合函数实现.js
 */
function double(params) {
    return params * 2
}


function squre(params) {
    return params ** 2
}

function ZFCompose(...fns) {
    var length = fns.length
    for (var i = 0; i < length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new TypeError('The requirements are all function types')
        }
    }
    function compose(...args) {
        var index = 0
        var result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            result = fns[index].call(this, result)
        }
        return result
    }
    return compose
}


const res = ZFCompose(double, squre)
console.log(res(10));