---
lang: zh-CN
title: 移除WordPress页面的评论功能
---

# 移除WordPress页面的评论功能

删除主题中相关模板的

```php
<?php if (comments_open()) comments_template( '', true ); ?>
```

类似的代码即可
