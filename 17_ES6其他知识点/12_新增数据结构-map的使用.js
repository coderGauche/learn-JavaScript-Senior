/*
 * @Author: Gauche楽
 * @Date: 2023-06-05 23:42:53
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 00:17:17
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/12_新增数据结构-map的使用.js
 */
/**
 * map和obj的区别就是，object不能以对象作为key，map可以
 */
const obj1 = { name: 'xx1' }
const obj2 = { name: 'xx2' }


const setMap = new Map()

setMap.set(obj1, 'aaa')
setMap.set(1, 'aaa')
console.log(setMap);
console.log(setMap.size);
const setMap2 = new Map([[obj1, 'aaa'], [obj2, 'bbbbb']])
console.log(setMap2);
console.log(setMap2.size);
console.log(setMap2.has(obj1));
console.log(setMap2.delete(obj2));
// setMap2.clear()
console.log(setMap2.size);

setMap2.forEach((item, key) => {
    console.log(item, key);
})

for (const [item, key] of setMap2) {
    console.log(item, key);
}