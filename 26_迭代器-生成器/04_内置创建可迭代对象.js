/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 02:07:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 02:08:24
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/04_内置创建可迭代对象.js
 */
//数组就是可迭代对象
const names = ['a1', 'a2', 'a3']

for (const key of names) {
    console.log(key);
}

const iterator = names[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());