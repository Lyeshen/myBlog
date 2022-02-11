---
lang: zh-CN
title: babel的使用
---

# babel的使用

整个配置过程包括：

1. 运行以下命令安装所需的包（package）：
```
   npm install --save-dev @babel/core @babel/cli @babel/preset-env
```
2. 在项目的根目录下创建一个命名为 babel.config.json 的配置文件（需要 v7.8.0 或更高版本），并将以下内容复制到此文件中：
```json
   {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
          "ie":'10'
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```
   上述浏览器列表仅用于示例。请根据所需要支持的浏览器进行调整。

3.运行此命令将 src 目录下的所有代码编译到 lib 目录：
```
./node_modules/.bin/babel src --out-dir lib
```
你可以利用 npm@5.2.0 所自带的 npm 包运行器将 ./node_modules/.bin/babel 命令缩短为 npx babel
