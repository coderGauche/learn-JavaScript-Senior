/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 19:20:13
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-04 10:39:20
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/06_let-const-window关系.js
 */
var foo = 'foo'
/**
 * var声明全局变量，会在window上添加属性
 * let/const不会给window加任何属性   变量被保存在variableMap中
 */

/**
 * 面试题：let和const怎么保存的
 * 首先在最新标准里面它创建出来的我们的这个执行上下文里面的变量的话其实叫做VE，叫做我们的变量环境，
 * 这个变量环境具体我们的引擎在实现的时候，比如说像v8引擎，他其实是使用了个has map一个叫做variableMap一个东西来保存我们声明变量，并且来查找
 * 也是从数据结构来查找的，那么另外的话他对应的名称现在叫做variable_
 */