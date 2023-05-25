/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 05:39:43
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 06:09:26
 * @FilePath: /learn-JavaScript-Senior/11_JS面相对象一/03_defineProperty方法.js
 */
var obj = {
    name: 'xxxx',
    age: 18
}
/**
 * defineProperty属性描述符
 * 分两类
 * 01.数据属性 描述符  配置有：configurable,enumerable,value,writable
 * 02.存取属性 访问器描述符  配置有：configurable,enumerable,get,set
 * 1.在第二个写上不存在的变量他会创建出来但是打印obj是看不到的只有点出来，如果想看出来
 * 
 */
Object.defineProperty(obj, 'height', {
    //配置
    value: 28,
})


console.log(obj);
console.log(obj.height);