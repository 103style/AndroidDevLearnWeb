### Doc
慕课网  [从零做一个前端开源项目](https://www.imooc.com/learn/1003) 学习记录

课程文档：[http://www.imooc.com/article/28240](http://www.imooc.com/article/28240)


#### 和文档有区别的地方如下：

* 安装相关的包 `babel-loader@7` 和 `babel-preset-env` 是根据报错信息和提示信息修改的版本
  ```
  npm i babel-core babel-loader@7 babel-polyfill babel-preset-env babel-preset-latest webpack webpack-cli --save-dev
  ```


* `.babelrc` 中的配置修改为
  ```
  {
      "presets": ["env", "latest"],
      "plugins": []
  }
  ```


* 安装 `http-server`
  ```
  npm install http-server
  ```

---