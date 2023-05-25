/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 05:25:14
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 05:30:53
 * @FilePath: /learn-JavaScript-Senior/11_JS面相对象一/01_创建对象的方式.js
 */
//创建一个对象。对某一个人进行抽象（描述）
var obj = new Object()
obj.anme = 'xxx'
obj.age = 18
obj.height = 1.888
obj.eating = function (params) {
    console.log(this.name + 'xxx');
}


//创建方式二：字面量形式
var info = {
    anme: 'xxx',
    age: 18,
    height: 1.888,
    eating: function (params) {
        console.log(this.name + 'xxx');
    }
}