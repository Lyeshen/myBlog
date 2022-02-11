---
lang: zh-CN
title: Mac如何配置SSH公钥（码云）
---

# Mac如何配置SSH公钥（码云）

1.打开终端，进入ssh文件
cd ~/.ssh

2.输入命令生成 sshkey
ssh-keygen -t rsa -C "xxxxx@xxx.com"

3.查看生成的公钥
第一种方式：
cat ~/.ssh/id_rsa.pub

第二种方式：
open .
然后用文本编辑器打开 id_rsa.pub 文件

4.复制内容到码云
