// 引入 events 模块
var events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

var eventA = 'eventA'
var eventB = 'eventB';

// 创建事件处理程序
var eventAHandler = function handler() {
    console.log("get a eventA.");

    // 触发 eventname 事件 
    eventEmitter.emit(eventB);
}

// 给事件 eventdemo 绑定处理程序 eventHandler
eventEmitter.on(eventA, eventAHandler);

// 使用匿名函数绑定 eventname 事件
eventEmitter.on(eventB, function() {
    console.log('get a eventB.');
});

// 触发 eventdemo 事件 
eventEmitter.emit(eventA);

console.log("finish.");