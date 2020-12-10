### BrowserSync
同步更新,更改文件后不需要手动刷新页面 BrowserSync 文档 [http://www.browsersync.cn/](http://www.browsersync.cn/)
```
//安装
npm install -g browser-sync

//启动 BrowserSync

// --files 路径是相对于运行该命令的项目（目录） 
browser-sync start --server --files "css/*.css"

// --files 路径是相对于运行该命令的项目（目录） 
browser-sync start --server --files "css/*.css, *.html"
// 如果你的文件层级比较深，您可以考虑使用 **（表示任意目录）匹配，任意目录下任意.css 或 .html文件。 
browser-sync start --server --files "**/*.css, **/*.html"
```

**运行之后出现 `Cannot GET /` 提示， 在当前目录下添加 index.html文件**
**然后修改访问链接为 http://localhost:3000/文件路径， 例如 http://localhost:3000/helloworld.html**