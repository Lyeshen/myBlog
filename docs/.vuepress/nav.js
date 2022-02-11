const navs =  [
    {
        text: '首页',
        link: '/'
    },
    {
        text: '前端',
        children: [
            {
                text: 'HTML',
                link: '/front-end/html/'
            },
            {
                text: 'CSS',
                link: '/front-end/css/'
            },
            {
                text: 'jQuery',
                link: '/front-end/jquery/'
            },
            {
                text: 'Vue',
                link: '/front-end/vue/'
            },
            {
                text: 'node.js',
                link: '/front-end/node/'
            },
            {
                text: 'webpack',
                link: '/front-end/webpack/'
            },
            {
                text: 'es6',
                link: '/front-end/es6/'
            },
            {
                text: 'Swiper',
                link: '/front-end/swiper/'
            },
        ],
    },
    {
        text: 'Git',
        link: '/git/'
    },
    {
        text: 'CMS',
        children: [
            {
                text: 'WordPress',
                link: '/cms/wordpress/'
            },
            {
                text: 'pbootcms',
                link: '/cms/pbootcms/'
            },
        ],
    },
    // {
    //     text: '笔记',
    //     children: [
    //
    //     ],
    // },
]

module.exports = navs;
