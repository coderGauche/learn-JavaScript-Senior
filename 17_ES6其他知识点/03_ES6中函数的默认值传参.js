/*
 * @Author: Gauche楽
 * @Date: 2023-06-05 00:24:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-05 00:30:02
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/03_ES6中函数的默认值传参.js
 */
function foo({ name, age, height } = { name: 1, age: 2, height: 8 }) {

}


function foo1({ name = 1, age = 2, height = 8 } = {}) {

}


function foo2(name, age, height = 8) {
    console.log(name, age, height);
}


foo2(1, 2)


/**
 * 有默认值的函数的lenghth属性
 * 有默认值不计算在length中
 */

function foo3(n1, n2, n3, n4 = 1) {

}

console.log(foo3.length);//3