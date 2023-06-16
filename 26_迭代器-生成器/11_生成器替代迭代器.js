/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 17:26:16
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 18:17:39
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/11_生成器替代迭代器.js
 */
// function createIterator(arr) {
//     let index = 0
//     return {
//         next: function () {
//             return {
//                 value: arr[index++],
//                 done: index > arr.length
//             }
//         }
//     }
// }

function* createIterator(arr) {
    yield* arr;
}

// function* createIterator(arr) {
//     for (const item of arr) {
//         yield item
//     }
// }

const names = ['a1', 'a2', 'a3']

const p2 = createIterator(names)
console.log(p2.next());
console.log(p2.next());
console.log(p2.next());
console.log(p2.next());

class Perosn {
    constructor(name, address, initialStudent) {
        this.name = name;
        this.address = address;
        this.student = initialStudent;
    }
    push(item) {
        this.student.push(item);
    }
    *[Symbol.iterator]() {
        yield* this.student
    }
}

const p1 = new Perosn('3幢6楼205', '计算机教室', ['a1', 'a2', 'a3']);

for (const stu of p1) {
    console.log(stu);
}