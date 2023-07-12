/*
 * @Author: Gauche楽
 * @Date: 2023-07-13 00:17:51
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-13 00:28:11
 * @FilePath: /learn-JavaScript-Senior/33_深拷贝/04_deepClone_v1_symbol类型.js
 */

let s1 = Symbol('aaa')
let s2 = Symbol('bbb')
const info = {
    name: 'Gauche',
    age: 18,
    message: {
        code: 200,
        title: 'Goodbye, World!',
    },
    friend: {
        name: 'World',
        age: 42,
        address: {
            street: '...',
            number: 123,
        },
        arr: [1, 2, 3],
        foo: function (params) {
            console.log('foo');
        }
    },
    [s1]: 'xxxs1',
    s2: s2
}

function isObject(params) {
    const type = typeof params
    return (params !== null) && (type === 'object' || type === 'function')
}

function deepClone(params) {
    // 如果是symbol类型
    if (typeof params === 'symbol') {
        return Symbol(params.description)
    }
    // 如果是函数类型
    if (typeof params === 'function') {
        return params
    }
    // 判断params是否是对象类型
    if (!isObject(params)) {
        return params
    }
    // 判断params是对象类型还是数组类型
    let newParams = Array.isArray(params) ? [] : {}
    for (const key in params) {
        newParams[key] = deepClone(params[key])
    }

    // 对象symbol的key进行特殊的处理
    const symbolkeys = Object.getOwnPropertySymbols(params)
    for (const skey of symbolkeys) {
        newParams[skey] = deepClone(params[skey])
    }
    return newParams
}

let textObj = deepClone(info)
info.name = 'xxxx'
info.friend.arr = [11, 22, 33]
console.log(textObj);
console.log(info.s2 === textObj.s2);