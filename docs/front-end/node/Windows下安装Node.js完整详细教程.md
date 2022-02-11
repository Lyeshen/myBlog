---
lang: zh-CN
title: Windows下安装Node.js完整详细教程
---

# Windows下安装Node.js完整详细教程

下载地址：[Node.js](https://nodejs.org/zh-cn/download/)

![image.png](/images/node01.png)

下载完毕后双击安装包运行安装，一路默认即可

安装完毕后，安装程序会自动配置好环境变量，打开CMD（如果之前已经打开，请重新打开）

使用下面命令验证是否安装成功：
```
node -v npm -v
```
![image.png](/images/node02.png)

到此就安装成功了

## 切换下载镜像源

但是此时用npm下载时会发现网速可能特别慢，我们需要配置一下下载源为淘宝的,CMD内运行下面命令
```
npm config set registry https://registry.npm.taobao.org 
```
然后运行下面命令查看是否设置成功
```
npm config list 
```
![image.png](/images/node03.png)

## 修改全局安装模块的位置

npm 不进行配置的话，默认会将全局安装命令的模块安装在C盘，占用空间是非常大的，我们可以指定一下全局安装模块的位置

在准备存放全局模块的位置新建两个文件夹 node_global 和 node_cache，我的node安装到了E盘，为了方便以后查找，我直接放到了node安装的根目录下面

![image.png](/images/node04.png)

在CMD中执行下面命令，路径以你实际的安装位置为准
```
npm config set prefix "E:\Program Files\nodejs\node_global" npm config set cache "E:\Program Files\nodejs\node_cache"
```
配置环境变量此电脑-右击-属性-高级系统设置-环境变量下面系统变量区域，新建 NODE_PATH 变量，路径如下：E:\Program Files\nodejs\node_global\node_modules，以你实际位置为准

![image.png](/images/node05.png)

上面用户变量区域，找到Path变量，点击编辑将原来npm的变量修改为E:\Program Files\nodejs\node_global，以你实际路径为准

![image.png](/images/node06.png)

![image.png](/images/node07.png)

## 测试

可以全局安装一下webpack测试是否配置成功
```
npm install webpack -g  npm install -D webpack-cli -g 
```
安装完毕后可以运行下面命令测试是否安装成功
```
webpack -v 
```
![image.png](/images/node08.png)

也可以去刚才新建的文件夹中看一下，是否自定义的全局安装路径配置成功
