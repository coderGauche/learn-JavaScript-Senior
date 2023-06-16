/*
 * @Author: Gauche楽
 * @Date: 2023-06-16 02:21:17
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-16 02:31:05
 * @FilePath: /learn-JavaScript-Senior/26_迭代器-生成器/06_自定义类的可迭代性.js
 */
class Perosn {
    constructor(name, address, initialStudent) {
        this.name = name;
        this.address = address;
        this.student = initialStudent;
    }
    push(item) {
        this.student.push(item);
    }
    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {
                if (index < this.student.length) {
                    return { done: false, value: this.student[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            },
            return: () => {
                console.log('迭代器停止');
                return { done: true, value: undefined }
            }
        }
    }
}

const p1 = new Perosn('3幢6楼205', '计算机教室', ['a1', 'a2', 'a3']);
const p2 = new Perosn('3幢6楼205', '计算机教室', ['a11', 'a22', 'a33']);

for (const stu of p1) {
    console.log(stu);
}

for (const stu of p2) {
    // console.log(stu);
    if (stu === 'a22') {
        break;
    }
}







