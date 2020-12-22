console.log("缓冲区编码示例：")
const buf = Buffer.from('103style', 'ascii');
// 输出103style
console.log("ascii编码 = " + buf.toString('ascii'))
    // 输出103style
console.log("utf8编码 = " + buf.toString('utf8'));
// 输出 3130337374796c65
console.log("hex编码 = " + buf.toString('hex'));
// 输出 MTAzc3R5bGU=
console.log("base64编码 = " + buf.toString('base64'));


console.log("\n写入缓冲区示例：")
var buffer = Buffer.alloc(256);
var len = buffer.write('103style.github.io');
console.log("写入内容为" + buffer.toString() + "字节长度 len = " + len);


console.log("\n读取缓冲区示例：")
buffer = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buffer[i] = i + 97;
}
// 输出: abcdefghijklmnopqrstuvwxyz
console.log("ascii编码 = " + buffer.toString('ascii'));
//使用 'ascii' 编码, 并输出: abcde
console.log("0 - 5 位的ascii编码 = " + buffer.toString('ascii', 0, 5));
// 使用 'utf8' 编码, 并输出: abcde 
console.log("0 - 5 位的utf8编码 = " + buffer.toString('utf8', 0, 5));
// 使用默认的 'utf8' 编码, 并输出: abcde
console.log("0 - 5 位的undefined，默认 utf8 编码 = " + buffer.toString(undefined, 0, 5));


console.log("\n将 Buffer 转换为 JSON 对象示例：")
buffer = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buffer);
// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log("buffer 转 json = " + json);
const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});
// 输出: <Buffer 01 02 03 04 05>
console.log("json 转 buffer = ");
console.log(copy);


console.log("\n将 合并Buffer缓冲区示例：")
var buffer1 = Buffer.from(('103style.github.io'));
var buffer2 = Buffer.from((' 公众号：103Tech'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("合并 buffer1 和 buffer2 之后的内容 = " + buffer3.toString());


console.log("\nBuffer缓冲区比较示例：")
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);
if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}


console.log("\n拷贝缓冲区示例：")
var buf1 = Buffer.from('abcdefghijkl');
console.log("buf1 = " + buf1.toString());
var buf2 = Buffer.from('103Tech');
console.log("buf2 = " + buf2.toString());
//将 buf2 插入到 buf1 指定下标为2 的位置上
buf2.copy(buf1, 2);
console.log("将buf2插入到 buf1的 下标为2的位置后， buf1 = " + buf1.toString());


console.log("\n缓冲区裁剪示例：")
var buffer1 = Buffer.from('103style.github.io');
console.log("buffer1 = " + buffer1.toString());
// 剪切缓冲区
var buffer2 = buffer1.slice(0, 8);
console.log("buffer1.slice(0, 8) = " + buffer2.toString());