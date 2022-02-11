<template><h1 id="windows下安装node-js完整详细教程" tabindex="-1"><a class="header-anchor" href="#windows下安装node-js完整详细教程" aria-hidden="true">#</a> Windows下安装Node.js完整详细教程</h1>
<p>下载地址：<a href="https://nodejs.org/zh-cn/download/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a></p>
<p><img src="/images/node01.png" alt="image.png"></p>
<p>下载完毕后双击安装包运行安装，一路默认即可</p>
<p>安装完毕后，安装程序会自动配置好环境变量，打开CMD（如果之前已经打开，请重新打开）</p>
<p>使用下面命令验证是否安装成功：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node -v npm -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/node02.png" alt="image.png"></p>
<p>到此就安装成功了</p>
<h2 id="切换下载镜像源" tabindex="-1"><a class="header-anchor" href="#切换下载镜像源" aria-hidden="true">#</a> 切换下载镜像源</h2>
<p>但是此时用npm下载时会发现网速可能特别慢，我们需要配置一下下载源为淘宝的,CMD内运行下面命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后运行下面命令查看是否设置成功</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config list 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/node03.png" alt="image.png"></p>
<h2 id="修改全局安装模块的位置" tabindex="-1"><a class="header-anchor" href="#修改全局安装模块的位置" aria-hidden="true">#</a> 修改全局安装模块的位置</h2>
<p>npm 不进行配置的话，默认会将全局安装命令的模块安装在C盘，占用空间是非常大的，我们可以指定一下全局安装模块的位置</p>
<p>在准备存放全局模块的位置新建两个文件夹 node_global 和 node_cache，我的node安装到了E盘，为了方便以后查找，我直接放到了node安装的根目录下面</p>
<p><img src="/images/node04.png" alt="image.png"></p>
<p>在CMD中执行下面命令，路径以你实际的安装位置为准</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config set prefix "E:\Program Files\nodejs\node_global" npm config set cache "E:\Program Files\nodejs\node_cache"
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>配置环境变量此电脑-右击-属性-高级系统设置-环境变量下面系统变量区域，新建 NODE_PATH 变量，路径如下：E:\Program Files\nodejs\node_global\node_modules，以你实际位置为准</p>
<p><img src="/images/node05.png" alt="image.png"></p>
<p>上面用户变量区域，找到Path变量，点击编辑将原来npm的变量修改为E:\Program Files\nodejs\node_global，以你实际路径为准</p>
<p><img src="/images/node06.png" alt="image.png"></p>
<p><img src="/images/node07.png" alt="image.png"></p>
<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2>
<p>可以全局安装一下webpack测试是否配置成功</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install webpack -g  npm install -D webpack-cli -g 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装完毕后可以运行下面命令测试是否安装成功</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>webpack -v 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/node08.png" alt="image.png"></p>
<p>也可以去刚才新建的文件夹中看一下，是否自定义的全局安装路径配置成功</p>
</template>
