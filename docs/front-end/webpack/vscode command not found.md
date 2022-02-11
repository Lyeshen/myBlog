---
lang: zh-CN
title: vscode里面出现zsh command not found webpack问题解决方法
---

# vscode里面出现zsh: command not found: webpack问题解决方法

请在终端输入
```shell
echo 'export PATH="./node_modules/.bin:$PATH"' >> ~/.zshrc
```
回车后再输入
```shell
source ~/.zshrc
```
回车后就好了,再执行打包命令
