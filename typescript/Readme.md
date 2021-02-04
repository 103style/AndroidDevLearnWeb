# TypeScript

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



----