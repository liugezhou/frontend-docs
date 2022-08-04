
## 项目搭建全流程
1. mkdir web-staging-doc  
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
  - .vuepress下新建config.js,是一个vuepress网站的必备配置 
  - 关于config.js配置内容
    - base配置：$withBase使用