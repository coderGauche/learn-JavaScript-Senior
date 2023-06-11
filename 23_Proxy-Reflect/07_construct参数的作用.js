/*
 * @Author: Gauche楽
 * @Date: 2023-06-11 18:21:18
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-11 18:24:38
 * @FilePath: /learn-JavaScript-Senior/23_Proxy-Reflect/07_construct参数的作用.js
 */
/**
 * 实现了输出Teacher但是内容是Student，prototype也是Teacher的原型
 */
function Student(name, age) {
    this.anem = name
    this.age = age
}


function Teacher() {

}


const teacher = Reflect.construct(Student, ['why', 18], Teacher)

console.log(teacher);
console.log(teacher.__proto__ === Teacher.prototype);

/**
 * Teacher { anem: 'why', age: 18 }
 * true
 */