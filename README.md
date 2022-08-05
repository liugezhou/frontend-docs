## 本项目搭建全流程
1. mkdir frontend-docs
2. npm i -y
3. touch .gitignore 
4. npm i -D vuepress  
5. mkdir docs && echo '# Hello VuePress' > docs/README.md 
6. package.json修改
```
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```
7. docs下新建.vuepress文件夹: 用于存放全局的配置、组件、静态资源等。  
  - .vuepress下新建config.js,是一个vuepress网站的必备配置,配置内容包含：
    - title 网站标题
    - description 网站描述
    - base 部署相关、$withBase使用
    - nav配置 右上角导航栏 
    - sidebar配置 左侧导航栏
    - configureWebpack 别名等
    - displayAllHeaders:true  显示所有页面的标题链接
    - search: false 禁用默认的搜索框  
    - searchMaxSuggestions: 10  设置搜索显示数量
    - lastUpdated 为Github提交更新时间(默认关闭)
    - repo  仓库配置
    - smoothScroll: true 页面滚动效果

8. .md 单文档配置
- title:文章标题
- sidebarDepth:2  显示到标题的深度，默认为1=>H2
- sidebar: auto   自动生成`一个`仅仅包含了当前页面标题（headers）链接的侧边栏
- sidebar: false  禁用侧边栏
- tags: -1 -2     关键字设置以供搜索
- search:false    对该页面搜索禁用 [搜索范围为h2 h3 tags，若要全局搜索可以使用Algolia ]
- editLink: false 禁用指定页面的编辑链接
- pageClass: className  针对页面的CSS
- home:true      文档主页，提供了一些feature

Q1: 项目打包的时候报错:TypeError _normalized undefined
A: md文件中有`<router-link>`和`<router-view/>`的标签，没有用反引号括起来。