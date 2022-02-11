---
lang: zh-CN
title: swiper的animation动画实现方式
---

# swiper的animation动画实现方式

1.竖屏全屏轮播效果：

```
<head>内：

<link rel="stylesheet" href="css/swiper.min.css">

<script src="js/jquery-1.12.3.min.js"></script>

<script src="js/swiper.min.js"></script>

<body>内：

<div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
   </div>
</div>

<script>内：

var mySwiper = new Swiper ('.swiper-container', {
 direction: 'vertical',
})
```


2.横屏效果：
只更改js为：
```
var mySwiper = new Swiper (’.swiper-container’, {
})
//这是最简单的全屏轮播。许多属性没写，想写的话可以看api官网
```

3.横竖屏交叉的全屏轮播：

```
<head>内的引用一致；

<body>内：

 <!-- Swiper -->
  <div class="swiper-container swiper-container-h">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide4</div>
      <div class="swiper-slide">
       <div class="swiper-container swiper-container-v">
        <div class="swiper-wrapper">
         <div class="swiper-slide">竖向内容一</div>
         <div class="swiper-slide">竖向内容二</div>
         <div class="swiper-slide">竖向内容三</div>
         <div class="swiper-slide">竖向内容四</div>
        </div>
       </div>
      </div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
    <!-- Add Pagination -->
  <!--  <div class="swiper-pagination"></div>-->
  </div>

<script>内：

var mySwiper = new Swiper ('.swiper-container-v', {
 direction: 'vertical',
}) 
   var Swiper = new Swiper ('.swiper-container-h', {
})
```

4.普通的竖屏轮播加animation动画

```
<head>内：

  <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <style>
		.swiper-container {
		    width: 600px;
		    height: 300px;
		    background-color: red;
		}  
	</style>

  	<script src="js/jquery-1.12.3.min.js"></script>
    <script src="js/swiper.jquery.min.js"></script>
    <script src="js/swiper.animate1.0.2.min.js"></script>

<body>内：

	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide">
				<p class="ani aa" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容1</p>
	        </div>
	        <div class="swiper-slide">
				<p class="ani bb" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="    visibility: visible;">内容2</p>
	        </div>
	        <div class="swiper-slide">
				<p class="ani cc" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="    visibility: visible;">内容3</p>
	        </div>
	    </div>
	</div>
<!--effect:效果  duration：持续时间  delay：等待时间-->

<script>内：

 //Swiper3.x、Swiper2.x
//var mySwiper = new Swiper ('.swiper-container', {
//  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
//    swiperAnimateCache(swiper); //隐藏动画元素 
//    swiperAnimate(swiper); //初始化完成开始动画
//  }, 
//  onSlideChangeEnd: function(swiper){ 
//    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
//  } 
//})

//Swiper4.x
var mySwiper1 = new Swiper ('.swiper-container', {
    direction: 'vertical',//竖屏
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
})

//横屏与竖屏基本一致，就去掉js中 direction:'vertical',一句就可以。
```

5.竖屏可以有两次不同的动画
```
<head>内：

  <link rel="stylesheet" href="css/swiper.min.css">
  <link rel="stylesheet" href="css/animate.min.css">

  <script src="js/jquery-1.12.3.min.js"></script> 
   <!-- Swiper JS -->
  <script src="js/swiper.min.js"></script>
  <script src="js/swiper.animate1.0.2.min.js"></script>

<body>内：

 <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><span class="ani" data-slide-in="at 500 from bounceInDown use swing during 500" data-slide-out="at 0 to fadeOutRight use swing during 1500 force">Slide 1</span></div>
      <div class="swiper-slide"><span class="ani" data-slide-in="at 500 from bounceInDown use swing during 500" data-slide-out="at 0 to fadeOutRight use swing during 1500 force">Slide 2</span></div>
      <div class="swiper-slide"><span class="ani" data-slide-in="at 500 from bounceInDown use swing during 500" data-slide-out="at 0 to fadeOutRight use swing during 1500 force">Slide 3</span></div>
    </div>
  </div>

<script>内：

var mySwiper1 = new Swiper ('.swiper-container', {
    direction: 'vertical',//竖屏
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
})

/*
at        后面跟的是     动画延迟时间
from     后面跟的是    动画样式
use       后面跟的是    动画力度
during   后面跟的是    动画持续时间
force     后面跟的是    是否使用 只有在出场动画的时候使用。进场动画无效。。
*/
```



