[TOC]

# JavaScript对象
对象只是一种特殊的数据。对象拥有属性和方法。

`JavaScript` 是面向对象的语言，但 `JavaScript` 不使用类。

在 `JavaScript` 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。

`JavaScript` 基于 `prototype`，而不是基于类的。

---

## 创建对象
以下例子创建了对象的一个新实例，并向其添加了四个属性：
```
person = new Object();
person.firstname = "John";
person.lastname = "Doe";
person.age = 50;
person.eyecolor = "blue";
```

也可以用格式 "`{ name1 : value1, name2 : value2,...nameN : valueN }`"来创建对象。
```
person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};
```

使用对象构造器
```
function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}

var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
```

把方法添加到 JavaScript 对象
```
<script>
    function person(firstname, lastname, age, eyecolor) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.eyecolor = eyecolor;
        this.changeName = changeName;

        function changeName(name) {
            this.lastname = name;
        }
    }
    myMother = new person("Sally", "Rally", 48, "green");
    myMother.changeName("Doe");
    document.write(myMother.lastname);
</script>

//输出
//Doe
```


---

## JavaScript for...in 循环
JavaScript `for...in` 语句循环遍历对象的属性。

以下示例遍历了 person 对象的属性。
```
<!DOCTYPE html>
<html>
<body>
    <p>点击下面的按钮，循环遍历对象 "person" 的属性。</p>
    <button onclick="myFunction()">点击这里</button>
    <p id="demo"></p>
    <script>
        function myFunction() {
            var x;
            var txt = "";
            var person = {
                fname: "Bill",
                lname: "Gates",
                age: 56
            };
            for (x in person) {
                txt = txt + "-" + person[x];
            }
            document.getElementById("demo").innerHTML = txt;
        }
    </script>
</body>
</html>
```

---


## JavaScript 的对象是可变的
```
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// 不会创建 person 的副本，是引用
var x = person;

// x.age 和 person.age 都会改变
x.age = 10;          
```

---


## [JavaScript prototype（原型对象）](https://www.runoob.com/js/js-object-prototype.html)

一个已存在的对象构造器中是不能添加新的属性的.
```
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
 
Person.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

console.log(myMother.nationality);

//输出
//undefined
```

添加属性和方法
```
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
 
Person.prototype.nationality = "English";

var myMother = new Person("Sally", "Rally", 48, "green");
console.log(myMother.nationality);

//输出
//English
```

当然我们也可以使用 `prototype` 属性就可以给对象的构造函数添加新的方法：
```
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
 
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

var myMother = new Person("Sally", "Rally", 48, "green");
console.log(myMother.name);

//输出
//Sally Rally
```

---

## [Number 对象](https://www.runoob.com/js/js-obj-number.html)

JavaScript 只有一种数字类型。 可以使用也可以不使用小数点来书写数字。

所有 JavaScript 数字均为 `64` 位

---

### 精度:
* 整数（不使用小数点或指数计数法）最多为 15 位。
* 小数的最大位数是 17，但是浮点运算并不总是 100% 准确。
  ```
  var x = 0.2+0.1; // 输出结果为 0.30000000000000004
  ```

如果前缀为 `0`，则 JavaScript 会把数值常量解释为八进制数。

如果前缀为 `0x` ，则解释为十六进制数。
```
var y = 0377; //255
var z = 0xFF; // 255
```


无穷大（Infinity）
```
<!DOCTYPE html>
<html>
<body>
    <script>
        myNumber = 2;
        while (myNumber != Infinity) {
            myNumber = myNumber * myNumber;
            document.write(myNumber + '<BR>');
        }
    </script>
</body>
</html>

//输出
//4
//16
//256
//65536
//4294967296
//18446744073709552000
//3.402823669209385e+38
//1.157920892373162e+77
//1.3407807929942597e+154
//Infinity
```

**`除以0也产生了无限`。**

---

### 非数字值: `NaN`
NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值，来指示其不是数字值。

你可以使用 `isNaN()` 全局函数来判断一个值是否是 NaN 值。
```
//一个数字除以一个字符串结果不是一个数字
// 一个数字除以一个字符串数字结果是一个数字

var x = 1000 / "Apple";
isNaN(x); // 返回 true

var y = 100 / "1000";
isNaN(y); // 返回 false  
```

---

### 数字可以是数字或者对象
```
var x = 123;
var y = new Number(123);
typeof(x) // 返回 Number
typeof(y) // 返回 Object
```

```
var x = 123;             
var y = new Number(123);
(x === y) // 为 false，因为 x 是一个数字，y 是一个对象
```


### Number 属性
* `Number.MAX_VALUE`：最大值
* `Number.MIN_VALUE`：最小值
* `Number.NaN`：非数字
* `Number.NEGATIVE_INFINITY`：负无穷，在溢出时返回
* `Number.POSITIVE_INFINITY`：正无穷，在溢出时返回
* `Number.EPSILON`：表示 1 和比最接近 1 且大于 1 的最小 Number 之间的差别
* `Number.MIN_SAFE_INTEGER`：最小安全整数。
* `Number.MAX_SAFE_INTEGER`：最大安全整数。

---

### Number 方法
* `Number.parseFloat()`：将字符串转换成浮点数，和全局方法 parseFloat() 作用一致。
* `Number.parseInt()`：将字符串转换成整型数字，和全局方法 parseInt() 作用一致。
* `Number.isFinite()`：判断传递的参数是否为有限数字。
* `Number.isInteger()`：判断传递的参数是否为整数。
* `Number.isNaN()`：判断传递的参数是否为 isNaN()。
* `Number.isSafeInteger()`：判断传递的参数是否为安全整数。

---

### Number类型原型上的一些方法
* `toExponential()`：返回一个数字的指数形式的字符串，如：1.23e+2
* `toFixed()`：返回指定小数位数的表示形式。
  ```
  var a=123;
  b = a.toFixed(2); // b="123.00"
  ```
* `toPrecision()`：返回一个指定精度的数字。
  
  如下例子中，a=123 中，3会由于精度限制消失:
  ```
  var a = 123;
  b = a.toPrecision(2); // b="1.2e+2"
  ```


---

## [String 对象](https://www.runoob.com/js/js-obj-string.html)

可以使用位置（索引）访问字符串中任何的字符，索引从 `零` 开始
```
var carname="Volvo XC60";

//使用索引读取对应字符
var character=carname[7];

//使用 转义字符 `\`
var answer='It\'s alright';
var answer="He is called \"Johnny\"";

//获取字符串的长度
var len = answer.length

//查找字符串 找到返回对应的索引，未找到返回 -1
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome"); //14
//查找最后一个匹配的字符串
var n = str.lastIndexOf("welcome");

//内容匹配
var str="Hello world!";
str.match("world");// world
str.match("World");// null
str.match("world!");// world!

//替换内容
str = "Please visit Microsoft!"
var n = str.replace("Microsoft","Runoob");
//Please visit Runoob!

//大小写
var txt = "Hello World!";       // String
var txt1 = txt.toUpperCase();   // txt1 文本会转换为大写
var txt2 = txt.toLowerCase();   // txt2 文本会转换为小写

//字符串转为数组
txt = "a,b,c,d,e"   // String
txt.split(",");   // 使用逗号分隔
txt.split(" ");   // 使用空格分隔
txt.split("|");   // 使用竖线分隔 
```

---

### 字符串属性和方法
* 属性:
  * `length` : 字符串的长度
  * `prototype` : 允许您向对象添加属性和方法
  * `constructor` : 对创建该对象的函数的引用

* 方法:
  * `charAt()` ： 返回在指定位置的字符。
  * `charCodeAt()` : 返回在指定的位置的字符的 Unicode 编码。
  * `concat()` : 连接两个或更多字符串，并返回新的字符串。
  * `fromCharCode()` : 	将 Unicode 编码转为字符。
  * `indexOf()` : 返回某个指定的字符串值在字符串中首次出现的位置。
  * `lastIndexOf()` : 	从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
  * `match()` :  查找找到一个或多个正则表达式的匹配。
  * `replace()` : 在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
  * `search()` : 查找与正则表达式相匹配的值。
  * `slice()` : 提取字符串的片断，并在新的字符串中返回被提取的部分。
  * `split()` : 把字符串分割为字符串数组。
  * `startsWith()`：查看字符串是否以指定的子字符串开头。
  * `substr()` : 从起始索引号提取字符串中指定数目的字符。
  * `substring()` : 提取字符串中两个指定的索引号之间的字符。
  * `toLowerCase()` : 把字符串转换为小写。
  * `toUpperCase()` : 把字符串转换为大写。
  * `trim()` ：去除字符串两边的空白
  * `valueOf()` : 返回某个字符串对象的原始值。

---

## Date对象
创建日期
```
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);


var today = new Date()
var d1 = new Date("October 13, 1975 11:13:00")
var d2 = new Date(79,5,24)
var d3 = new Date(79,5,24,11,33,0)
```

* `getFullYear()`：获取年份。
* `setFullYear()`：设置具体的日期。
  ```
  //设置 2020/11/03
  var d = new Date();
  //月数是从0至11
  d.setFullYear(2020,10,3);
  ```
* `getTime()`：返回从 1970 年 1 月 1 日至今的毫秒数。
* `toUTCString()`：将当日的日期（根据 UTC）转换为字符串。
* `getDay()`：获取显示星期数字。


两个日期比较:
```
var x = new Date();
x.setFullYear(2100, 0, 14);
var today = new Date();

if (x > today) {
    alert("今天是2100年1月14日之前");
} else {
    alert("今天是2100年1月14日之后");
}
```

---

## [Array（数组） 对象](https://www.runoob.com/js/js-obj-array.html)

创建一个数组
```
var myCars = new Array();
myCars[0] = "Saab";
myCars[1] = "Volvo";
myCars[2] = "BMW";

//在一个数组中你可以有不同的对象
var myArray = new Array();
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

创建新方法
```
Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
}
```

* `concat()`：合并数组
  ```
  a.concat(b); //合并两个数组
  a.concat(b, c); //合并三个数组
  ```

* `join()`：用数组的元素组成字符串
  ```
  function myFunction() {
      var fruits = ["Banana", "Orange", "Apple", "Mango"];
      var x = document.getElementById("demo");
      x.innerHTML = fruits.join();
  }
  ```
* `pop()`：删除数组的最后一个元素 
* `push()`：数组的末尾添加新的元素
* `reverse()`：将一个数组中的元素的顺序反转排序
* `shift()`：删除数组的第一个元素
* `slice()`：从一个数组中选择元素
* `sort()`：数组排序
  ```
  //字母顺序
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  
  //数字升序
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b) {
      return a - b
  });
  
  //数字降序
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b) {
      return b - a
  });
  ```
* `splice()`：在数组的第2位置添加一个元素
* `unshift()`：在数组的开头添加新元素

---

## Boolean 对象
值为如下之一, 则为 `false`
```
0
-0
null
""
false
undefined
NaN
```

---

## Math 对象
```
Math.E
Math.PI
Math.SQRT2
Math.SQRT1_2
Math.LN2
Math.LN10
Math.LOG2E
Math.LOG10E
```

* `round()` 小数变整数 四舍五入
* `random()` 随机数
* `max()`
* `min()`
* `sqrt()` 开方


---


## [RegExp 对象](https://www.runoob.com/js/js-obj-regexp.html)
RegExp：是正则表达式（regular expression）的简写。

语法:
```
//var patt = new RegExp(pattern,modifiers);
var re = new RegExp("\\w+");

//or

//var patt = /pattern/modifiers;
var re = /\w+/;
```

RegExp 修饰符
* `i` - 修饰符是用来执行不区分大小写的匹配。
* `g` - 修饰符是用于执行全文的搜索（而不是在找到第一个就停止查找,而是找到所有的匹配）。
```
//在字符串中不区分大小写找"runoob"
var str = "Visit RUnoob";
var patt1 = /runoob/i;

//匹配到 RUnoob
```

```
//全文查找 "is"
var str = "Is this all there is?";
var patt1 = /is/g;

//匹配到 Is 和 is
```

```
//全文查找和不区分大小写搜索 "is"
var str = "Is this all there is?";
var patt1 = /is/gi;

//匹配到 Is、 this中的is、is
```

* `test()`：搜索字符串指定的值，根据结果并返回真或假。
  ```
  var patt1 = new RegExp("e");
  var b = patt1.test("The best things in life are free");
  //b = true
  ```

* `exec()`：检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
  ```
  var patt1 = new RegExp("e");
  var res = patt1.exec("The best things in life are free");
  //res = e
  ```

---