/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 05:53:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 06:09:35
 * @FilePath: /learn-JavaScript-Senior/11_JS面相对象一/04_数据属性描述符.js
 */

/** configurable:
 *  是否通过delete删除属性，是否可以修改他的特性，或者是否可以将它修改为存取属性描述符
 *  当直接在一个对象上定义某个属性时，这个属性的configurable为true
 *  当通过属性描述符定义一个属性时，这个属性的configurable默认为false
 */
/** enumerable:
 *  标识属性是否可以通过for-in或者Object.keys()返回该属性
 *  当直接在一个对象上定义某个属性时，这个属性的enumerable为true
 *  当通过属性描述符定义一个属性时，这个属性的enumerable默认为false
 */
/** writable:
 *  表示是否可以修改属性的值
 *  当直接在一个对象上定义某个属性时，这个属性的writable为true
 *  当通过属性描述符定义一个属性时，这个属性的writable默认为false
 */
/** value:
 *  属性value的值，读取属性会返回该值，修改属性，会对其修改
 *  默认情况下这个值是undefined
 */

//name和age虽然没有使用属性描述符定义，但他们也是具备对应的特性
// configurable：true
// enumerable：true
// writable：true
var obj = {
    name: 'xxxx',
    age: 18
}

//数据属性描述符
Object.defineProperty(obj, 'address', {
    //配置
    value: '北京',
    configurable: false, //是否可配置  false:该属性不可删除/不可以在写个一样的属性描述符去修改 默认值false
    enumerable: false, //该属性是配置对应的属性(address)是否可枚举意思是能不能通过for或者object。keys遍历去拿key 默认值false
    writable: false,//该特性是否是可以赋新值(写入值) 是否通过obj.address = 'xxxx'这个区修改 默认值false
})
// configurable的案例
// 不可以在写个一样的属性描述符去修改
// Object.defineProperty(obj, 'address', {
//     //配置
//     value: '北京1',
//     configurable: true//是否可配置  false:该属性不可删除/不可以在写个一样的属性描述符去修改(不可以重新定义属性描述符)
// })
// delete obj.address
// console.log(obj.address);

//enumerable的案例
// console.log(obj);
// for (var key in obj) {
//     console.log(key);
// }
// console.log(Object.keys(obj));

obj.address = 'xxxx'
console.log(obj.address);