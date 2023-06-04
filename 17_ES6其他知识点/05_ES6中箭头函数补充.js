/*
 * @Author: Gauche楽
 * @Date: 2023-06-05 00:38:07
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-05 00:42:58
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/05_ES6中箭头函数补充.js
 */
// function Foo(params) {

// }

// const p1 = new Foo()
// p1.__proto__ = Foo.prototype


//箭头函数没有显示原型
const foo1 = () => {
    /**
     * 箭头函数中
     * this和arguments都是没有的要从上层作用域去找
     */
}

console.log(foo1.prototype);


const p2 = new foo1()  //foo1 is not a constructor  不能用new这样去调用它