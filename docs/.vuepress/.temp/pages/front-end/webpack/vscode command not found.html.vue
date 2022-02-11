<template><h1 id="vscode里面出现zsh-command-not-found-webpack问题解决方法" tabindex="-1"><a class="header-anchor" href="#vscode里面出现zsh-command-not-found-webpack问题解决方法" aria-hidden="true">#</a> vscode里面出现zsh: command not found: webpack问题解决方法</h1>
<p>请在终端输入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">'export PATH="./node_modules/.bin:$PATH"'</span> <span class="token operator">>></span> ~/.zshrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>回车后再输入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>回车后就好了,再执行打包命令</p>
</template>
