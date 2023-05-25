/*
 * @Author: Gauche楽
 * @Date: 2023-05-25 06:07:23
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-25 19:05:18
 * @FilePath: /learn-JavaScript-Senior/11_JS面相对象一/05_存取属性描述符.js
 */


/** configurable:
 *  是否通过delete删除属性，是否可以修改他的特性，或者是否可以将它修改为存取属性描述符或者是否可以将它修改成为存取数学描述符
 *  当直接在一个对象上定义某个属性时，这个属性的configurable为true
 *  当通过属性描述符定义一个属性时，这个属性的configurable默认为false
 */
/** enumerable:
 *  标识属性是否可以通过for-in或者Object.keys()返回该属性
 *  当直接在一个对象上定义某个属性时，这个属性的enumerable为true
 *  当通过属性描述符定义一个属性时，这个属性的enumerable默认为false
 */


var obj = {
    name: 'xxxx',
    age: 18,
    _address: '北京' //私有属性（js上没有严格意义上的私有属性）为什么说_address是私有属性，社区上慢慢开始普遍这种写法
}


// 存取属性描述符
// 两个场景
// 1.隐藏某一个私有属性不希望直接被外界使用和赋值
// 2.如果我们希望截获某个属性它访问和设置值的过程时，也会使用存取属性描述符
// 截获和获取有啥用呢：vue2的响应式原理就是存取属性描述符   当数据改变或者依赖，就会去更新
Object.defineProperty(obj, 'address', {
    //配置
    configurable: true, //是否可配置  false:该属性不可删除/不可以在写个一样的属性描述符去修改 默认值false
    enumerable: true, //该属性是配置对应的属性(address)是否可枚举意思是能不能通过for或者object。keys遍历去拿key 默认值false
    get: function () {
        bar()
        return this._address
    },
    set: function (params) {
        foo()
        this._address = params
    }
})


console.log(obj.address);

obj.address = '上海市'
console.log(obj.address);

function foo(params) {
    console.log('截获了一次address');
}

function bar(params) {
    console.log('获取了一次address');
}