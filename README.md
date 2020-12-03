# AndroidDevLearnWeb

### install and config
* nodejs 和 npm 版本
  ```
  > node -v
  v12.18.3
  
  > npm -v
  6.14.8
  ```

* 修改npm下载为淘宝的镜像地址
  ```
  //通过 npm config ls 获取当前配置
  > npm config ls

  // 修改下载地址
  > npm config set registry "https://registry.npm.taobao.org/"
  ```
 
  //注意 npm config ls 输出中的  `prefix = "D:\\nvm\\npm"`
  //这个是下载安装目录  可以修改为自己喜欢的位置
  > npm config set prefix "D:\\nvm\\npm"

  //修改成功之后 可以 通过 npm config ls 查看是否修改成功
  
---

