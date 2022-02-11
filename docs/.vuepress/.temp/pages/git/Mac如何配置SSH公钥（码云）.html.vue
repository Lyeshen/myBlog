<template><h1 id="mac如何配置ssh公钥-码云" tabindex="-1"><a class="header-anchor" href="#mac如何配置ssh公钥-码云" aria-hidden="true">#</a> Mac如何配置SSH公钥（码云）</h1>
<p>1.打开终端，进入ssh文件
cd ~/.ssh</p>
<p>2.输入命令生成 sshkey
ssh-keygen -t rsa -C &quot;xxxxx@xxx.com&quot;</p>
<p>3.查看生成的公钥
第一种方式：
cat ~/.ssh/id_rsa.pub</p>
<p>第二种方式：
open .
然后用文本编辑器打开 id_rsa.pub 文件</p>
<p>4.复制内容到码云</p>
</template>
