---
lang: zh-CN
title: 移动端
---

# 移动端屏幕适配布局-rem

在学习完pc端的布局后，开始研究web端的布局，在pc端布局时，多考虑的是浏览器的兼容问题，而对于web端来说，由于手机种类繁多，屏幕的分辨率也各式各样，所以如何通过一个方案来适配所有移动端界面，是很重要的一点。

web的布局大致上有流式布局、限死宽度、响应式、设置viewport进行缩放、rem等方法，此处记录rem方法。

rem（font size of the root element）是指相对于根元素的字体大小的单位，是一个相对单位。与之类似的有的em（font size of the element）是相对于父元素的字体大小的单位。

例如html{font-size=100px};，那么1rem=100px；html{font-size=200px};，那么1rem=200px。rem的大小永远都是和根元素的字体大小有关的，也就是它为什么更合适web端布局的原因。我们在编写web端页面的时候，把所有的大小单位，包括height，width等等都用rem来写，然后根元素的字体大小由屏幕分辨率决定，这样就达到了一个无论分辨率变化，页面也随之而变化的效果。

至于如何获取手机的分辨率，有使用JS动态计算或者直接根据屏幕来适配的，以下就是通过屏幕来适配的方法：

```css
html {
font-size : 20px;
}
@media only screen and (min-width: 401px){
html {
font-size: 25px !important;
}
}
@media only screen and (min-width: 428px){
html {
font-size: 26.75px !important;
}
}
@media only screen and (min-width: 481px){
html {
font-size: 30px !important;
}
}
@media only screen and (min-width: 569px){
html {
font-size: 35px !important;
}
}
@media only screen and (min-width: 641px){
html {
font-size: 40px !important;
}
}
```

但是市面上的手机型号太多，针对设备进行适配的话工作量会太大，所以可以考虑通过JS动态计算，代码如下：
```javascript
(function (doc, win) {
var docEl = doc.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
var clientWidth = docEl.clientWidth;
if (!clientWidth) return;
docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
};

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```
关于这一段JS，其中最需要注意的是：
```javascript
docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
```
这一行代码便是决定你html中根元素字体大小的，clientWidth为屏幕的宽度，而750这个数值是根据设计稿的宽度决定的，如果拿到的设计稿宽度是640px，那么就用640来代替。

用100来乘上这个数值主要是为了方便计算，这样750px的屏幕，1rem=100px，其他宽度的屏幕会等比例适应。

注：在使用rem进行布局的时候像是背景、精灵图之类的，不要忘记background-size这个属性。
