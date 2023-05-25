/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 19:17:54
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 19:29:47
 * @FilePath: /learn-JavaScript-Senior/11_JS面相对象一/08_Object的方法对对象限制.js
 */
var obj = {
    name: 'xxx',
    age: 19
}

// Object.preventExtensions(obj)
/**
 * 1.禁止对象继续添加新的属性  Object.preventExtensions(obj)
 * 加之前 { name: 'xxx', age: 19, heeight: 1.88, address: '北京' }
 * 加之后 { name: 'xxx', age: 19 }
 */
// obj.heeight = 1.88
// obj.address = '北京'

// console.log(obj);

/**
 * 2.禁止对象配置/删除里面的属性
 * Object.seal  给所有的configurable为true
 */
//复杂实现
// Object.keys(obj).forEach(element => {
//     Object.defineProperty(obj, element, {
//         configurable: false,
//         enumerable: true,
//         writable: true,
//         value: obj[element]
//     })
// });
//第二种
// Object.seal(obj)
// delete obj.name
// console.log(obj);

/**
 * 3.让属性不可修改（writable:false configurable:false）
 */
Object.freeze(obj)
obj.name = 'xxxx2'
console.log(obj);

console.log(Object.getOwnPropertyDescriptors(obj));






