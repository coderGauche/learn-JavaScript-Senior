/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 01:02:41
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 01:32:13
 * @FilePath: /learn-JavaScript-Senior/15_ES6中类的使用/03_class继承extends.js
 */
class Person {
    constructor(sno) {
        this.sno = '111'
    }
    runing() {
        console.log(this.name, 'runing');
    }
    eating() {
        console.log(this.name, 'runing');
    }

    static stus() {
        console.log('stus');
    }
}

class Student extends Person {

    constructor(name, age, sno) {
        super(sno)
        this.name = name
        this.age = age
    }

    //对父类方法的重写
    eating() {
        //复用父类中的处理逻辑
        super.eating()
        console.log(this.name, 'Studentruning');
    }
    //对父类方法的重写
    static stus() {
        super.stus()
        console.log('stus1111');
    }
}


var p1 = new Student('xxxx', 18, 1.8888)
console.log(p1);
// p1.runing()
p1.eating()
Student.stus()


