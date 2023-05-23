/*
 * @Author: Gauche楽
 * @Date: 2023-05-24 00:57:38
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-24 02:24:18
 * @FilePath: /learn-JavaScript-Senior/09_纯函数-柯里化-组合/06_柯里化函数的实现.js
 */


function add1(num1, num2, num3) {
    return num1 + num2 + num3
}

function add(x, y, z) {
    x = x + 1
    y = y + 1
    z = z + 1

    return x + y + z
}

function sum(x) {
    x = x + 1
    return function name(y) {
        y = y + 1
        return function (z) {
            z = z + 1
            return x + y + z
        }
    }
}

function num(num1) {
    num1 = num1 + 1
    return function (x) {
        return num1 + x
    }
}

var log = date => type => msg => console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:${msg}`)


/**
 * 中心思想：
 * (10, 20)(30)
 * (10)(20)(30)
 * (10, 20, 30)
 * 转化成
 * (10, 20, 30)
 */
function ZFCurrting(fn) {
    // 1.因为柯里化是需要返回新函数所以实现传入一个函数接收一个函数
    // 2.传参是多个参数
    function curried(...args) {
        //判断当前已经接收到的参数个数，可以参数本身需要接收的参数是否已经一致了
        //我要接收几个参数fn.length
        //我已经接收几个参数args.length
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, [...args, ...args2])
            }
        }
    }
    return curried
}


var curryAdd = ZFCurrting(add)

// curryAdd(new Date())('DEBUG')("查找到轮播图时间")
console.log(curryAdd(10, 20)(30));
console.log(curryAdd(10)(20)(30));
console.log(curryAdd(10, 20, 30));