/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 17:03:29
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 18:44:39
 * @FilePath: /learn-JavaScript-Senior/20_ES10知识点解析/01_flat和flatMap的使用.js
 */
const names = ['a1', 'a2', ['a3', 'a4'], ['a5', ['a6', 'a7']]]

// console.log(names.flat(1));
// console.log(names.flat(2));


const names1 = ['a1', 'a2', ['a3', 'a4'], ['a5', ['a6', 'a7']]]
const names2 = ['hello Gauche', 'hello Wzf', 'hello coder']


const flatMap = names1.flatMap(item => {
    return item
})

// console.log(flatMap.flat(1)); 
const flatMap1 = names2.flatMap(item => {
    return item.split(' ')
})

console.log(flatMap1); //[ 'hello', 'Gauche', 'hello', 'Wzf', 'hello', 'coder' ]
