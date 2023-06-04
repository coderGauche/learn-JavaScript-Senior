/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 18:37:48
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 18:49:19
 * @FilePath: /learn-JavaScript-Senior/16_ES6知识点讲解/04_let-const的基本使用.js
 */
var fo = 'foo'
let bar = 'bar'
/**
 * 注意事项1
 */
/**
 * 传递的值不可修改
 * 如果传递是引用类型（内存地址），可以通过引用找到对应的对象，去修改内部的属性，这个是可以的
 * 不能修改本体，可以修改引用对象里面的值
 */
const aaa = 'aaaa'
const obj = {  //obj内存地址赋值了就不能修改  bj赋值的内存地址是0x100  改的是0x100改成0x200不允许
    foo: 'xxx'
}

obj.foo = 'xxxxa' //obj赋值的内存地址是0x100  改的是0x100的foo可以的
console.log(obj);


/**
 * 注意事项2 通过let/const定义的变量名不可重复定义   var可以重复声明
 */

