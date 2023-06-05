/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 01:40:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 01:58:41
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/14_vue3响应式原理中weakMap的使用.js
 */
const obj01 = {
    name: 'xx1',
    age: 11
}


function obj01NamesFn1(params) {
    console.log('obj01Names触发');
}
function obj01NamesFn2(params) {
    console.log('obj01Names触发');
}
function obj01AgeFn1(params) {
    console.log('obj01Age触发');
}
function obj01AgeFn2(params) {
    console.log('obj01Age触发');
}

const obj02 = {
    name: 'xx2',
    age: 12
}

function obj02NamesFn1(params) {
    console.log('obj02Names触发');
}
function obj02NamesFn2(params) {
    console.log('obj02Names触发');
}
function obj02AgeFn1(params) {
    console.log('obj012Age触发');
}
function obj02AgeFn2(params) {
    console.log('obj012Age触发');
}


const objWeakMap = new WeakMap()

const setObj1Map = new Map()
setObj1Map.set('name', [obj01NamesFn1, obj01NamesFn2])
setObj1Map.set('age', [obj01AgeFn1, obj01AgeFn2])
console.log(setObj1Map);
objWeakMap.set(obj01, setObj1Map)

const setObj2Map = new Map()
setObj2Map.set('name', [obj02NamesFn1, obj02NamesFn2])
setObj2Map.set('age', [obj02AgeFn1, obj02AgeFn2])
console.log(setObj2Map);
objWeakMap.set(obj02, setObj2Map)

obj01.name = 'xxxewew'
const tarfeMap = objWeakMap.get(obj01)
const fns = tarfeMap.get('name')

console.log(fns);

fns.forEach((item) => item());