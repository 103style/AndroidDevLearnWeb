[TOC]

#  Vue Ajax -- axios

Vue.js 2.0 版本推荐使用 axios 来完成 ajax 请求。

Axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。

Github开源地址： [https://github.com/axios/axios](https://github.com/axios/axios)


## 安装

使用 CDN 
```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

npm安装
```
npm install -g axios
```

---

## 示例代码
* [服务端代码 server.js](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/js/server.js) --- 执行服务端代码：`node server.js`
 
* [示例代码 vue_ajax.html](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_ajax.html)

---


## GET
```
<script type=" text/javascript ">
    var vm = new Vue({
        el: "#vue_ajax ",
        data: {
            info: null,
            sites: null,
        },
        mounted() {
            axios
                .get('http://localhost:8081/')
                .then(res => {
                    this.info = res;
                    this.sites = res.data.sites;
                })
                .catch(function(err) {
                    console.log(err)
                });
        }
    });
</script>
```


带参数Get请求
```
axios.get('http://localhost:8081/?name=103Tech&url=103style.top')

//or

axios.get('http://localhost:8081/', {
        params: {
            name: '103Tech',
            url: '103style.top'
        }
    })
    .then(res => {
        this.response = res;
    })
    .catch(function(err) {
        console.log(err)
    });
```


---

## POST
```
axios
    .post('http://localhost:8081/', {
        params: {
            params1: 'A',
            params2: 'B',
            params3: 'C',
            params4: 'D',
        }
    }).then(res => {
        this.postRes = res
    })
    .catch(function(err) {
        console.log(err)
    });
```

---


## 并发
* `axios.all(iterable)`

* `axios.spread(callback)`


```
function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function(acct, perms) {
        // 两个请求现在都执行完成
    }));
```

---

## axios API
> [request-config](https://github.com/axios/axios#request-config)

可以通过向 axios 传递相关配置来创建请求。
```
axios(config)
// 发送 POST 请求
axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
});
//  GET 请求远程图片
axios({
        method: 'get',
        url: 'http://bit.ly/2mTM3nY',
        responseType: 'stream'
    })
    .then(function(response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
axios(url[, config])
// 发送 GET 请求（默认的方法）
axios('/user/12345');
```

---


## 请求方法的别名
为方便使用，官方为所有支持的请求方法提供了别名，可以直接使用别名来发起请求：
```
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```

---

## 创建实例
可以使用自定义配置新建一个 axios 实例：
```
axios.create([config])
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

---

## 响应结构
> [示例代码 vue_ajax.html](https://github.com/103style/AndroidDevLearnWeb/blob/master/vue/html/vue_ajax.html)
```
{
  // `data` 由服务器提供的响应
  data: {},

  // `status`  HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: "OK",

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
```

---

## 配置的默认值
你可以指定将被用在各个请求的配置默认值。

全局的 axios 默认值：
```
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

自定义实例默认值：
```
// 创建实例时设置配置的默认值
var instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 在实例已创建后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

---


## 配置的优先顺序
配置会以一个优先顺序进行合并。这个顺序是：在 lib/defaults.js 找到的库的默认值，然后是实例的 defaults 属性，最后是请求的 config 参数。后者将优先于前者。

示例如下：
```
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  timeout: 5000
});
```

---

## 拦截器
在请求或响应被 then 或 catch 处理前拦截它们。

```
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```


---


## 取消
使用 `CancelToken` 取消请求。
```
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
```

---


## 请求时使用 application/x-www-form-urlencoded
axios 会默认序列化 JavaScript 对象为 JSON。 

如果想使用 `application/x-www-form-urlencoded` 格式，你可以使用下面的配置。

在浏览器环境，你可以使用 URLSearchParams API：
```
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

除此之外，你可以使用 qs 库来编码数据:
```
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));


// Or in another way (ES6),

import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

---

## Node.js 环境
在 node.js里, 可以使用 `querystring` 模块:

```
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

当然，同浏览器一样，你还可以使用 `qs` 库。

---