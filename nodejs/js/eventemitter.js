var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
}

var eventName = 'connection';
// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener(eventName, listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on(eventName, listener2);

// 绑定单次监听器
eventEmitter.once(eventName, function() {
    console.log("执行了单次监听器。");
})

//获取对应事件的 监听器总数
var eventListeners = eventEmitter.listenerCount(eventName);
console.log(eventListeners + " 个监听器监听连接事件。");

// 触发 connection 事件 
eventEmitter.emit(eventName);

// 移除监绑定的 listener1 函数
eventEmitter.removeListener(eventName, listener1);
console.log("listener1 不再受监听。");

// 再次触发 connection 事件
eventEmitter.emit(eventName);

eventListeners = eventEmitter.listenerCount(eventName);
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");