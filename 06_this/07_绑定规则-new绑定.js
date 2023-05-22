/*
 * @Author: Gauche楽
 * @Date: 2023-05-22 04:36:15
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-22 04:46:29
 * @FilePath: /learn-JavaScript-Senior/05_this/07_绑定规则-new绑定.js
 */
/**
 * 我们通过new关键字调用一个函数时(构造器)，这个时候this是在调用这个构造器时创建出来的对象
 * this = 创建出来的对象
 * 这个绑定过程就是new 绑定
 * 
 * 
 * new Person  会自动生成对象  赋值给this  会把this对象返回  通过 p1拿到值
 */
function Person(name, age) {
    this.name = name
    this.age = age
}


var p1 = new Person('aaa', 19)
console.log(p1.name, p1.age);
var p2 = new Person('aaa', 19)
console.log(p2.name, p2.age);


var obj = {
    name: 'kobi',
    age: 29,
    foo: function () {
        console.log(this);
    }
}

new obj.foo() //优先级高低问题   那肯定new最高