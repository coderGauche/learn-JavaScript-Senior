/*
 * @Author: Gauche楽
 * @Date: 2023-05-19 16:43:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-19 18:35:26
 * @FilePath: /learn-JavaScript-Senior/05_this/02_this的作用域指向什么.js
 */

/**
 * 全局this
 * 浏览器绑定的是绑定的window
 * node绑定的是{}对象
 * 为啥node绑定的是{}对象跟调用有关系,modul-加载-放到函数-执行函数.apply({})他的this就是{}
 * 
 * 
 * this是在运行时被绑定的
 * this和定义位置没有关系
 * 
 * 
 * this四个绑定规则
 * 默认绑定
 * 隐式绑定
 * 显示绑定
 * new绑定
 */
