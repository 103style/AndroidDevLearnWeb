[TOC]

# TypeScript
在 JavaScript 的基础上添加了 类型，有助于在开发阶段发现一些隐藏的问题。

## Install
```
> npm i -g typescript
```

查看版本：
```
> tsc -v
```

---

## 数据类型

指定类型之后就不能复制其他类型了。

* `String` 字符串
  ```
  let s: string = 'a'
  ```

* `Number` 数字
  ```
  let num: number = 1
  ```

* `Boolean` 布尔类型
  ```
  let isMale: boolean = true
  ```

* `Array` 数组 
  ```
  let arr: number[] = [1, 2, 3]
  
  let list: Array<string> = ['1', '2', '3']
  ```

* 元组
  ```
  let dic: [string, number] = ['key', 2]
  ```

* `Object` 对象
  ```
  let user = {
      name: '103style',
      age: 25
  }
  ```
  
* `Object` 指定结构的对象
  ```
  let user2: {
      name: string,
      age: number,
  } = {
      name: '103tech',
      age: 2
  }
  ```

* `Any` 类型, 相对于 `JavaScript` 不指定类型
  ```
  let a: any = 4;
  a = 'text';
  a = true;
  ```

* `Void` 类型，用作没有返回值的函数的返回类型
  ```
  function test(): void {
      console.log('103Tech!');
  }
  ```

* `Null` 和 `Undefined`,  和 Void 类似，用户不是很大。
  
  默认情况 null 和 undefined 是所以类型的子类型


---

## 解构赋值 

* 数组
  ```
  let numArr: number[] = [1, 2, 3]
  //将 1, 2 分别赋值给 num1  num2
  let [num1, num2] = numArr
	```

* 对象
  ```
  let website = {
      wName: '103style',
      wAge: 2
  }
  //对象按照属性名称结构
  //默认的浏览器环境中， window本身就有一个成员叫 name
  let { wName: mName, wAge } = website;
  console.log(mName)
	```

* 函数参数
  ```
  function add2([x, y]): number {
      return x + y;
  }
  add2([3, 4]);
	```


---


## 参数
* 可选参数
  ```
  function t(name: string, age?: number): void {
  }
	```

* 默认参数
  ```
  function add(a: number, b: number = 20): number {
     return a + b;
  }
	```

* 不定参数
  ```
  function sum(...args: number[]): number {
      let sum = 0;
      args.forEach(function (arg) {
          sum += arg;
      })
      return sum;
  }
  sum(1, 2, 3, 4, 5, 6)
	```

* 数组展开操作符
  ```
  let arr1 = [1,2,3] 
  let arr2 = [4,5,6]
  let arr3 = [...arr1, ...arr2]  // [1,2,3,4,5,6]
	```

* 对象展开操作符
  ```
  let obj1 = {
      name: '103Tech',
      website: '103style.top'
  }

  let obj2 = {
      ...obj1,//对象展开操作符
      age: 2
  }
  console.log(obj2)
  ```

----

## 类
* JavaScript
  ```
  function Person(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  Person.prototype.sayHello = function () {
      console.log(this.name, this.age);
  }
  let p1 = new Person('103style', 25);
  p1.sayHello();
  ```

* TypeScript
  ```
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
  ```
* 继承
  ```
  class Student extends Person {
      constructor(name: string, age: number) {
          super(name, age);
          console.log(this.gender);
      }
  }
  ```

* 简写
  ```
  class Animal {
      isMale: boolean;
      constructor(public type: string, public age: number, isMale: boolean) {
          this.isMale = isMale;
      }
  }
  let animal = new Animal('leopard', 10, true);
  console.log(animal.type, animal.age, animal.isMale);
  ```

---