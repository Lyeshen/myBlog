---
lang: zh-CN
title: vue+element-ui 表格中的时间格式化
---

# vue+element-ui 表格中的时间格式化

下载moment.js
```
npm install moment --save
```

在组件中
```
<el-table-column
prop="createTime"
:formatter="dateFormat"
label="创建时间">		 
</el-table-column>
```

用 ':formatter' 来绑定 设置时间格式的方法 dateForma

在methods 中定义 dateForma

引入moment.js
```
import moment from 'moment'
methods:{
dateForma:function(row,column){
var date = row[column.property];
if(date == undefined){return ''};
return moment(date).format("YYYY-MM-DD HH:mm:ss")
}
}
```
