---
lang: zh-CN
title: for of 和 for in 的区别
---

# for of 和 for in 的区别

```javascript
let xiyou = ['唐僧','孙悟空','猪八戒']
for(let v of xiyou){
console.log(v) //输出'唐僧','孙悟空','猪八戒'
}
for(let v in xiyou){
console.log(v) //输出0,1,2
}
```

for of输出的是value，for in输出的是key
