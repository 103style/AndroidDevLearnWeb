//helloworld.js 
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };

    this.world = function() {
        console.log('Hello World!');
    }
};
//对外暴露对象
module.exports = Hello;

//对外暴露 属性或方法
exports.test = function() {
    console.log("test");
}