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


以下为原文档：

> ## 目录
> 由于本文内容较多，先列一下目录供参考。
> * 什么是开源？
> * 为何做开源？
> * 做什么？
> * 注册账号
> * 搭建开发环境
> * 提交代码
> * 创建官网
> * 如何宣传？
> * 持续迭代
> * 总结
> 
> 
> ## 搭建开发环境
> ### 初始化
> 进入项目目录，然后命令行运行 `npm init` ，按照提示进行初始化即可。
> 提示中的信息，能写的都写上，别随意忽略了。初始化完成之后，项目根目录下会有 `package.json` 的文件。
> 
> ### 规范版本号
> 打开 `package.json` 文件，将版本号定义为 `"version": "0.0.1"` 。
> 以后我们每次正式提交代码，版本号都不一样。版本号分三级，分别为：
> * 一级，重构版本
> * 二级，重大功能改进
> * 三级，小升级或者 bug 修复
> 
> 
> 为何从 `0.0.1` 开始？因为 `0.x.x` 可以认为是非正式版本、测试版，而从 `1.x.x` 开始，就是正式发布的版本了。
> 
> ### 规范一级目录
> 项目的一级目录要提前规范好，最起码一些常用的目录要提前订好留用，不能乱来。例如：
> * `src` - 源代码
> * `release` - 发布结果
> * `test` - 单元测试用例
> * `doc` - 文档
> * `example` - 示例
>   
> ### 构建工具
> 这部分比较独立，内容也比较多，就不详细讲了，用最常用的 webpack 做一个简单演示吧。
> 
> 安装插件 `npm i babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest webpack webpack-cli --save-dev` 。
> 
> 项目根目录下创建 `.babelrc` 文件，内容如
> ```
> {
>     "presets": ["es2015", "latest"],
>     "plugins": []
> }
> ```
> 项目根目录下创建 `webpack.config.js` 文件，内容如
> ```
> module.exports = {
>     entry: './src/index.js',
>     output: {
>         path: __dirname,
>         filename: './release/bundle.js'
>     },
>     module: {
>         rules: [{
>             test: /\.js?$/,
>             exclude: /(node_modules)/,
>             loader: 'babel-loader'
>         }]
>     }
> }
> ```
> 最后，修改 `package.json` 中的 `scripts` ，增加 `"release": "webpack"` 。
> 然后命令行运行 `npm run release` ，就可生成 `release` 的内容。
> 
> ### 运行示例
> release 的内容已经发布出来了，还要运行起来，最简单的方式，在 `example` 创建 `test.html`，然后引用 release 的内容。
> ```
> <!DOCTYPE html>
> <html>
> <head>
>     <meta charset="UTF-8">
>     <title>example</title>
> </head>
> <body>
>     <p>example</p>
>     <script src="../release/bundle.js"></script>
> </body>
> </html>
> ```
> 
> 为何规范化运行，可以修改 `package.json` 中的 `scripts` ，增加 `"example": "http-server -p 8880"` 。
> 然后命令行运行 `npm run example` ，浏览器访问 `http://localhost:8880/example/test.html` 。
> 
> ### 规范 git 分支
> 至少要存在两个分支，`master` 和 `dev` ， `dev` 是开发中的代码。
> 当然，你可以规范更多的分支，例如 `next` `fix-bug` 等，但是注意一个原则 —— 用不到的就先不要规划。
> 
> ### 完善 README.md
> `README.md` 是开源项目的一张脸，用户的第一印象。必须包含以下内容：
> * 产品简介（此处要突出特点，打差异化竞争）
> * 产品安装和下载
> * 快速使用（详细的使用文档或者二次开发文档，外链即可）
> * 交流提问区
> * 关于作者（放你的博客链接，和收款二维码）
> 
> 
> 最后，把以上完成的工作，都提交到 github 中。
> 
> ## 提交代码
> ### 写代码
> 具体写什么代码不是本文的重点，你尽情的根据自己的项目来写自己的代码就是了。
> 记得一定要使用编码规范的工具，例如 `es-lint` 等，否则经过长时间的维护，必然留坑。
> 
> ### 写文档 & 写测试用例
> **注意，文档和测试用例对于一个开源产品来说非常重要！非常重要！非常重要！而且，文档和测试用例本身就是代码不可分割的一部分。**
> 
> 如何写测试用例，需要用到其他工具，内容也相对独立，这里就不介绍了，自己去查一查吧。再次强调，测试用例很重要！！！
> 
> 在写文档之前，还需要准备其他的工具。定位到项目目录下，`npm i gitbook-cli -g` 安装 `gitbook` ，然后创建 `SUMMARY.md` ，内容如下：
> ```
> # Summary
> 
> * [项目介绍](README.md)
> * [使用文档](doc/use/README.md)
>     * [使用1](doc/use/use1.md)
>     * [使用2](doc/use/use2.md)
> * [二次开发](doc/dev/README.md)
>     * [开发1](doc/dev/dev1.md)
>     * [开发2](doc/dev/dev2.md)
> 
> ```
> 其实一看这个文件内容就知道，这是一个文档的目录，你可以根据自己项目的需要重新定义这个目录。
> 需要注意的是，第一行 `* [项目介绍](README.md)` 对应的是已经存在的 `README.md` 文件。
> 
> 运行 `gitbook init` ，会看到各个文件都被创建了，就可以完善各个文档的内容。
> 内容完成之后，运行 `gitbook build` 可以将 md 文件发布为 html 文件，默认放在 `_book` 文件夹。
> 启动了 `npm run example` 之后，可以访问 `http://127.0.0.1:8880/_book/` 查看效果。
> 
> 最后，再次修改一下 `README.md` ，把文档的链接加上
> ```
> [如何使用](./doc/use/README.md) [二次开发](./doc/dev/README.md)
> ```
> 
> ### 提交第一版代码
> 首先，修改一下 `.gitignore` 文件，加上一行 `_book` ，把打包出来的文件忽略掉。
> 然后用之前的方式提交到 github 的 master 分支，这里不再赘述了。
> 
> 接下来，创建 tag 并提交，代码如下：
> ```
> git tag -a 'v0.0.1' -m 'first commit'
> git push origin v0.0.1
> ```
> 提交之后，下载地址就有了 ， `https://github.com/fast-cache/fast-cache/releases` 这里可以下载到各个版本的源码。
> 
> 最后要提交到 npm 上，能让使用者通过 npm 进行安装。
> 首先，运行 `npm add user` 和 `npm login` 来登录，根据提示将你之前注册 npm 时的账号、密码、邮箱写上就行了，问题不大。
> 然后，在项目的根目录运行 `npm publish .` ，**此时问题来了！！！**
> 
> 运行之后报了 `403` 错误，刚才明明登录成功了，不可能有权限问题呀。
> 后来一查才知道，**原来 `fast-cache` 在 npm 中和其他项目重名了！！！** 没办法，只能改名，
> 将 `package.json` 中的名称改为 `fast-cache-npm` ，然后再发布就成功了。
> 
> 发布之后，通过 `https://www.npmjs.com/package/fast-cache-npm` 就可以访问 npm 项目主页了。
> 
> **注意，为项目取名时，一定要提前把名字在 github 和 npm 搜索一下，确认没有重名才行！！！**
> 
> ### 升级代码并提交
> 上述是第一次提交代码的流程，下面简述一下升级代码之后的提交流程。在代码开发阶段的步骤总结如下：
> * 来一个 dev 分支，不要在 master 分支开发
> * 修改 package.json 版本号，按照之前既定的版本规则修改，不能乱改
> * 修改代码、文档和测试用例
> * 自测
> * 将 dev 分支提交到远程
> 
> 代码开发完成之后，提交的流程如下：
> * 再次确认版本号，因为版本号非常重要
> * 将 dev 合并到 master ，并提交 master 到远程
> * 创建 tag 并提交到远程
> * 提交到 npm
> 
> ### 合并 pr
> pr 即 Pull Request 的简称。
> 
> 开源软件最大的特色就是允许全世界的开发者都能为其贡献代码，你这个开源项目也不例外。
> 其他人很有可能会通过 github 的 pr 为你的项目贡献自己的代码，到时候你既得欣然接受，又不能茫然接受。
> 
> 其他人贡献的 pr 可以通过 `https://github.com/fast-cache/fast-cache/pulls` 链接看到。
> 对于每一个 pr ，如果你想合并，直接 merge 就好了（合并完之后，本地代码要随时更新一下）；如果你不想合并，留言说明然后关闭掉即可。
> 
> ## 创建官网
> 我们通过 `github pages` 的机制即可免费创建项目的挂网，不用花一分钱。
> 
> ### 创建项目
> 登录 github ，创建一个名为 `fast-cache.github.io` 的项目，名字必须是这一个！！！然后下载到本地，即 `git clone xxxx` 。
> 然后，进入项目目录，新建一个 `index.html` ，然后随便写点什么，例如 `<h1>hello world</h1>` ，提交到 github 远程。
> 
> 最后，访问 `fast-cache.github.io` ，你就能看到刚才的内容了，最简单的官网就这么出来了。
> 做到这里，你应该知道 github pages 就是一个静态页面的服务器，上传相应的 html 就能显示。
> 
> ### 生成官网
> 此前用 gitbook 将文档生成为 html 了，应该还记得。那么我们现在重新运行 `gitbook build` 生成 html 
> ，然后将所有的 html 拷贝到这里来，全部提交上去，正式的官网也就出来了。
> 
> ![图片描述](http://img1.sycdn.imooc.com/5aeabcd20001e24228721210.png)
> 
> ### 更新 README.md
> 记得要修改 `README.md` ，把官网的地址加进去。
> 
> ...