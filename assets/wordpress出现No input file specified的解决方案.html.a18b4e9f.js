import{d as e}from "./app.06db0539.js";import{_ as s}from "./plugin-vue_export-helper.21dcd24c.js";const n={},r=e(`<h1 id="wordpress\u51FA\u73B0no-input-file-specified\u7684\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#wordpress\u51FA\u73B0no-input-file-specified\u7684\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> wordpress\u51FA\u73B0No input file specified\u7684\u89E3\u51B3\u65B9\u6848</h1><p>\u4ECA\u5929\u8FC1\u79FB\u4E00\u4E2Awordpress\u7AD9\u70B9\uFF0C\u5728\u8FC1\u79FB\u4E86\u7F51\u7AD9\u5185\u5BB9\u548C\u6570\u636E\u5E93\u4E4B\u540E\uFF0C\u8BBF\u95EE\u7F51\u7AD9\u51FA\u73B0No input file specified\u5B57\u6837\uFF0C\u670D\u52A1\u5668\u73AF\u5883\u4E3Aapache\uFF0C\u641C\u7D22\u76F8\u5173\u95EE\u9898\u540E\u53D1\u73B0\u662F.htaccess\u51FA\u73B0\u4E86\u95EE\u9898\uFF0C\u800Cwordpress\u7684.htaccess\u6587\u4EF6\u4F1A\u7ECF\u5E38\u56E0\u4E3A\u4E00\u4E9B\u63D2\u4EF6\u7B49\u539F\u56E0\u66F4\u6539\uFF0C\u6240\u4EE5\u8981\u5C06.htaccess\u914D\u7F6E\u56DE\u590D\uFF0C\u4F7F\u7528wordpress\u9ED8\u8BA4\u7684.htaccess\u8986\u76D6\u540E\u7F51\u7AD9\u6210\u529F\u8FD0\u884C\u3002</p><p>.htaccess\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># BEGIN WordPress

RewriteEngine On
RewriteBase /
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]

# END WordPress
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,4);function a(p,i){return r}var d=s(n,[["render",a]]);export{d as default};
