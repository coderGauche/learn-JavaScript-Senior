/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 19:01:04
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 19:13:11
 * @FilePath: /learn-JavaScript-Senior/11_JS面相对象一/06_定义多个属性描述符.js
 */
/**
 * get和set的差异
 * 直接在对象上写 configurable和enumerable默认都是true
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