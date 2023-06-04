/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 16:18:22
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 16:21:53
 * @FilePath: /learn-JavaScript-Senior/15_ES6中类的使用/05_创建类继承自内置.js
 */
class Person {

}


class GArray extends Array {
    firstItem() {
        return this[0]
    }
    lastItem() {
        return this[this.length - 1]
    }
}


var p = new GArray(1, 2, 3)
console.log(p.firstItem());
console.log(p.lastItem());
console.log(p.length);