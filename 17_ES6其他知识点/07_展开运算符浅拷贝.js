/*
 * @Author: Gauche楽
 * @Date: 2023-06-05 00:50:15
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-05 01:21:06
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/07_展开运算符浅拷贝.js
 */
const info = {
    name: 'xxx',
    friend: { name: 'xxx', age: 18 }
}



const obj = { ...info, name: 'xx1' }

obj.friend.name = 'xxx1'
obj.name = 'xxx1'

console.log(info);