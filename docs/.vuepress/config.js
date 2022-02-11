const navbar =  require("./nav");
const sidebar = require("./sidebar")

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: "Lyeshen's blog",
    description: '解决问题大多数都很容易；找到问题出在哪里却很难。',
    base:'myBlog',

    head: [
        [
            'link',
            { rel: 'icon', href: '/images/logo.png' }
        ]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        navbar ,
        sidebar
    },

    // 插件
    // 搜索
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
    ],
}
