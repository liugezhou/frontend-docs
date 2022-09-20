module.exports = {
  title: '每日前端',
  description: '脚手架 浏览器渲染原理 Github说明书 Webpack 前端面试',
  base: '/frontend-docs/',
  head: [
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?67c6532f7fb6859ef32c9cddf2b83c37";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      </script>
      `,
    ],
  ],
  themeConfig: {
    logo: '/time.png',
    displayAllHeaders: false,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    sidebar: {
      '/web/': [
        'before',
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '14',
        '15',
        '16',
        '17',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
      ],
      '/webpack/': ['before', 'vim'],
      '/everyday/': ['today', 'history'],
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '今日前端', link: '/everyday/today' },
      { text: '前端脚手架', link: '/web/before' },
      { text: '前端笔记', link: '/webpack/before' },
      {
        text: '浏览器渲染原理',
        link: 'https://blog.liugezhou.online/categories/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/',
      },
      { text: '他的博客', link: 'https://blog.liugezhou.online' },
    ],
    repo: 'liugezhou/frontend-docs',
    repoLabel: 'Github',
    docsBranch: 'main',
    editLinks: true,
    docsDir: '/docs/',
    editLinkText: '错误反馈',
    smoothScroll: true,
  },
}
