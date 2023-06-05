/*
 * @Author: Gauche楽
 * @Date: 2023-06-05 22:51:38
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-05 23:42:05
 * @FilePath: /learn-JavaScript-Senior/17_ES6其他知识点/11_新增数据结构weakSet使用.js
 */
const weakSet = new WeakSet()
const set = new Set()

const obj = {
    name: 'xxxx'
}

/**
 * 区别
 * 1.WeakSet只能存放对象  set都能存放
 * 2.weakSet是弱引用如果没有其他引用对某个对象进行引用，nameGC可以对该对象进行回收，set是强引用
 * 
 * 弱引用是指的是：
 * 
 * 强引用是指的是：
 */

weakSet.add(obj)
set.add(obj)



// 应用
// 为什么使用WeakSet，因为弱引用的关系，可以GC回收，如果set的话既要等于null还要WeakSet.delete
const personSet = new WeakSet()
class Person {
    constructor() {
        personSet.add(this)
    }
    runing() {
        if (!weakSet.has(this)) {
            throw new Error('不能够通过非构造函数创建出来的对象调用runing方法')
        }
        console.log(this);
    }
}


const p1 = new Person()
p1.runing
// p1.runing.call({ name: 'xx' })


