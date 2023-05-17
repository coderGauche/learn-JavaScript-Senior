/*
 * @Author: Gauche楽
 * @Date: 2023-05-16 11:22:16
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-16 16:38:20
 * @FilePath: /js高级/01_函数中this指向/01_this指向的分析.js
 */

/**
 * 1.函数在调用的时候   js会默认给this绑定一个值
 * 2.this绑定和定义的位置没有关系
 * 3。this绑定和调用方式以及调用的位置有关系
 * 4.this是在运行时被调用的
 * 
 * 
 * 四种绑定关系
 * 默认绑定
 * 隐式绑定
 * 显示绑定
 * new绑定
 */

function foo() {
    console.log(this);
}

//方式一  直接调用
foo()

//通过对象给他吊起来
var obj = { name: 'wzf' }

obj.aaa = foo

// obj.aaa()