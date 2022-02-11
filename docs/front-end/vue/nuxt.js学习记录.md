---
lang: zh-CN
title: nuxt.js学习记录
---

# nuxt.js学习记录

首先需要node.js，然后使用node -v以及vue -V来检测环境是否成功

然后通过以下命令创建项目

```
$ npx create-nuxt-app <项目名>
```

使用以下命令可以使服务跑起来，默认应用运行在 http://localhost:3000
```
$ npm run dev
```
可以在package.json文件中修改服务端口，修改完成后需重启服务
```
"config":{
"nuxt":{
"host":"127.0.0.1",
"port":"8888"
}
}
```
配置全局的css可以在nuxt.config.js文件中，其中‘～’指向根目录
```
css:[
'~assets/css/normalize.css'
]
```
nuxt.config.js文件中的build可以设置loader，如图片资源的打包
```javascript
build: {
rules: [{
test: /\.(png|jpg|gif)$/,
use: {
loader: 'file-loader',
options: {
name: '[name].[ext]',
}
}
}]
}
```
路由跳转使用 <nuxt-link></nuxt-link> 标签进行，:to后面可以传参数，使用$route.params...接收参数
```vue
<nuxt-link :to="{name:'news',params:{newsId:3306}}">News</nuxt-link>
<h2>newsId:{{$route.params.newsId}}</h2>
```
动态路由则可以在文件夹下建立一个下滑线前缀的vue文件，例如_id.vue，在_id.vue中建立模板文件，params后接收的名字需要与建立的动态路由文件名字相同
```vue
<template>
<div>
<h2>newsId:{{$route.params.id}}</h2>
</div>
</template>
```
传入则可以使用<nuxt-link></nuxt-link>进行
```vue
<nuxt-link to="news/123">news_1</nuxt-link>
// or
<nuxt-link :to="{name:'news-id',params:{newsID:1234}}">news_1</nuxt-link>
```
进入一个页面，对于参数的校验是必须的，nuxt.js提供了一个validate()方法进行校验，通过正则，如果符合则进入，如果失败则404
```javascript
export default {
    validate({params}){
    // Must be a number
    return /^\d+$/.test(params.id)
    }
}
```
nuxt.js路由动画效果分全局和局部，全局动画效果在css中使用.page-enter-active,.page-leave-active,.page-enter来操作，例如
```css
.page-enter-active,.page-leave-active{
transition: opacity 2s;
}
.page-enter,.page-leave-active{
opacity: 0;
}
```
如果想使用局部动画则可以使用自定义名，例如：自定义-enter-active
```css
.news-enter-active,.news-leave-active{
transition: all 2s;
font-size: 12px;
}
.news-enter,.news-leave-active{
font-size: 40px;
}
```
自定义后在需要使用动画的页面加入js代码
```
<script>
export default {
    transition:'news'
}
</script>
```
nuxt.js默认模板是在根目录下创建一个app.html文件，但是`<head>`标签内的内容是无法控制的，可以使用{{HEAD}}，body内也需要使用{{APP}}来获取，注意需要大写，同时默认模板需要重启服务才能生效

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    {{ HEAD }}
</head>
<body>
    <h1>默认模板</h1>
    {{ APP }}
</body>
</html>
```
默认布局是建立/修改layouts文件夹下的default.vue文件，只能修改template中的内容，无需重启服务，通常项目当中会使用默认布局

nuxt.js有默认的错误页面，但是也可以自定义，建立/修改layouts文件夹下的error.vue文件，可以通过error获取当前状态码从而显示不同的错误页面
```vue
<template>
<div>
<p v-if="error.statusCode === 404">404</p>
<p v-else>500</p>
</div>
</template>

<script>
export default {
    props:['error']
}
</script>
nuxt.js可以单独设置TDK，title可以通过params传入，然后通过路由接收，description以及keywords可以单独设置，其他meta同理
<nuxt-link :to="{name:'news-id',params:{id:1234,title:'i am news'}}">news_4</nuxt-link>
data(){
return{
title:this.$route.params.title
}
},
head(){
return{
title:this.title,
meta:[
{hid: 'description', name: 'description', content: 'i am news'},
{hid: 'keywords', name: 'keywords', content: 'news,news,news'}
]
}
}
```
nuxt.js的asyncData方法，首先需要安装axios，安装在生产环境
```
npm install axios --save
```
然后在需要使用axios的文件中引入
```
import axios from 'axios'
```
通过axios获取服务器数据，info可以直接通过{{info}}进行调用
```
asyncData() {
return axios.get('https://api.apishop.net/common/joke/getJokesByRandom?apiKey=KeyID&pageSize=1')
.then(res => {
return{info:res.data.result[0].content}
})
.catch(err => {
console.error(err);
})
},
```
使用async方法，更加优雅
```
async asyncData() {
let {data} = await axios.get('https://api.apishop.net/common/joke/getJokesByRandom?apiKey=keyId&pageSize=1')
return {info:data.result[0].content}
}
```
引入图片或者其他资源时候，地址可以使用“～”，在nuxt.js中可以直接定位在根目录
使用npm run generate命令可以对文件进行打包，打包后会生成一个dist文件夹，使用最简单的live-server可以将打包好的静态文件进行访问
