/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 01:27:39
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 01:36:48
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/02_生成迭代器的函数.js
 */
const names = ['a1', 'a2', 'a2']
const nums = [1, 2, 3]


function createIterator(arr) {
    let index = 0
    return {
        next: () => {
            if (index < arr.length) {
                return { done: false, value: arr[index++] }
            } else {
                return { done: true, value: undefined }
            }
        }
    }
}

const nameIterator = createIterator(names)
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());

const numIterator = createIterator(nums)
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());


//无线迭代器
function createArryIterator(arr) {
    let index = 0
    return {
        next: () => {
            return { done: false, value: index++ }
        }
    }
}