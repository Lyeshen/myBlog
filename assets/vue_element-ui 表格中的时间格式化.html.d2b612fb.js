import{d as e}from "./app.06db0539.js";import{_ as n}from "./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h1 id="vue-element-ui-\u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#vue-element-ui-\u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316" aria-hidden="true">#</a> vue+element-ui \u8868\u683C\u4E2D\u7684\u65F6\u95F4\u683C\u5F0F\u5316</h1><p>\u4E0B\u8F7Dmoment.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install moment --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728\u7EC4\u4EF6\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;el-table-column
prop=&quot;createTime&quot;
:formatter=&quot;dateFormat&quot;
label=&quot;\u521B\u5EFA\u65F6\u95F4&quot;&gt;		 
&lt;/el-table-column&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7528 &#39;:formatter&#39; \u6765\u7ED1\u5B9A \u8BBE\u7F6E\u65F6\u95F4\u683C\u5F0F\u7684\u65B9\u6CD5 dateForma</p><p>\u5728methods \u4E2D\u5B9A\u4E49 dateForma</p><p>\u5F15\u5165moment.js</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import moment from &#39;moment&#39;
methods:{
dateForma:function(row,column){
var date = row[column.property];
if(date == undefined){return &#39;&#39;};
return moment(date).format(&quot;YYYY-MM-DD HH:mm:ss&quot;)
}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,9);function t(r,l){return s}var o=n(a,[["render",t]]);export{o as default};
