/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 18:24:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 18:34:30
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/03_解构-对象解构.js
 */
var obj = {
    name: 'xxx',
    age: 17
}


// 对象解构
var { name, age } = obj

var { age } = obj

var { name: newName } = obj
var { name: newName = 'xxxx' } = obj