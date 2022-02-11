import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-7445767f","/cms/",{"title":"Cms"},["/cms/index.html","/cms/README.md"]],
  ["v-8c02d0de","/front-end/",{"title":"Front-end"},["/front-end/index.html","/front-end/README.md"]],
  ["v-4db4c8ca","/git/Homebrew%E5%9B%BD%E5%86%85%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%EF%BC%88%E5%9B%BD%E5%86%85%E5%9C%B0%E5%9D%80%EF%BC%89.html",{"title":"Homebrew国内如何自动安装（国内地址）"},["/git/Homebrew国内如何自动安装（国内地址）.html","/git/Homebrew%E5%9B%BD%E5%86%85%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%EF%BC%88%E5%9B%BD%E5%86%85%E5%9C%B0%E5%9D%80%EF%BC%89","/git/Homebrew国内如何自动安装（国内地址）.md","/git/Homebrew%E5%9B%BD%E5%86%85%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%EF%BC%88%E5%9B%BD%E5%86%85%E5%9C%B0%E5%9D%80%EF%BC%89.md"]],
  ["v-4ba74800","/git/Mac%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH%E5%85%AC%E9%92%A5%EF%BC%88%E7%A0%81%E4%BA%91%EF%BC%89.html",{"title":"Mac如何配置SSH公钥（码云）"},["/git/Mac如何配置SSH公钥（码云）.html","/git/Mac%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH%E5%85%AC%E9%92%A5%EF%BC%88%E7%A0%81%E4%BA%91%EF%BC%89","/git/Mac如何配置SSH公钥（码云）.md","/git/Mac%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AESSH%E5%85%AC%E9%92%A5%EF%BC%88%E7%A0%81%E4%BA%91%EF%BC%89.md"]],
  ["v-74473916","/git/",{"title":"Git"},["/git/index.html","/git/README.md"]],
  ["v-609d06f6","/cms/pbootcms/PbootCMS%E5%90%8E%E5%8F%B0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8F%92%E5%85%A5%E8%A7%86%E9%A2%91%E7%BD%91%E5%9D%80%E5%AE%9E%E7%8E%B0%E6%94%AF%E6%8C%81mp4%E6%A0%BC%E5%BC%8F.html",{"title":"PbootCMS后台编辑器插入视频网址实现支持mp4格式"},["/cms/pbootcms/PbootCMS后台编辑器插入视频网址实现支持mp4格式.html","/cms/pbootcms/PbootCMS%E5%90%8E%E5%8F%B0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8F%92%E5%85%A5%E8%A7%86%E9%A2%91%E7%BD%91%E5%9D%80%E5%AE%9E%E7%8E%B0%E6%94%AF%E6%8C%81mp4%E6%A0%BC%E5%BC%8F","/cms/pbootcms/PbootCMS后台编辑器插入视频网址实现支持mp4格式.md","/cms/pbootcms/PbootCMS%E5%90%8E%E5%8F%B0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8F%92%E5%85%A5%E8%A7%86%E9%A2%91%E7%BD%91%E5%9D%80%E5%AE%9E%E7%8E%B0%E6%94%AF%E6%8C%81mp4%E6%A0%BC%E5%BC%8F.md"]],
  ["v-2c3dda6e","/cms/pbootcms/",{"title":"PbootCMS"},["/cms/pbootcms/index.html","/cms/pbootcms/README.md"]],
  ["v-73785f95","/cms/wordpress/",{"title":"WordPress"},["/cms/wordpress/index.html","/cms/wordpress/README.md"]],
  ["v-65cad7be","/cms/wordpress/wordpress%E5%87%BA%E7%8E%B0No%20input%20file%20specified%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",{"title":"wordpress出现No input file specified的解决方案"},["/cms/wordpress/wordpress出现No input file specified的解决方案.html","/cms/wordpress/wordpress%E5%87%BA%E7%8E%B0No%20input%20file%20specified%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88","/cms/wordpress/wordpress出现No input file specified的解决方案.md","/cms/wordpress/wordpress%E5%87%BA%E7%8E%B0No%20input%20file%20specified%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.md"]],
  ["v-d14937e8","/cms/wordpress/wordpress%E9%80%9A%E8%BF%87%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9B%B4%E6%8D%A2%E5%9F%9F%E5%90%8D.html",{"title":"wordpress通过数据库更换域名"},["/cms/wordpress/wordpress通过数据库更换域名.html","/cms/wordpress/wordpress%E9%80%9A%E8%BF%87%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9B%B4%E6%8D%A2%E5%9F%9F%E5%90%8D","/cms/wordpress/wordpress通过数据库更换域名.md","/cms/wordpress/wordpress%E9%80%9A%E8%BF%87%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9B%B4%E6%8D%A2%E5%9F%9F%E5%90%8D.md"]],
  ["v-66a577e0","/cms/wordpress/%E7%A7%BB%E9%99%A4WordPress%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.html",{"title":"移除WordPress页面的评论功能"},["/cms/wordpress/移除WordPress页面的评论功能.html","/cms/wordpress/%E7%A7%BB%E9%99%A4WordPress%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD","/cms/wordpress/移除WordPress页面的评论功能.md","/cms/wordpress/%E7%A7%BB%E9%99%A4WordPress%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.md"]],
  ["v-33e79a11","/cms/wordpress/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E4%B8%8B%E5%AF%B9wordpress%E8%BF%9B%E8%A1%8C%E5%8A%A0%E9%80%9F.html",{"title":"虚拟主机下对wordpress进行加速"},["/cms/wordpress/虚拟主机下对wordpress进行加速.html","/cms/wordpress/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E4%B8%8B%E5%AF%B9wordpress%E8%BF%9B%E8%A1%8C%E5%8A%A0%E9%80%9F","/cms/wordpress/虚拟主机下对wordpress进行加速.md","/cms/wordpress/%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA%E4%B8%8B%E5%AF%B9wordpress%E8%BF%9B%E8%A1%8C%E5%8A%A0%E9%80%9F.md"]],
  ["v-39f5b4c6","/front-end/css/",{"title":"CSS"},["/front-end/css/index.html","/front-end/css/README.md"]],
  ["v-2ebea979","/front-end/css/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E5%B8%83%E5%B1%80-rem.html",{"title":"移动端"},["/front-end/css/移动端屏幕适配布局-rem.html","/front-end/css/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E5%B8%83%E5%B1%80-rem","/front-end/css/移动端屏幕适配布局-rem.md","/front-end/css/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B1%8F%E5%B9%95%E9%80%82%E9%85%8D%E5%B8%83%E5%B1%80-rem.md"]],
  ["v-158ed2c3","/front-end/es6/babel%E7%9A%84%E4%BD%BF%E7%94%A8.html",{"title":"babel的使用"},["/front-end/es6/babel的使用.html","/front-end/es6/babel%E7%9A%84%E4%BD%BF%E7%94%A8","/front-end/es6/babel的使用.md","/front-end/es6/babel%E7%9A%84%E4%BD%BF%E7%94%A8.md"]],
  ["v-a9ee2fe2","/front-end/es6/for%20of%20%E5%92%8C%20for%20in%20%E7%9A%84%E5%8C%BA%E5%88%AB.html",{"title":"for of 和 for in 的区别"},["/front-end/es6/for of 和 for in 的区别.html","/front-end/es6/for%20of%20%E5%92%8C%20for%20in%20%E7%9A%84%E5%8C%BA%E5%88%AB","/front-end/es6/for of 和 for in 的区别.md","/front-end/es6/for%20of%20%E5%92%8C%20for%20in%20%E7%9A%84%E5%8C%BA%E5%88%AB.md"]],
  ["v-39f3f210","/front-end/es6/",{"title":"ES6"},["/front-end/es6/index.html","/front-end/es6/README.md"]],
  ["v-9b959746","/front-end/html/65279%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E7%A9%BA%E7%99%BD%E4%B8%80%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.html",{"title":"&#65279导致页面空白一行解决方法"},["/front-end/html/65279导致页面空白一行解决方法.html","/front-end/html/65279%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E7%A9%BA%E7%99%BD%E4%B8%80%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95","/front-end/html/65279导致页面空白一行解决方法.md","/front-end/html/65279%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E7%A9%BA%E7%99%BD%E4%B8%80%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95.md"]],
  ["v-7de668f3","/front-end/html/",{"title":"HTML"},["/front-end/html/index.html","/front-end/html/README.md"]],
  ["v-5b54bfc6","/front-end/html/%E4%BD%BF%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E6%98%BE%E7%A4%BA%E5%B9%B6%E4%BF%AE%E6%94%B9video%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F.html",{"title":"使用开发者工具显示并修改video默认样式"},["/front-end/html/使用开发者工具显示并修改video默认样式.html","/front-end/html/%E4%BD%BF%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E6%98%BE%E7%A4%BA%E5%B9%B6%E4%BF%AE%E6%94%B9video%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F","/front-end/html/使用开发者工具显示并修改video默认样式.md","/front-end/html/%E4%BD%BF%E7%94%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E6%98%BE%E7%A4%BA%E5%B9%B6%E4%BF%AE%E6%94%B9video%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F.md"]],
  ["v-c5075ec4","/front-end/jquery/jq%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E6%9F%90%E4%B8%AA%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1.html",{"title":"jq实现滚动到某个节点执行一次"},["/front-end/jquery/jq实现滚动到某个节点执行一次.html","/front-end/jquery/jq%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E6%9F%90%E4%B8%AA%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1","/front-end/jquery/jq实现滚动到某个节点执行一次.md","/front-end/jquery/jq%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E6%9F%90%E4%B8%AA%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1.md"]],
  ["v-030c7ca0","/front-end/jquery/",{"title":"jQuery"},["/front-end/jquery/index.html","/front-end/jquery/README.md"]],
  ["v-7e388d7c","/front-end/node/",{"title":"NodeJs"},["/front-end/node/index.html","/front-end/node/README.md"]],
  ["v-417626c9","/front-end/node/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Node.js%E5%AE%8C%E6%95%B4%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B.html",{"title":"Windows下安装Node.js完整详细教程"},["/front-end/node/Windows下安装Node.js完整详细教程.html","/front-end/node/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Node.js%E5%AE%8C%E6%95%B4%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B","/front-end/node/Windows下安装Node.js完整详细教程.md","/front-end/node/Windows%E4%B8%8B%E5%AE%89%E8%A3%85Node.js%E5%AE%8C%E6%95%B4%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B.md"]],
  ["v-2e854bf4","/front-end/swiper/",{"title":"Swiper"},["/front-end/swiper/index.html","/front-end/swiper/README.md"]],
  ["v-143f10bc","/front-end/swiper/swiper%E7%9A%84animation%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F.html",{"title":"swiper的animation动画实现方式"},["/front-end/swiper/swiper的animation动画实现方式.html","/front-end/swiper/swiper%E7%9A%84animation%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F","/front-end/swiper/swiper的animation动画实现方式.md","/front-end/swiper/swiper%E7%9A%84animation%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F.md"]],
  ["v-0a4e80f3","/front-end/webpack/",{"title":"webpack"},["/front-end/webpack/index.html","/front-end/webpack/README.md"]],
  ["v-439c79a5","/front-end/webpack/vscode%20command%20not%20found.html",{"title":"vscode里面出现zsh command not found webpack问题解决方法"},["/front-end/webpack/vscode command not found.html","/front-end/webpack/vscode%20command%20not%20found","/front-end/webpack/vscode command not found.md","/front-end/webpack/vscode%20command%20not%20found.md"]],
  ["v-17579900","/front-end/webpack/webpack.config.js%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE.html",{"title":"webpack.config.js基本配置"},["/front-end/webpack/webpack.config.js基本配置.html","/front-end/webpack/webpack.config.js%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE","/front-end/webpack/webpack.config.js基本配置.md","/front-end/webpack/webpack.config.js%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE.md"]],
  ["v-4b80cdad","/front-end/vue/nuxt.js%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95.html",{"title":"nuxt.js学习记录"},["/front-end/vue/nuxt.js学习记录.html","/front-end/vue/nuxt.js%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95","/front-end/vue/nuxt.js学习记录.md","/front-end/vue/nuxt.js%E5%AD%A6%E4%B9%A0%E8%AE%B0%E5%BD%95.md"]],
  ["v-39e4630c","/front-end/vue/",{"title":"Vue"},["/front-end/vue/index.html","/front-end/vue/README.md"]],
  ["v-aef0a982","/front-end/vue/vue+element-ui%20%E8%A1%A8%E6%A0%BC%E4%B8%AD%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96.html",{"title":"vue+element-ui 表格中的时间格式化"},["/front-end/vue/vue+element-ui 表格中的时间格式化.html","/front-end/vue/vue+element-ui%20%E8%A1%A8%E6%A0%BC%E4%B8%AD%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96","/front-end/vue/vue+element-ui 表格中的时间格式化.md","/front-end/vue/vue+element-ui%20%E8%A1%A8%E6%A0%BC%E4%B8%AD%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96.md"]],
  ["v-ba37bd5c","/front-end/vue/%E4%BF%AE%E6%94%B9npm%E4%B8%BA%E6%B7%98%E5%AE%9D%E9%95%9C%E5%83%8F.html",{"title":"修改npm为淘宝镜像"},["/front-end/vue/修改npm为淘宝镜像.html","/front-end/vue/%E4%BF%AE%E6%94%B9npm%E4%B8%BA%E6%B7%98%E5%AE%9D%E9%95%9C%E5%83%8F","/front-end/vue/修改npm为淘宝镜像.md","/front-end/vue/%E4%BF%AE%E6%94%B9npm%E4%B8%BA%E6%B7%98%E5%AE%9D%E9%95%9C%E5%83%8F.md"]],
  ["v-085a2bfe","/front-end/vue/%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6XXX%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%AD%A4%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.html",{"title":"无法加载文件XXX，因为在此系统禁止运行脚本"},["/front-end/vue/无法加载文件XXX，因为在此系统禁止运行脚本.html","/front-end/vue/%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6XXX%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%AD%A4%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC","/front-end/vue/无法加载文件XXX，因为在此系统禁止运行脚本.md","/front-end/vue/%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E6%96%87%E4%BB%B6XXX%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%9C%A8%E6%AD%A4%E7%B3%BB%E7%BB%9F%E7%A6%81%E6%AD%A2%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
