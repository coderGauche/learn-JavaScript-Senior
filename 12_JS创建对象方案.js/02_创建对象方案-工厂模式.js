/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 20:03:29
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 21:11:55
 * @FilePath: /learn-JavaScript-Senior/12_JS创建对象方案-字面量.js/02_创建对象方案-工厂模式.js
 */
/**
 * 工厂模式缺点，获取不到对象最真实的类型
 */
function createPerson(name, height, age, address) {
    const p = new Object()
    p.name = name
    p.age = age
    p.height = height
    p.address = address

    p.eating = function (params) {

    }
    p.runing = function (params) {

    }


    return p
}


var p1 = createPerson('张三', 18, 1.8888, '北京')
var p2 = createPerson('张三1', 18, 1.8888, '北京')
var p3 = createPerson('张三2', 18, 1.8888, '北京')
var p4 = createPerson('张三3', 18, 1.8888, '北京')

console.log(p1, p2, p3, p4);