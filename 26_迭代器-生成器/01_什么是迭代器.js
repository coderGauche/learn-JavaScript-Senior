/*
 * @Author: Gauche楽
 * @Date: 2023-06-15 04:38:50
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-15 04:45:31
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/01_什么是迭代器.js
 */
const iterotor = {
    next: () => {
        return {
            done: true,
            value: 123
        }
    }
}


const names = ['a1', 'a2', 'a3']

let index = 0
const namesIterator = {
    next: () => {
        if (index < names.length) {
            return { done: false, value: names[index++] }
        } else {
            return { done: true, value: undefined }
        }
    }
}


console.log(namesIterator.next()); // { value: 'a1', done: false }
console.log(namesIterator.next()); // { value: 'a2', done: false }
console.log(namesIterator.next()); // { value: 'a3', done: false }
console.log(namesIterator.next()); // { value: undefined, done: true }