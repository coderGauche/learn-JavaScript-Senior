/*
 * @Author: Gauche楽
 * @Date: 2023-06-05 01:53:55
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-05 02:29:11
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/09_Symbol的基本使用.js
 */

/**
 * 一、.之前没有symbol的时候弊端，给对象的值赋值会覆盖，有了symbol就可以创建不同的值，
 *  key可以是一样的，但是symbol创建出来的绝对不一样，他的优势
 */

/**
 * 二、基本使用
 */
//创建出来的都是不一样的
const s1 = Symbol('x1')
const s2 = Symbol('x2')
const s3 = Symbol('x3')
const s4 = Symbol('x4')


// console.log(s1.description);



let obj = {}




/**
 * 三、Symbol作为key定义对象的字面量使用
 */

let obj1 = {
    [s1]: 'x01',
    [s2]: 'x02'
}



// console.log(obj);
// console.log(obj1);


/**
 * 三、Symbol新增属性
 */

//不能通过obj.s1去获取
obj[s1] = 'xxxx'


const s5 = Symbol()
Object.defineProperty(obj, s5, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'xxxxxxx11111'
})

console.log(obj[s5]);

/**
 * 四、无法通过Object.keys遍历obj1的key
 */
// console.log(Object.keys(obj1));//[]



/**
 * 通过Object.getOwnPropertySymbols(obj1)获取所有symbol的key
 */
console.log(Object.getOwnPropertyNames(s1));
console.log(Object.getOwnPropertySymbols(obj1));

const p1 = Object.getOwnPropertySymbols(obj1)
for (const item of p1) {
    console.log(obj1[item]);
}


/**
 * 五、  Symbol.for 让他的绝对唯一搞成相同
 *  Symbol.keyFor  获取他的key值
 */

const sa = Symbol.for('aaaa')
const sb = Symbol.for('aaaa')


console.log(sa === sb); //true

const key = Symbol.keyFor(sa)
console.log(key); //aaa
const sc = Symbol.for(key)   //Symbol.for('aaaa')

console.log(sa === sc); //true