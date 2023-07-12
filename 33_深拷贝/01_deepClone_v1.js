/*
 * @Author: Gauche楽
 * @Date: 2023-07-12 23:25:17
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-12 23:55:56
 * @FilePath: /learn-JavaScript-Senior/33_深拷贝/01_deepClone_v1.js
 */
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
        }
    }
}

function isObject(params) {
    const type = typeof params
    return (params !== null) && (type === 'object' || type === 'function')
}

function deepClone(params) {
    // 判断params是否是对象类型
    if (!isObject(params)) {
        return params
    }
    let newParams = {}
    for (const key in params) {
        newParams[key] = deepClone(params[key])
    }
    return newParams
}

let textObj = deepClone(info)
info.name = 'xxxx'
info.friend.address.street = 'xxxx1'
console.log(info === textObj);
console.log(info);
console.log(textObj);