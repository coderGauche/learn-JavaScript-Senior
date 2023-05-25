/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 19:14:58
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 19:17:04
 * @FilePath: /learn-JavaScript-Senior/11_JS面相对象一/07_获取属性描述符.js
 */
var obj = {
    name: 'xxx',
    _age: 18,//私有属性
    get age() { //configurable和enumerable是true
        return this._age
    },
    set age(value) {
        this._age = value
    },
    _eating: function (params) {

    }
}


Object.defineProperties(obj, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'x1'
    },
    // age: {
    //     configurable: false,
    //     enumerable: false,
    //     get: function () {
    //         return this._age
    //     },
    //     get: function (params) {
    //         this._age = params
    //     }
    // }
})

obj.age = 19
console.log(obj);


//获取某一个特性属性描述符
// console.log(Object.getOwnPropertyDescriptor(obj, 'age'));
//获取所有性属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));