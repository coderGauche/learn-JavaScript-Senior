/*
 * @Author: Gauche楽
 * @Date: 2023-06-01 18:38:59
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 18:43:44
 * @FilePath: /learn-JavaScript-Senior/14_js原型内容的补充/02_instanceof.js
 */
/**
 * 用于检测构造函数的poptotype 是否出现在某个实例对象的原型链中
 * 
 * 没有可以设置原型的话，就是Object（默认继承自Object）
 * 
 * 所有类，构造函数 最终继承Object，是所有类的父类
 */
function Person(params) {

}

var p = new Person()


console.log(p instanceof Person);
console.log(p instanceof Object);