/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 01:43:12
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 02:04:49
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/03_什么是可迭代对象.js
 */
const obj = {
    names: ['a1', 'a2', 'a3'],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                if (index < this.names.length) {
                    return { done: false, value: this.names[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}


const iterator = obj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


const a1 = {
    name: 'xxx',
    age: 18
}

//for of 循环迭代对象的方式  必须是可迭代对象
for (const key of obj) {
    console.log(key);
}