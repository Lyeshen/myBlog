<template><h1 id="for-of-和-for-in-的区别" tabindex="-1"><a class="header-anchor" href="#for-of-和-for-in-的区别" aria-hidden="true">#</a> for of 和 for in 的区别</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> xiyou <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'唐僧'</span><span class="token punctuation">,</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span><span class="token string">'猪八戒'</span><span class="token punctuation">]</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> xiyou<span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token comment">//输出'唐僧','孙悟空','猪八戒'</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">in</span> xiyou<span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token comment">//输出0,1,2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>for of输出的是value，for in输出的是key</p>
</template>
