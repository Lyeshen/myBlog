<template><h1 id="babel的使用" tabindex="-1"><a class="header-anchor" href="#babel的使用" aria-hidden="true">#</a> babel的使用</h1>
<p>整个配置过程包括：</p>
<ol>
<li>运行以下命令安装所需的包（package）：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   npm install --save-dev @babel/core @babel/cli @babel/preset-env
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在项目的根目录下创建一个命名为 babel.config.json 的配置文件（需要 v7.8.0 或更高版本），并将以下内容复制到此文件中：</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>   <span class="token punctuation">{</span>
  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"targets"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"edge"</span><span class="token operator">:</span> <span class="token string">"17"</span><span class="token punctuation">,</span>
          <span class="token property">"firefox"</span><span class="token operator">:</span> <span class="token string">"60"</span><span class="token punctuation">,</span>
          <span class="token property">"chrome"</span><span class="token operator">:</span> <span class="token string">"67"</span><span class="token punctuation">,</span>
          <span class="token property">"safari"</span><span class="token operator">:</span> <span class="token string">"11.1"</span><span class="token punctuation">,</span>
          <span class="token property">"ie"</span><span class="token operator">:</span>'<span class="token number">10</span>'
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"usage"</span><span class="token punctuation">,</span>
        <span class="token property">"corejs"</span><span class="token operator">:</span> <span class="token string">"3.6.5"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>上述浏览器列表仅用于示例。请根据所需要支持的浏览器进行调整。</p>
<p>3.运行此命令将 src 目录下的所有代码编译到 lib 目录：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./node_modules/.bin/babel src --out-dir lib
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你可以利用 npm@5.2.0 所自带的 npm 包运行器将 ./node_modules/.bin/babel 命令缩短为 npx babel</p>
</template>
