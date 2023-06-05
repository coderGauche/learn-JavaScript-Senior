/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 00:19:14
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 01:41:00
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/13_新增数据结构-weakMap的使用.js
 */
/**
 * 区别
 * 只能以对象作为key
 * weakMap是弱引用
 */
const obj = { name: 'xx1ZZ' }
const obj1 = { name: 'xx1Z1' }
const newWeakMap = new WeakMap()

newWeakMap.set(obj, '111')
newWeakMap.set(obj1, '1112')
console.log(newWeakMap);
console.log(newWeakMap.get(obj1));
console.log(newWeakMap.has(obj1));
newWeakMap.delete(obj1)
console.log(newWeakMap);
console.log('------');


