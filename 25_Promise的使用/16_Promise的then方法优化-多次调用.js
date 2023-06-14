/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 03:20:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-15 00:30:54
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/16_Promise的then方法优化-多次调用.js
 */

// const promise = new Promise((resolve, reject) => {
//     resolve('xxxx')
// })

// promise.then((data) => {
//     console.log(data);
// })

class ZFPromise {
    constructor(executor) {
        // 初始化状态为pending 记录状态
        this.state = "pending";
        // 初始化成功的值为undefined
        this.value = undefined;
        // 初始化失败的原因为undefined
        this.reason = undefined;
        // 初始化成功处理函数队列
        this.onFulfilledCallbacks = [];
        // 初始化失败处理函数队列
        this.onRejectedCallbacks = [];
        const resolve = (value) => {
            if (this.state === "pending") {
                queueMicrotask(() => {
                    this.state = "fulfilled";
                    this.value = value;
                    this.onFulfilledCallbacks.forEach((fn) => {
                        fn(value);
                    });
                });
            }
        };
        const reject = (reason) => {
            if (this.state === "pending") {
                queueMicrotask(() => {
                    this.state = "rejected";
                    this.reason = reason;
                    this.onRejectedCallbacks.forEach((fn) => {
                        fn(reason);
                    });
                });
            }
        };
        executor(resolve, reject);
    }
    then(onFulfilled, onRejected) {
        //处理如果多次调用then的时候，无法回调。处于fulfilled或者rejected在次调用zhen调一下
        //如果在then调用的时候，状态已经确定下来 次调用zhen调一下。
        if (this.state === "fulfilled" && onFulfilled) {
            onFulfilled(this.value)
        } else if (this.state === "rejected") {
            onRejected(this.reason && onRejected)
        }
        // 如果状态处于pending的时候把成功和失败回调加进数组
        if (this.state === 'pending') {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
    }
}

const promise = new ZFPromise((resolve, reject) => {
    resolve("xxxx");
    // reject('xxxx1')
});

promise.then(
    (data) => {
        console.log("data1", data);
    },
    (err) => {
        console.log("err1", err);
    }
);
promise.then(
    (data) => {
        console.log("data2", data);
    },
    (err) => {
        console.log("err2", err);
    }
);

setTimeout(() => {
    promise.then(
        (data) => {
            console.log("data3", data);
        },
        (err) => {
            console.log("err2", err);
        }
    );
}, 1000)