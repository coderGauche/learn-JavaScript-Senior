/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 16:22:35
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 17:40:33
 * @FilePath: /learn-JavaScript-Senior/15_ES6中类的使用/06_类的混入.js
 */
class Person {

}

class Runner {
    runing() {

    }
}
class Eater {
    eating() {

    }
}

/**
 * 混入
 * 弊端：
 */
function mixinRunner(BaseClass) {
    class mixinClass extends BaseClass {
        runing() {
            console.log('runing');
        }
    }
    return mixinClass
}


function mixinEating(BaseClass) {
    return class extends BaseClass {
        eating() {
            console.log('eating');
        }
    }
}


//js的类只能有一个父类   单继承

class Student extends Person {

}

var newMixinRunner = mixinEating(mixinRunner(Student))
var stu = new newMixinRunner()
stu.runing()
stu.eating()