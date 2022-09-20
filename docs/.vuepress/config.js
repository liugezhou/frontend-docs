module.exports = {
  title: '六个周',
  description: '脚手架 浏览器渲染原理 Github说明书 Webpack 前端面试',
  base: '/frontend-docs/',
  themeConfig: {
    logo: '/time.png',
    displayAllHeaders: false,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    sidebar: {
      '/web/':['before','00', '01', '02','03','04','05','06','14','15','16','17','28','29','30','31','32','33'],
      '/webpack/':['before','vim'],
      '/everyday/':['today','history']
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '今日前端', link: '/everyday/today' },
      { text: '前端脚手架', link: '/web/before' },
      { text: '前端笔记', link: '/webpack/before' },
      { text: '浏览器渲染原理', link: 'https://liugezhou.gitbook.io/liugezhou/' },
      { text: '我的博客', link: 'https://blog.liugezhou.online' },
    ],
    repo: 'liugezhou',
    repoLabel: 'Github',
    docsBranch: 'main',
    editLinks: true,
    docsDir: "/docs/",
    editLinkText: '错误反馈',
    smoothScroll: true
  }
}
