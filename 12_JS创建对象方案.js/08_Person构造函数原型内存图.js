/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 23:15:03
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-26 16:13:10
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案.js/08_Person构造函数原型内存图.js
 */
//显示原型
function Person() {
    //里面的构成如下：
    // var moni = {} //创建新的对象
    // this指向moni  this指向新的对象
    // this的__proto__ = Person的protoType  新对象的__proto__赋值给Person的原型
}

var p1 = new Person() //隐式原型
var p2 = new Person() //隐式原型

/**
 * 原因 Person函数对象在内存中 
 * 在堆里面Person函数对象有三个层面protoScope protoType 函数执行体
 * protoType指向 保存内存地址，内存地址指向Person函数原型对象
 * 函数执行体 创建了p1p2对象，
 * p1有自己的__proto__以及分发的内存地址，内存地址怎么来的呢是new的第二步操作这个对象内部的prototype属性会被 赋值为该构造函数的prototype属性
 * p2有自己的__proto__以及分发的内存地址 内存地址怎么来的呢是new的第二步操作这个对象内部的prototype属性会被 赋值为该构造函数的prototype属性
 * 显然p1的__proto__就等于Person的prototype都是指向他
 */
console.log(p1.__proto__ === Person.prototype); //true  


/**
 * 如果没有去给他赋值能不能获取到name，结果是不能，为啥呢因为他去找会触发get，先在自己对象里面找指的是p1没找到，去函数原型去找
 * 如何不直接添加也有值
 * p1.__proto__.name = 'xxx'
 * p2.__proto__.name = 'xxx'
 * Person.prototype.name = 'xxxx'
 *console.log(p1.name); 都能输出，因为这2个最终的原型都是Person.prototype
 */
console.log(p1.name); 