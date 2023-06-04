/*
 * @Author: Gauche楽
 * @Date: 2023-06-02 17:31:42
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-02 17:41:16
 * @FilePath: /learn-JavaScript-Senior/15_ES6中类的使用/07_传统对象面向对象.ts
 */
/**
 * 传统面向对象多态的三个前提
 * 1.继承
 * 2.子类必须有父类方法的重写
 * 3.父类引用指向子类
 */

class Shape {
  getArea() {}
}

class Rectangle extends Shape {
  getArea() {
    return 100;
  }
}

class Circle extends Shape {
  getArea() {
    return 100;
  }
}

var r = new Rectangle();
var c = new Circle();

//多态：当对不同的数据类型执行同一个操作时，如果表现出来的行为不一样，name就是多态的体现
function calcArea(shape: Shape) {
  console.log(shape.getArea());
}

calcArea(r);
calcArea(c);
