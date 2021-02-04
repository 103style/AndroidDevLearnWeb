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