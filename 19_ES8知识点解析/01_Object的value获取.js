/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 16:33:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 16:37:42
 * @FilePath: /learn-JavaScript-Senior/19_ES8知识点解析/01_Object的value获取.js
 */
const obj = {
    name: 'xxx',
    age: 18
}


console.log(Object.keys(obj)); //[ 'xxx', 18 ]
console.log(Object.values(obj)); //[ 'xxx', 18 ]
console.log(Object.values(['1', '2', 3])); //[ '1', '2', 3 ]
console.log(Object.values('aaaa')); //[ 'a', 'a', 'a', 'a' ]