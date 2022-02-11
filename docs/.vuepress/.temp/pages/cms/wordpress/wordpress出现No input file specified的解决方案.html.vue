<template><h1 id="wordpress出现no-input-file-specified的解决方案" tabindex="-1"><a class="header-anchor" href="#wordpress出现no-input-file-specified的解决方案" aria-hidden="true">#</a> wordpress出现No input file specified的解决方案</h1>
<p>今天迁移一个wordpress站点，在迁移了网站内容和数据库之后，访问网站出现No input file specified字样，服务器环境为apache，搜索相关问题后发现是.htaccess出现了问题，而wordpress的.htaccess文件会经常因为一些插件等原因更改，所以要将.htaccess配置回复，使用wordpress默认的.htaccess覆盖后网站成功运行。</p>
<p>.htaccess默认配置如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># BEGIN WordPress

RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]

# END WordPress
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
