import{d as n}from "./app.06db0539.js";import{_ as s}from "./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> swiper\u7684animation\u52A8\u753B\u5B9E\u73B0\u65B9\u5F0F</h1><p>1.\u7AD6\u5C4F\u5168\u5C4F\u8F6E\u64AD\u6548\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;\u5185\uFF1A

&lt;link rel=&quot;stylesheet&quot; href=&quot;css/swiper.min.css&quot;&gt;

&lt;script src=&quot;js/jquery-1.12.3.min.js&quot;&gt;&lt;/script&gt;

&lt;script src=&quot;js/swiper.min.js&quot;&gt;&lt;/script&gt;

&lt;body&gt;\u5185\uFF1A

&lt;div class=&quot;swiper-container&quot;&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 1&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 2&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 3&lt;/div&gt;
   &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;\u5185\uFF1A

var mySwiper = new Swiper (&#39;.swiper-container&#39;, {
 direction: &#39;vertical&#39;,
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>2.\u6A2A\u5C4F\u6548\u679C\uFF1A \u53EA\u66F4\u6539js\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var mySwiper = new Swiper (\u2019.swiper-container\u2019, {
})
//\u8FD9\u662F\u6700\u7B80\u5355\u7684\u5168\u5C4F\u8F6E\u64AD\u3002\u8BB8\u591A\u5C5E\u6027\u6CA1\u5199\uFF0C\u60F3\u5199\u7684\u8BDD\u53EF\u4EE5\u770Bapi\u5B98\u7F51
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>3.\u6A2A\u7AD6\u5C4F\u4EA4\u53C9\u7684\u5168\u5C4F\u8F6E\u64AD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;\u5185\u7684\u5F15\u7528\u4E00\u81F4\uFF1B

&lt;body&gt;\u5185\uFF1A

 &lt;!-- Swiper --&gt;
  &lt;div class=&quot;swiper-container swiper-container-h&quot;&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 1&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 2&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 3&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide4&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;
       &lt;div class=&quot;swiper-container swiper-container-v&quot;&gt;
        &lt;div class=&quot;swiper-wrapper&quot;&gt;
         &lt;div class=&quot;swiper-slide&quot;&gt;\u7AD6\u5411\u5185\u5BB9\u4E00&lt;/div&gt;
         &lt;div class=&quot;swiper-slide&quot;&gt;\u7AD6\u5411\u5185\u5BB9\u4E8C&lt;/div&gt;
         &lt;div class=&quot;swiper-slide&quot;&gt;\u7AD6\u5411\u5185\u5BB9\u4E09&lt;/div&gt;
         &lt;div class=&quot;swiper-slide&quot;&gt;\u7AD6\u5411\u5185\u5BB9\u56DB&lt;/div&gt;
        &lt;/div&gt;
       &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 6&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 7&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 8&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 9&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;Slide 10&lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- Add Pagination --&gt;
  &lt;!--  &lt;div class=&quot;swiper-pagination&quot;&gt;&lt;/div&gt;--&gt;
  &lt;/div&gt;

&lt;script&gt;\u5185\uFF1A

var mySwiper = new Swiper (&#39;.swiper-container-v&#39;, {
 direction: &#39;vertical&#39;,
}) 
   var Swiper = new Swiper (&#39;.swiper-container-h&#39;, {
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>4.\u666E\u901A\u7684\u7AD6\u5C4F\u8F6E\u64AD\u52A0animation\u52A8\u753B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;\u5185\uFF1A

  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/swiper.min.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/animate.min.css&quot;&gt;
    &lt;style&gt;
		.swiper-container {
		    width: 600px;
		    height: 300px;
		    background-color: red;
		}  
	&lt;/style&gt;

  	&lt;script src=&quot;js/jquery-1.12.3.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;js/swiper.jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;js/swiper.animate1.0.2.min.js&quot;&gt;&lt;/script&gt;

&lt;body&gt;\u5185\uFF1A

	&lt;div class=&quot;swiper-container&quot;&gt;
	    &lt;div class=&quot;swiper-wrapper&quot;&gt;
	        &lt;div class=&quot;swiper-slide&quot;&gt;
				&lt;p class=&quot;ani aa&quot; swiper-animate-effect=&quot;fadeInUp&quot; swiper-animate-duration=&quot;0.5s&quot; swiper-animate-delay=&quot;0.3s&quot;&gt;\u5185\u5BB91&lt;/p&gt;
	        &lt;/div&gt;
	        &lt;div class=&quot;swiper-slide&quot;&gt;
				&lt;p class=&quot;ani bb&quot; swiper-animate-effect=&quot;fadeInUp&quot; swiper-animate-duration=&quot;0.5s&quot; swiper-animate-delay=&quot;0.3s&quot; style=&quot;    visibility: visible;&quot;&gt;\u5185\u5BB92&lt;/p&gt;
	        &lt;/div&gt;
	        &lt;div class=&quot;swiper-slide&quot;&gt;
				&lt;p class=&quot;ani cc&quot; swiper-animate-effect=&quot;fadeInUp&quot; swiper-animate-duration=&quot;0.5s&quot; swiper-animate-delay=&quot;0.3s&quot; style=&quot;    visibility: visible;&quot;&gt;\u5185\u5BB93&lt;/p&gt;
	        &lt;/div&gt;
	    &lt;/div&gt;
	&lt;/div&gt;
&lt;!--effect:\u6548\u679C  duration\uFF1A\u6301\u7EED\u65F6\u95F4  delay\uFF1A\u7B49\u5F85\u65F6\u95F4--&gt;

&lt;script&gt;\u5185\uFF1A

 //Swiper3.x\u3001Swiper2.x
//var mySwiper = new Swiper (&#39;.swiper-container&#39;, {
//  onInit: function(swiper){ //Swiper2.x\u7684\u521D\u59CB\u5316\u662FonFirstInit
//    swiperAnimateCache(swiper); //\u9690\u85CF\u52A8\u753B\u5143\u7D20 
//    swiperAnimate(swiper); //\u521D\u59CB\u5316\u5B8C\u6210\u5F00\u59CB\u52A8\u753B
//  }, 
//  onSlideChangeEnd: function(swiper){ 
//    swiperAnimate(swiper); //\u6BCF\u4E2Aslide\u5207\u6362\u7ED3\u675F\u65F6\u4E5F\u8FD0\u884C\u5F53\u524Dslide\u52A8\u753B
//  } 
//})

//Swiper4.x
var mySwiper1 = new Swiper (&#39;.swiper-container&#39;, {
    direction: &#39;vertical&#39;,//\u7AD6\u5C4F
    on:{
      init: function(){
        swiperAnimateCache(this); //\u9690\u85CF\u52A8\u753B\u5143\u7D20 
        swiperAnimate(this); //\u521D\u59CB\u5316\u5B8C\u6210\u5F00\u59CB\u52A8\u753B
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //\u6BCF\u4E2Aslide\u5207\u6362\u7ED3\u675F\u65F6\u4E5F\u8FD0\u884C\u5F53\u524Dslide\u52A8\u753B
      } 
    }
})

//\u6A2A\u5C4F\u4E0E\u7AD6\u5C4F\u57FA\u672C\u4E00\u81F4\uFF0C\u5C31\u53BB\u6389js\u4E2D direction:&#39;vertical&#39;,\u4E00\u53E5\u5C31\u53EF\u4EE5\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>5.\u7AD6\u5C4F\u53EF\u4EE5\u6709\u4E24\u6B21\u4E0D\u540C\u7684\u52A8\u753B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;\u5185\uFF1A

  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/swiper.min.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/animate.min.css&quot;&gt;

  &lt;script src=&quot;js/jquery-1.12.3.min.js&quot;&gt;&lt;/script&gt; 
   &lt;!-- Swiper JS --&gt;
  &lt;script src=&quot;js/swiper.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;js/swiper.animate1.0.2.min.js&quot;&gt;&lt;/script&gt;

&lt;body&gt;\u5185\uFF1A

 &lt;div class=&quot;swiper-container&quot;&gt;
    &lt;div class=&quot;swiper-wrapper&quot;&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;&lt;span class=&quot;ani&quot; data-slide-in=&quot;at 500 from bounceInDown use swing during 500&quot; data-slide-out=&quot;at 0 to fadeOutRight use swing during 1500 force&quot;&gt;Slide 1&lt;/span&gt;&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;&lt;span class=&quot;ani&quot; data-slide-in=&quot;at 500 from bounceInDown use swing during 500&quot; data-slide-out=&quot;at 0 to fadeOutRight use swing during 1500 force&quot;&gt;Slide 2&lt;/span&gt;&lt;/div&gt;
      &lt;div class=&quot;swiper-slide&quot;&gt;&lt;span class=&quot;ani&quot; data-slide-in=&quot;at 500 from bounceInDown use swing during 500&quot; data-slide-out=&quot;at 0 to fadeOutRight use swing during 1500 force&quot;&gt;Slide 3&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;script&gt;\u5185\uFF1A

var mySwiper1 = new Swiper (&#39;.swiper-container&#39;, {
    direction: &#39;vertical&#39;,//\u7AD6\u5C4F
    on:{
      init: function(){
        swiperAnimateCache(this); //\u9690\u85CF\u52A8\u753B\u5143\u7D20 
        swiperAnimate(this); //\u521D\u59CB\u5316\u5B8C\u6210\u5F00\u59CB\u52A8\u753B
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //\u6BCF\u4E2Aslide\u5207\u6362\u7ED3\u675F\u65F6\u4E5F\u8FD0\u884C\u5F53\u524Dslide\u52A8\u753B
      } 
    }
})

/*
at        \u540E\u9762\u8DDF\u7684\u662F     \u52A8\u753B\u5EF6\u8FDF\u65F6\u95F4
from     \u540E\u9762\u8DDF\u7684\u662F    \u52A8\u753B\u6837\u5F0F
use       \u540E\u9762\u8DDF\u7684\u662F    \u52A8\u753B\u529B\u5EA6
during   \u540E\u9762\u8DDF\u7684\u662F    \u52A8\u753B\u6301\u7EED\u65F6\u95F4
force     \u540E\u9762\u8DDF\u7684\u662F    \u662F\u5426\u4F7F\u7528 \u53EA\u6709\u5728\u51FA\u573A\u52A8\u753B\u7684\u65F6\u5019\u4F7F\u7528\u3002\u8FDB\u573A\u52A8\u753B\u65E0\u6548\u3002\u3002
*/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,11);function t(l,i){return e}var u=s(a,[["render",t]]);export{u as default};
