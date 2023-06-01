/*
 * @Author: Gauche楽
 * @Date: 2023-06-01 17:43:30
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 18:38:33
 * @FilePath: /learn-JavaScript-Senior/14_js原型内容的补充/01_一些判断方法补充.js
 */
var obj = {
    name: 'xxx',
    age: 19
}


var info = Object.create(obj, {
    address: {
        enumerable: true,
        value: '北京'
    }
})


console.log(info.hasOwnProperty('address'));//true
console.log(info.hasOwnProperty('name')); //false  因为address是info私有的，name是原型上面的不存在私有


//操作符 in/ for in

console.log('name' in info);//true 类似遍历，只要都能打印出来就行

for (key in info) {
    console.log(key);
}