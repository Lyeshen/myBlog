---
lang: zh-CN
title: jq实现滚动到某个节点执行一次
---

# jq实现滚动到某个节点执行一次

```javascript
$(window).bind('scroll',function(){
if ($(window).scrollTop()+$(window).height() > $('.sec_4').offset().top) {
$('.timer').each(count);
function count(options) {
var $this = $(this);
options = $.extend({}, options || {}, $this.data('countToOptions') || {});
$this.countTo(options);
}
$(".math").removeClass("timer");
$(window).unbind('scroll');
}
});
```

bind：绑定函数

unbind：取消绑定函数

$(window).scrollTop()：窗口距离文档顶部距离

$(window).height()：浏览器当前可视窗口高度

$('.sec_4').offset().top：节点距离文档顶部距离
