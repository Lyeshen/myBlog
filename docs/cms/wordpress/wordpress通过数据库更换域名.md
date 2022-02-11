---
lang: zh-CN
title: wordpress通过数据库更换域名
---

# wordpress通过数据库更换域名

```
UPDATE wp_options SET option_value = replace( option_value, 'http://www.old.com', 'http://www.new.com' ) WHERE option_name = 'home' OR option_name = 'siteurl';

UPDATE wp_posts SET post_content = replace( post_content, 'http://www.old.com', 'http://www.new.com' ) ;

UPDATE wp_posts SET guid = replace( guid, 'http://www.old.com', 'http://www.new.com' ) ;
```

old代表旧域名，new代表新域名。
