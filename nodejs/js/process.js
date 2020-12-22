console.log("Process 相关方法：")

console.log("process.platform = " + process.platform);

console.log("当前进程的工作目录 = " + process.cwd());
//仅在 POSIX 平台上可用
// console.log("进程的群组标识 = " + process.getgid());
//仅在 POSIX 平台上可用
// console.log("进程的用户标识 = " + process.getuid());
//仅在 POSIX 平台上可用
// console.log("程的群组 iD 数组 = " + process.getgroups());

console.log("进程所用的内存状况 = " + process.memoryUsage());

console.log("Node 已经运行的秒数 = " + process.uptime());

console.log("当前进程的高分辨时间 = " + process.hrtime());