/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 18:18:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 20:00:00
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/12_异步代码处理方案.js
 */
function foo(code) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(code)

        }, 1000);
    })
}

// foo(200).then((res) => {
//     return foo(res + 'aaaa')
// }).then(res => {
//     return foo(res + 'bbbbb')
// }).then(res => {
//     console.log(res);
// })


//手动
function* getData(params) {
    const res1 = yield foo('Gauche')
    const res2 = yield foo(res1 + 'aaaa')
    const res3 = yield foo(res2 + 'bbbb')
    console.log(res3, '手动')
}


//async/await

const getDataAwait = async (params) => {
    const res1 = await foo('Gauche')
    const res2 = await foo(res1 + 'aaaa')
    const res3 = await foo(res2 + 'bbbb')
    console.log(res3, 'getDataAwait');
}

getDataAwait()

const generator = getData()
generator.next().value.then(res => {
    generator.next(res).value.then(res => {
        generator.next(res).value.then(res => {
        })
    })
})

//自动
function automaticGenerator(fn) {
    const newFn = fn()
    function excen(params) {
        const data = newFn.next(params)
        if (data.done) return data.value
        data.value.then(res => {
            excen(res)
        })
    }
    excen()
}

automaticGenerator(getData)


const co = require('co')
co(getData)


