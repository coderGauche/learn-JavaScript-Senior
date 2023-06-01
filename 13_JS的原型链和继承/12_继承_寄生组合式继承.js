/*
 * @Author: Gauche楽
 * @Date: 2023-06-01 17:00:06
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-01 17:40:35
 * @FilePath: /learn-JavaScript-Senior/13_JS的原型链和继承/12_继承_寄生组合式继承.js
 */

function inheritPrototype(stuType, PsonType) {
    stuType.prototype = Object.create(PsonType.prototype)
    Object.defineProperty(stuType.prototype, 'constructor', {
        writable: true,
        enumerable: false,
        configurable: true,
        value: stuType
    })
}

function Person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
}

Person.prototype.runing = function runing() {
    console.log('runing');
}

Person.prototype.eating = function eating() {
    console.log('eating');
}


function Student(name, age, height, a1, sno) {
    Person.call(this, name, age, height)
    this.a1 = a1
    this.sno = sno
}

// Student.prototype = Object.create(Person.prototype)
// Object.defineProperty(Student.prototype, 'constructor', {
//     writable: true,
//     enumerable: false,
//     configurable: true,
//     value: Student
// })
inheritPrototype(Student, Person)



Person.prototype.reading = function reading() {
    console.log('reading');
}


const stu = new Student('xxx', 18, 1.888, 'a1', '1222')
console.log(stu);
stu.runing()
stu.eating()
stu.reading()