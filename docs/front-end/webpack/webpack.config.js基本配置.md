---
lang: zh-CN
title: webpack.config.js基本配置
---

# webpack.config.js基本配置

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 访问内置的插件
const path = require('path');  //当前项目的根目录

module.exports = {
  mode: 'development',  //模式，production
  entry: './foo.js',  //入口文件
  output: {  //出口文件
    path: path.resolve(__dirname, 'dist'),  //路径
    filename: 'foo.bundle.js',  //文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,  //使用哪些文件
        use: [						//使用哪些loder进行处理
        	'style-loder',
          'css-loder'
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
```
