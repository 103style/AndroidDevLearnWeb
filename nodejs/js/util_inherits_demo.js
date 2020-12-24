var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log("name = " + this.name);
};

function Sub() {
    this.name = 'sub';
}

//实现对象原型复制
util.inherits(Sub, Base);
var objBase = new Base();
console.log('Base.showName()');
objBase.showName();
console.log('Base.sayHello()');
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
console.log('Sub.showName()');
objSub.showName();
//objSub.sayHello(); 
console.log(objSub);