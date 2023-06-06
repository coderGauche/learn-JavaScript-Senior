/*
 * @Author: Gauche楽
 * @Date: 2023-06-06 20:17:10
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-06 20:32:47
 * @FilePath: /learn-JavaScript-Senior/22_ES12知识点解析/02_WeakRef使用.js
 */
/**
 * WeakRef.prototype.deref
 * 如果源对象没有销毁，name可以获取到原对象
 * 如果原对象已经销毁，name获取到的是undefined
 */
const finalizationRegistry = new FinalizationRegistry(value => {
    console.log('注册在finalizationRegistry被销毁' + value);
})
/**
 * info = obj是不会被销毁的
 * 如果 let info = new WeakSet() 创建弱引用的话，就会被销毁
 * new WeakRef(obj)  ES12的弱引用 会被销毁
 */
let obj = { name: 'xxx' }
let info = new WeakRef(obj)

finalizationRegistry.register(obj, 'obj')


console.log(info.deref().name);

obj = null

setTimeout(() => {
    console.log(info.deref().name); //使用的时候慎重！！！！
}, 10000)