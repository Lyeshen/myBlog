---
lang: zh-CN
title: 无法加载文件XXX，因为在此系统禁止运行脚本
---

# 无法加载文件XXX，因为在此系统禁止运行脚本

在用脚手架搭建vue项目时，提示：无法加载文件 C:\Users\1111111\AppData\Roaming\npm\vue.ps1,因为在此系统禁止运行脚本

这是你笔记本禁止运行脚本，解决办法

1.管理员身份打开

![image.png](/images/k1.png)

2.输入set-ExecutionPolicy RemoteSigned

![image.png](/images/k2.png)

3.选择Y 或者A ，就好了

————————————————

版权声明：本文为CSDN博主「不会么么哒」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：https://blog.csdn.net/wqnmlgbsz/article/details/100654258
