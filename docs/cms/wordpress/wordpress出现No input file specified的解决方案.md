---
lang: zh-CN
title: wordpress出现No input file specified的解决方案
---

# wordpress出现No input file specified的解决方案

今天迁移一个wordpress站点，在迁移了网站内容和数据库之后，访问网站出现No input file specified字样，服务器环境为apache，搜索相关问题后发现是.htaccess出现了问题，而wordpress的.htaccess文件会经常因为一些插件等原因更改，所以要将.htaccess配置回复，使用wordpress默认的.htaccess覆盖后网站成功运行。

.htaccess默认配置如下：

```
# BEGIN WordPress

RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]

# END WordPress
```
