import{d as n}from "./app.06db0539.js";import{_ as s}from "./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="babel\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#babel\u7684\u4F7F\u7528" aria-hidden="true">#</a> babel\u7684\u4F7F\u7528</h1><p>\u6574\u4E2A\u914D\u7F6E\u8FC7\u7A0B\u5305\u62EC\uFF1A</p><ol><li>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5\u6240\u9700\u7684\u5305\uFF08package\uFF09\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   npm install --save-dev @babel/core @babel/cli @babel/preset-env
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u547D\u540D\u4E3A babel.config.json \u7684\u914D\u7F6E\u6587\u4EF6\uFF08\u9700\u8981 v7.8.0 \u6216\u66F4\u9AD8\u7248\u672C\uFF09\uFF0C\u5E76\u5C06\u4EE5\u4E0B\u5185\u5BB9\u590D\u5236\u5230\u6B64\u6587\u4EF6\u4E2D\uFF1A</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>   <span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;edge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;firefox&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;67&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;safari&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11.1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;ie&quot;</span><span class="token operator">:</span>&#39;<span class="token number">10</span>&#39;
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.6.5&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4E0A\u8FF0\u6D4F\u89C8\u5668\u5217\u8868\u4EC5\u7528\u4E8E\u793A\u4F8B\u3002\u8BF7\u6839\u636E\u6240\u9700\u8981\u652F\u6301\u7684\u6D4F\u89C8\u5668\u8FDB\u884C\u8C03\u6574\u3002</p><p>3.\u8FD0\u884C\u6B64\u547D\u4EE4\u5C06 src \u76EE\u5F55\u4E0B\u7684\u6240\u6709\u4EE3\u7801\u7F16\u8BD1\u5230 lib \u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./node_modules/.bin/babel src --out-dir lib
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F60\u53EF\u4EE5\u5229\u7528 npm@5.2.0 \u6240\u81EA\u5E26\u7684 npm \u5305\u8FD0\u884C\u5668\u5C06 ./node_modules/.bin/babel \u547D\u4EE4\u7F29\u77ED\u4E3A npx babel</p>`,10);function p(t,o){return e}var c=s(a,[["render",p]]);export{c as default};
