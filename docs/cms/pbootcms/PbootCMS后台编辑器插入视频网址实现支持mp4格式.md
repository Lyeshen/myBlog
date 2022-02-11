---
lang: zh-CN
title: PbootCMS后台编辑器插入视频网址实现支持mp4格式
---

PbootCMS后台编辑器添加内容时有时需要添加个视频链接mp4格式的，然后在插入视频后发现出来的是swf的代码，这样就导致了视频在前台无法播放。<br />这个问题首先需要了解到这是百度编辑器UEditor默认的问题，所以实现的思路只能去改ueditor相关的js控制代码来实现。

## 实现效果
1、添加swf链接就实用默认的效果，生成emeb标签
```html
<p>
    <embed type="application/x-shockwave-flash" class="edui-faked-video" src="https://www.pbhtml.com/demo/video/test.swf" width="420" height="280" wmode="transparent" play="true" loop="false" menu="false" allowfullscreen="true"/>
</p>
```
2、添加mp4格式链接生成video标签
```html
<p>
    <video class="edui-faked-video video-js" controls="" preload="auto" width="420" height="280" src="https://www.pbhtml.comhttps://pbhtml.imarc.work/static/upload/video/20200409/1586447634200979.mp4">
        <source src="https://www.pbhtml.comhttps://pbhtml.imarc.work/static/upload/video/20200409/1586447634200979.mp4" type="video/mp4"/>
    </video>
</p>
```

![图片](/images/01.gif)

## 修改步骤
1、修改video.js实现预览正确预览视频

打开\core\extend\ueditor\dialogs\video\video.js<br />找到第275行
```html
$G("preview").innerHTML = '<div class="previewMsg"><span>'+lang.urlError+'</span></div>'+
'<embed class="previewVideo" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
    ' src="' + conUrl + '"' +
    ' width="' + 420  + '"' +
    ' height="' + 280  + '"' +
    ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >' +
'</embed>';
```
修改成
```html
if(conUrl.indexOf(".swf") >= 0 ) {
    $G("preview").innerHTML = '<div class="previewMsg"><span>'+lang.urlError+'</span></div>'+
    '<embed class="previewVideo" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
        ' src="' + conUrl + '"' +
        ' width="' + 420  + '"' +
        ' height="' + 280  + '"' +
        ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >' +
    '</embed>';
} else {
    $G("preview").innerHTML = '<div class="previewMsg" style="display:none;"><span>'+lang.urlError+'</span></div>'+
    '<video controls="controls" autoplay="autoplay" '+
        ' width="' + 420  + '"' +
        ' height="' + 280  + '"' +
        ' style="max-width:100%;">' +
        ' <source src="' + conUrl + '"' + ' type="video/mp4" />' +
    '</video>';
}
```
截图：<br />
![截图](/images/01.png)
<br />2、修改ueditor.all.min.js实现当填入的是mp4链接时生成的html代码为video标签<br />打开\core\extend\ueditor\ueditor.all.min.js<br />搜索以下代码
```html
case"embed":i='<embed type="application/x-shockwave-flash" class="'+g+'" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+utils.html(a)+'" width="'+b+'" height="'+d+'"'+(f?' style="float:'+f+'"':"")+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';break;
```
然后替换成
```html
case"embed":if(a.indexOf(".swf")>=0){i='<embed type="application/x-shockwave-flash" class="'+g+'" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+utils.html(a)+'" width="'+b+'" height="'+d+'"'+(f?' style="float:'+f+'"':"")+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >'}else{var j=a.substr(a.lastIndexOf(".")+1);"ogv"==j&&(j="ogg"),i="<video"+(e?' id="'+e+'"':"")+' class="'+g+' video-js" '+(f?' style="float:'+f+'"':"")+' controls preload="auto" width="'+b+'" height="'+d+'" src="'+a+'" data-setup="{}"><source src="'+a+'" type="video/'+j+'" /></video>';};break;
```
3、上面两个步骤操作后保存，然后到后台强制刷新页面（快捷按钮ctrl+f5），然后就可以和上面gif动画一样的操作效果了。


 
