<template><h1 id="vue-element-ui-表格中的时间格式化" tabindex="-1"><a class="header-anchor" href="#vue-element-ui-表格中的时间格式化" aria-hidden="true">#</a> vue+element-ui 表格中的时间格式化</h1>
<p>下载moment.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install moment --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在组件中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;el-table-column
prop="createTime"
:formatter="dateFormat"
label="创建时间">		 
&lt;/el-table-column>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>用 ':formatter' 来绑定 设置时间格式的方法 dateForma</p>
<p>在methods 中定义 dateForma</p>
<p>引入moment.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import moment from 'moment'
methods:{
dateForma:function(row,column){
var date = row[column.property];
if(date == undefined){return ''};
return moment(date).format("YYYY-MM-DD HH:mm:ss")
}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
