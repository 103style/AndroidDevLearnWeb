let s: string = 'a'

let num: number = 1

let isMale: boolean = true

let arr: number[] = [1, 2, 3]

let list: Array<string> = ['1', '2', '3']

let dic: [string, number] = ['key', 2]

let user = {
	name: '103style',
	age: 25
}
console.log(user.age)

let user2: {
	name: string,
	age: number,
} = {
	name: '103tech',
	age: 2
}

console.log(user2.name)

let a: any = 4;
a = 'text';
a = true;


let numArr: number[] = [1, 2, 3]
let [num1, num2] = numArr
console.log(num1)
console.log(num2)

let website = {
	wName: '103style',
	wAge: 2
}
//对象按照属性名称结构
//默认的浏览器环境中， window本身就有一个成员叫 name
let { wName: mName, wAge } = website;
console.log(mName)


function add(x: number, y: number): number {
	return x + y;
}
add(1, 2);

function add2([x, y]): number {
	return x + y;
}
add2([3, 4]);




function t(tObject: { name: string, age?: number }): void {
	let { name, age = 10 } = tObject;
}


function add3(a: number, b: number = 20): number {
	return a + b;
}
add3(2)
add3(10, 15)

function sum(...args: number[]): number {
	let sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	})
	return sum;
}
sum(1, 2, 3, 4, 5, 6)


let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = [...arr1, ...arr2]
console.log(arr3)

//javascript 申明类
// function Person(name: string, age: number) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.sayHello = function () {
// 	console.log(this.name, this.age);
// }
// let p1 = new Person('103style', 25);
// p1.sayHello();

class Person {
	public name: string; //公开属性
	age: number; //默认修饰为 public
	private type: number = 1; //私有属性
	protected gender: number = 2; //子类可以访问
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	sayHello(): void {
		console.log(this.name, this.age);
	}
}
let p2 = new Person('103style', 25);
p2.sayHello();


class Student extends Person {
	constructor(name: string, age: number) {
		super(name, age)
		console.log(this.gender);

	}
}


class Animal {
	isMale: boolean;
	constructor(public type: string, public age: number, isMale: boolean) {
		this.isMale = isMale;
	}
}

let animal = new Animal('leopard', 10, true);
console.log(animal.type, animal.age, animal.isMale);
