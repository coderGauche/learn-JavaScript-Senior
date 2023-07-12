/*
 * @Author: Gauche楽
 * @Date: 2023-07-13 00:36:14
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-07-13 00:41:31
 * @FilePath: /learn-JavaScript-Senior/33_深拷贝/06_deepClone_v1_循环引用.js
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
    s2: s2,
    set: new Set([1, 2, 3]),
    map: new Map([['aaa', 'bbbb'], ['aaa1', 'bbbb1']])
}

function isObject(params) {
    const type = typeof params
    return (params !== null) && (type === 'object' || type === 'function')
}

//WeakMap弱引用
function deepClone(params, map = new WeakMap()) {
    // 如果是set类型
    if (params instanceof Set) {
        return new Set([...params])
    }
    // 如果是map类型
    if (params instanceof Map) {
        return new Map([...params])
    }
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
    //解决循环引用
    if (map.has(params)) {
        return map.get(params)
    }

    // 判断params是对象类型还是数组类型
    let newParams = Array.isArray(params) ? [] : {}
    //解决循环引用
    map.set(params, newParams)
    for (const key in params) {
        newParams[key] = deepClone(params[key], map)
    }

    // 对象symbol的key进行特殊的处理
    const symbolkeys = Object.getOwnPropertySymbols(params)
    for (const skey of symbolkeys) {
        newParams[skey] = deepClone(params[skey])
    }
    return newParams
}

info.obj = info

let textObj = deepClone(info)
info.name = 'xxxx'
info.friend.arr = [11, 22, 33]
console.log(textObj);
console.log(info.s2 === textObj.s2);