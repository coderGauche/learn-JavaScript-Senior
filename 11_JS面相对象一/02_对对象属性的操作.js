/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 05:31:22
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 05:43:07
 * @FilePath: /learn-JavaScript-Senior/11_JS面相对象一/02_对对象属性的操作.js
 */
var obj = {
    name: 'xxx',
    age: 18
}

// 获取我们的属性
console.log(obj.name);

// 赋值属性
obj.name = 'xxxxa'
console.log(obj.name);

//删除属性
// delete obj.name
console.log(obj);

// 需求：对属性进行操作时，进行一些限制
// 限制：不允许某一个属性被赋值，不允许某个属性被删除，不允许某些属性在遍历时被被遍历出来

for (var key in obj) {
    console.log(key);
}
