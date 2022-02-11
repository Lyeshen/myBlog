<template><h1 id="nuxt-js学习记录" tabindex="-1"><a class="header-anchor" href="#nuxt-js学习记录" aria-hidden="true">#</a> nuxt.js学习记录</h1>
<p>首先需要node.js，然后使用node -v以及vue -V来检测环境是否成功</p>
<p>然后通过以下命令创建项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npx create-nuxt-app &lt;项目名>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用以下命令可以使服务跑起来，默认应用运行在 http://localhost:3000</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm run dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以在package.json文件中修改服务端口，修改完成后需重启服务</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"config":{
"nuxt":{
"host":"127.0.0.1",
"port":"8888"
}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>配置全局的css可以在nuxt.config.js文件中，其中‘～’指向根目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>css:[
'~assets/css/normalize.css'
]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>nuxt.config.js文件中的build可以设置loader，如图片资源的打包</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'[name].[ext]'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>路由跳转使用 <nuxt-link></nuxt-link> 标签进行，:to后面可以传参数，使用$route.params...接收参数</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:<span class="token punctuation">'</span>news<span class="token punctuation">'</span>,params:{newsId:3306}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>News<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nuxt-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>newsId:{{$route.params.newsId}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>动态路由则可以在文件夹下建立一个下滑线前缀的vue文件，例如_id.vue，在_id.vue中建立模板文件，params后接收的名字需要与建立的动态路由文件名字相同</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>newsId:{{$route.params.id}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>传入则可以使用<nuxt-link></nuxt-link>进行</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>news/123<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>news_1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nuxt-link</span><span class="token punctuation">></span></span>
// or
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:<span class="token punctuation">'</span>news-id<span class="token punctuation">'</span>,params:{newsID:1234}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>news_1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nuxt-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>进入一个页面，对于参数的校验是必须的，nuxt.js提供了一个validate()方法进行校验，通过正则，如果符合则进入，如果失败则404</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">validate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>params<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Must be a number</span>
    <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\d+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>nuxt.js路由动画效果分全局和局部，全局动画效果在css中使用.page-enter-active,.page-leave-active,.page-enter来操作，例如</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.page-enter-active,.page-leave-active</span><span class="token punctuation">{</span>
<span class="token property">transition</span><span class="token punctuation">:</span> opacity 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.page-enter,.page-leave-active</span><span class="token punctuation">{</span>
<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果想使用局部动画则可以使用自定义名，例如：自定义-enter-active</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.news-enter-active,.news-leave-active</span><span class="token punctuation">{</span>
<span class="token property">transition</span><span class="token punctuation">:</span> all 2s<span class="token punctuation">;</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.news-enter,.news-leave-active</span><span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>自定义后在需要使用动画的页面加入js代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
export default {
    transition:'news'
}
&lt;/script>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>nuxt.js默认模板是在根目录下创建一个app.html文件，但是<code>&lt;head&gt;</code>标签内的内容是无法控制的，可以使用{{HEAD}}，body内也需要使用{{APP}}来获取，注意需要大写，同时默认模板需要重启服务才能生效</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    {{ HEAD }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>默认模板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    {{ APP }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>默认布局是建立/修改layouts文件夹下的default.vue文件，只能修改template中的内容，无需重启服务，通常项目当中会使用默认布局</p>
<p>nuxt.js有默认的错误页面，但是也可以自定义，建立/修改layouts文件夹下的error.vue文件，可以通过error获取当前状态码从而显示不同的错误页面</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error.statusCode === 404<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>404<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>500<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
nuxt.js可以单独设置TDK，title可以通过params传入，然后通过路由接收，description以及keywords可以单独设置，其他meta同理
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{name:<span class="token punctuation">'</span>news-id<span class="token punctuation">'</span>,params:{id:1234,title:<span class="token punctuation">'</span>i am news<span class="token punctuation">'</span>}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>news_4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nuxt-link</span><span class="token punctuation">></span></span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>nuxt.js的asyncData方法，首先需要安装axios，安装在生产环境</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install axios --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后在需要使用axios的文件中引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import axios from 'axios'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过axios获取服务器数据，info可以直接通过{{info}}进行调用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>asyncData() {
return axios.get('https://api.apishop.net/common/joke/getJokesByRandom?apiKey=KeyID&amp;pageSize=1')
.then(res => {
return{info:res.data.result[0].content}
})
.catch(err => {
console.error(err);
})
},
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>使用async方法，更加优雅</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>async asyncData() {
let {data} = await axios.get('https://api.apishop.net/common/joke/getJokesByRandom?apiKey=keyId&amp;pageSize=1')
return {info:data.result[0].content}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>引入图片或者其他资源时候，地址可以使用“～”，在nuxt.js中可以直接定位在根目录
使用npm run generate命令可以对文件进行打包，打包后会生成一个dist文件夹，使用最简单的live-server可以将打包好的静态文件进行访问</p>
</template>
