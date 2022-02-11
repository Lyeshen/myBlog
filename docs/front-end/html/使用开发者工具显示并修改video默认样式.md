---
lang: zh-CN
title: 使用开发者工具显示并修改video默认样式
---

# 使用开发者工具显示并修改video默认样式

一般情况下使用审查工具查看video元素时候是看不到较为细致的元素的，例如进度条的样式，时我们可以使用谷歌浏览器，选择开发者工具 -> setting -> Preferences -> Elements -> 勾选 “Show user agent shadow DOM”，之后就能看到video的各项内部元素了，此时可以使用css进行修改。

需要注意的是，大部分情况下对于video控件的修改，最好是自己实现一套controls。
