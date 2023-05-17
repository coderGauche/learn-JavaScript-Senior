/*
 * @Author: Gauche楽
 * @Date: 2023-05-16 17:52:50
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-16 20:34:15
 * @FilePath: /js高级/01_函数中this指向/02_execution_code.js
 */

var name = 'wzf'

var name1 = 20
var name2 = 30
var result = name1 + name2


/**
 * 在浏览器执行过程 
 * 1. 源代码通过解析到ast的过程为第一步
 * 在代码被解析的之前，被v8引擎内部会帮助我们创建一个对象Global Object（GO）
 * 对象所有作用于都会被访问
 * window指向自己 
 * 对象包含date，array  number 等
 * 在我们定义的全局额外属性本身是有赋值的但是在第一步还没有解析都为undefined
 * 2.开始运行代码
 * v8为了执行代码，v8引擎内部会有一个执行上下文栈（函数调用栈）（ECS）
 * 因为执行的是全局代码，为了全局代码能够正常的执行，需要创建 全局执行上下文（全局代码需要被执行才会创建）（GEC）
 * VO：GO 
 * 开始执行
 * 3.代码依次执行
 * 把全局undefined 改成赋的值   可以找到只是undefined
 */