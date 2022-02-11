<template><h1 id="wordpress通过数据库更换域名" tabindex="-1"><a class="header-anchor" href="#wordpress通过数据库更换域名" aria-hidden="true">#</a> wordpress通过数据库更换域名</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>UPDATE wp_options SET option_value = replace( option_value, 'http://www.old.com', 'http://www.new.com' ) WHERE option_name = 'home' OR option_name = 'siteurl';

UPDATE wp_posts SET post_content = replace( post_content, 'http://www.old.com', 'http://www.new.com' ) ;

UPDATE wp_posts SET guid = replace( guid, 'http://www.old.com', 'http://www.new.com' ) ;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>old代表旧域名，new代表新域名。</p>
</template>
