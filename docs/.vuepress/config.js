module.exports = {
  title: '前端网路笔记',
  description: '前端学习',
  base: '/frontend-docs/',
  themeConfig: {
    logo: '/time.png',
    displayAllHeaders: false,  // 左侧内容是否全部展开
    searchMaxSuggestions: 10,
    lastUpdated: '更新时间',
    sidebar: {
      '/web/':['00', '01', '02','03','04','05','06','14','15','16','17','28','29','30','31','32','33'],
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Web架构之脚手架', link: '/web/00.md' },
      {
        text: '我的博客',
        ariaLabel: 'Language Menu',
        items: [
          { text: '六个周', link: 'https://blog.liugezhou.online' },
          { text: '浏览器渲染原理', link: 'https://liugezhou.gitbook.io/liugezhou/' }
        ]
      }
    ],
    repo: 'liugezhou/frontend-docs',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '错误反馈',
    smoothScroll: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': 'docs/image',
      },
    },
  },
}
