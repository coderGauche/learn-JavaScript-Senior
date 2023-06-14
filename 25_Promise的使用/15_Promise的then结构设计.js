/*
 * @Author: Gauche楽
 * @Date: 2023-06-14 03:20:52
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-06-15 00:18:57
 * @FilePath: /learn-JavaScript-Senior/25_Promise的使用/15_Promise的then结构设计.js
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
        this.state = 'pending';
        // 初始化成功的值为undefined
        this.value = undefined;
        // 初始化成功处理函数队列
        this.onFulfilledCallbacks = [];
        // 初始化失败处理函数队列
        this.onRejectedCallbacks = [];
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                queueMicrotask(() => {
                    this.value = value

                    this.onFulfilledCallbacks(value)
                })
            }
        }
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                queueMicrotask(() => {
                    this.value = reason
                    this.onRejectedCallbacks(reason)
                })
            }
        }
        executor(resolve, reject)
    }
    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            this.onFulfilledCallbacks = onFulfilled
        } else if (this.state === 'rejected') {
            this.onRejectedCallbacks = onRejected
        }
    }
}

const promise = new ZFPromise((resolve, reject) => {
    resolve('xxxx')
    // reject('xxxx1')
})

promise.then((data) => {
    console.log('data1', data);
}, (err => {
    console.log('err1', err);
}))





