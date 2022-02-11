<template><h1 id="swiper的animation动画实现方式" tabindex="-1"><a class="header-anchor" href="#swiper的animation动画实现方式" aria-hidden="true">#</a> swiper的animation动画实现方式</h1>
<p>1.竖屏全屏轮播效果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;head>内：

&lt;link rel="stylesheet" href="css/swiper.min.css">

&lt;script src="js/jquery-1.12.3.min.js">&lt;/script>

&lt;script src="js/swiper.min.js">&lt;/script>

&lt;body>内：

&lt;div class="swiper-container">
    &lt;div class="swiper-wrapper">
      &lt;div class="swiper-slide">Slide 1&lt;/div>
      &lt;div class="swiper-slide">Slide 2&lt;/div>
      &lt;div class="swiper-slide">Slide 3&lt;/div>
   &lt;/div>
&lt;/div>

&lt;script>内：

var mySwiper = new Swiper ('.swiper-container', {
 direction: 'vertical',
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>2.横屏效果：
只更改js为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var mySwiper = new Swiper (’.swiper-container’, {
})
//这是最简单的全屏轮播。许多属性没写，想写的话可以看api官网
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>3.横竖屏交叉的全屏轮播：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;head>内的引用一致；

&lt;body>内：

 &lt;!-- Swiper -->
  &lt;div class="swiper-container swiper-container-h">
    &lt;div class="swiper-wrapper">
      &lt;div class="swiper-slide">Slide 1&lt;/div>
      &lt;div class="swiper-slide">Slide 2&lt;/div>
      &lt;div class="swiper-slide">Slide 3&lt;/div>
      &lt;div class="swiper-slide">Slide4&lt;/div>
      &lt;div class="swiper-slide">
       &lt;div class="swiper-container swiper-container-v">
        &lt;div class="swiper-wrapper">
         &lt;div class="swiper-slide">竖向内容一&lt;/div>
         &lt;div class="swiper-slide">竖向内容二&lt;/div>
         &lt;div class="swiper-slide">竖向内容三&lt;/div>
         &lt;div class="swiper-slide">竖向内容四&lt;/div>
        &lt;/div>
       &lt;/div>
      &lt;/div>
      &lt;div class="swiper-slide">Slide 6&lt;/div>
      &lt;div class="swiper-slide">Slide 7&lt;/div>
      &lt;div class="swiper-slide">Slide 8&lt;/div>
      &lt;div class="swiper-slide">Slide 9&lt;/div>
      &lt;div class="swiper-slide">Slide 10&lt;/div>
    &lt;/div>
    &lt;!-- Add Pagination -->
  &lt;!--  &lt;div class="swiper-pagination">&lt;/div>-->
  &lt;/div>

&lt;script>内：

var mySwiper = new Swiper ('.swiper-container-v', {
 direction: 'vertical',
}) 
   var Swiper = new Swiper ('.swiper-container-h', {
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>4.普通的竖屏轮播加animation动画</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;head>内：

  &lt;link rel="stylesheet" href="css/swiper.min.css">
    &lt;link rel="stylesheet" href="css/animate.min.css">
    &lt;style>
		.swiper-container {
		    width: 600px;
		    height: 300px;
		    background-color: red;
		}  
	&lt;/style>

  	&lt;script src="js/jquery-1.12.3.min.js">&lt;/script>
    &lt;script src="js/swiper.jquery.min.js">&lt;/script>
    &lt;script src="js/swiper.animate1.0.2.min.js">&lt;/script>

&lt;body>内：

	&lt;div class="swiper-container">
	    &lt;div class="swiper-wrapper">
	        &lt;div class="swiper-slide">
				&lt;p class="ani aa" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容1&lt;/p>
	        &lt;/div>
	        &lt;div class="swiper-slide">
				&lt;p class="ani bb" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="    visibility: visible;">内容2&lt;/p>
	        &lt;/div>
	        &lt;div class="swiper-slide">
				&lt;p class="ani cc" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="    visibility: visible;">内容3&lt;/p>
	        &lt;/div>
	    &lt;/div>
	&lt;/div>
&lt;!--effect:效果  duration：持续时间  delay：等待时间-->

&lt;script>内：

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>5.竖屏可以有两次不同的动画</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;head>内：

  &lt;link rel="stylesheet" href="css/swiper.min.css">
  &lt;link rel="stylesheet" href="css/animate.min.css">

  &lt;script src="js/jquery-1.12.3.min.js">&lt;/script> 
   &lt;!-- Swiper JS -->
  &lt;script src="js/swiper.min.js">&lt;/script>
  &lt;script src="js/swiper.animate1.0.2.min.js">&lt;/script>

&lt;body>内：

 &lt;div class="swiper-container">
    &lt;div class="swiper-wrapper">
      &lt;div class="swiper-slide">&lt;span class="ani" data-slide-in="at 500 from bounceInDown use swing during 500" data-slide-out="at 0 to fadeOutRight use swing during 1500 force">Slide 1&lt;/span>&lt;/div>
      &lt;div class="swiper-slide">&lt;span class="ani" data-slide-in="at 500 from bounceInDown use swing during 500" data-slide-out="at 0 to fadeOutRight use swing during 1500 force">Slide 2&lt;/span>&lt;/div>
      &lt;div class="swiper-slide">&lt;span class="ani" data-slide-in="at 500 from bounceInDown use swing during 500" data-slide-out="at 0 to fadeOutRight use swing during 1500 force">Slide 3&lt;/span>&lt;/div>
    &lt;/div>
  &lt;/div>

&lt;script>内：

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div></template>
