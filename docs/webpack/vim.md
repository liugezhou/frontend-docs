---
title: vim
description: vim
---

学会一个软技能，总结一篇文章就够了。  
剩下要做的就是不停的练习，不停的尝试，本文是在学习[这个仓库](https://github.com/wsdjeg/Learn-Vim_zh_cn)之后的极简总结中。 
主要是作为使用一个备忘录。   

长期更新。。。
![vim](https://cdn.staticaly.com/gh/liugezhou/image@master/blog/blog-vim.webp)

<!--more-->
### 一、Vim基础介绍

1. `vim`           看到一个介绍页面
2. `i`              进入编辑模式
3. `:`              光标将移动到屏幕底部，在这里您可以输入命令
4. `Esc`            切回普通模式  
5. `:quit`          退出编辑模式,简写为:q     
6. `:write `        保存模式，简写为:w    
7. `:w file.md`      如果是新建的一个没有名字的文件，可以以fileName为名字保存文件  
9. `:wq`            保存退出  
10. `:q!`           不保存修改而强制退出。  
11. `:h`            在冒号模式下，输入 :h quit 然后按Tab键就会自动打出命令。  
12. `:vim f1 f2`    通过vim命令在不同的buffers中打开多个文件  
13. `vim --version`  '+'表示支持的特性，'-'表示不支持的特性  
14. `vim +%s hello/liugezhou/g file `  这条命令的意思是 打开file文件将文档中所有的hello改为liugezhou  
15. `vim -o2`       水平打开n个窗口
16. `vim -O2`       垂直打开n个窗口 
17. `Ctrl + z(:stop :suspend)`      使用vim打开的文件进行挂起 输入fg恢复。  

### 二、Buffers、Windows、Tabs  

 创建一个.vimrc,添加配置`set hidden`（切换buffer且当前buffer没有保存，不会进行提示）

 #### 2.1 buffers
1. vim file1.js file2.js,实际创建了两个buffers，执行完该命令后展示的是file1.js的buffers 
   运行:buffers命令可以查看所有的buffers,或者使用 `:ls` OR `:files`命令查看。   
2. 切换到下一个buffer `:bnext` 、`:buffer fileName`、`buffer n  
3. 切换到下一个buffer的快捷键:`Ctrl + I`,切换到原来buffer的快捷键:`Ctrl + O`  
4. 一旦buffer创建成功，即进入了buffers列表，这个时候想在buffers列表中删除某一个buffer，直接`:bdelete n`即可 
5. 退出vim
  - 关闭所有buffer `:qall`  
  - 关闭所有buffer但是不保存 `qall!`  
  - 关闭所有buferr且保存 `wqall`

#### 2.2 Windows
1. vim file1.txt打开file1文件，有一个buffer，有一个窗口 
   此时在vim中使用`:split file2.txt` 会看到此刻有两个窗口，两个buffer，file2.txt的窗口在上  
   如果想垂直打开file2窗口  `:vsplit file2.txt`
   如果想垂直打开一个新命名文件的窗口  :`vsplit filename`
2. 如果要在窗口直接导航  
    `Ctrl+ W  H` 左移窗口
    `Ctrl+ W  L` 右移窗口
    `Ctrl+ W  J` 下移窗口
    `Ctrl+ W  K` 上移窗口
3. 继续输入 `:split file3.txt`,此时有三个窗口、三个buffer   
4. 如果想在显示file2.txt的窗口中显示file3.txt，只需要在当前buffer为2下输入`:buffer file3.txt`即可 
5. 要关闭当前窗口  `Ctrl+W C` 
6. 普通模式下关于窗口的命令： 
  `Ctrl + W V` 打开一个垂直分割的窗口
  `Ctrl + W S` 打开一个水平分割的窗口
  `Ctrl + W C` 关闭当前所在窗口 
  `Ctrl + W O` 除了当前窗口，关闭其它所有窗口
  
#### 2.3 Tabs 
1. vim tabs.md  这个时候打开一个新tab，使用命令 `:tabnew readme.md` 
2. 切换下一个tab，使用命令 `:tabnext` 
3. 关闭当前tab，使用命令`:tabclose` 
4. 切换上一个tab，使用命令`:tabprevious`
5. 切换至最后一个tab，使用命令`:tablast`  
6. 切换至第一个tab，使用命令`:tabfirst` 
7. 如果想让vim启动时就包含多个tabs，可以使用命令 `vim -p file1.txt file2.txt`

### 三、打开和搜索文件
#### 3.1 打开和编辑文件
- 要在vim中打开一个文件，直接使用命令 `:edit newFile` 
- edit接收通配符*，比如使用 `:edit *.md`然后按tab键，就会依次显示md文件，还可以是`*/*.js`这种格式 
- `:edit 路径URL`也可以直接打开一个文件

#### 3.2 使用find命令搜索文件
- 比如：我试了一下`:find readme.md`就直接跳转到那个文件了，但是这里只是找之前buffers中存在的
- 通过 find的命令会直接跳转到找到的那个文件，且在当前窗口打开

#### 3.3 find和Path的区别
- `:find`命令根据path选项配置的路径去找文件  
- `:edit`命令则不会。
在我们开始牛逼的使用`find`命令前，我们需要对`path`到底是什么进行一个学习

- `:set path?`这个命令，可以让我们看一下我们的path是什么，在当前这个文件(使用vim写)，输入此命令，显示内容为：`path=.,/usr/include,,`  

#### 3.4 使用grep命令在文件中搜索

**内置grep**
- grep是指在文件内容进行内容的查找,  `:vim /pattern/ file` pattern为正则表达式  
- 搜索出来后默认显示出第一条匹配内容  
- 查看所有搜索内容:`:copen` 
- 关闭窗口:`:cclose`  
- 跳到下一个列表: `cnext` 
- 跳到上一个列表： `cprevious`

**外置grep**
- 在命令行终端搜索  
- grep -R "搜索的内容"  fileUrl

**用Netrw浏览文件**
- Netrw是vim内置的文件浏览器、查看项目的目录结构时很有用。  
- 要运行Netrw，需要在`.vimrc`中配置  
```
set nocp
filetype plugin on
``` 
- 这个时候 vim直接给一个地址就可以了  
- 要从内部运行Netrw，则需要给`:edit`一个目录地址  

### 四、Vim语法 
#### 4.1 vim语言的语法规则  动词 + 名词  
名词是位置
- h  左  
- l  右 
- j  下 
- k  上  
- $  当前行的末尾 
- w  下一个单词的开头 
- }  跳转到下一个段落 

动词是动作
- y  复制   
- p  粘贴到光标后
- P  粘贴到光标前
- d  删除一行 
- c  删除一行 与d不同的是--将删除的文本保存在寄存器中，进入插入模式

#### 4.2 结合
- y$:复制当前位置到行尾的所有内容 
- dw:删除当前位置到下一个单词开头的内容 
- c}:修改当前位置到段落结尾的内容。

#### 4.3 更多名词
- 如何更快的把括号中内容删除：`I want say (hello vim1)`?  
- 文本对象：小括号中、中括号、大括号、引号    
- 文本对象可以被操作符operations使用，两类文本对象分别为：`i + object`  `a + object`  
- `di(` 删除`()`内的内容  
- 删除整个被`{}`包裹的内容：`di{` 
- 删除`hello`这个单词：在`h`这个字母上，使用命令：`diw` 

```
<div>
  <h1>Header1</h1>
  <p>Paragraph1</p>
  <p>Paragraph2</p>
</div>
```
1. 若此时光标在Header1上  
2. 删除Header1这个单词：`dit` 
3. 删除`<h1>Header1</h1>`:`dat` 

#### 4.4 常用到的文本对象
- w: 一个单词   
- p: 一个段落   
- s: 一个句子   
- (or):指的是`()` 
- {or}:指的是`{}` 
- `<`or`>`:指的是一对`<>` 
- t: XML标签   

#### 4.5 针对性复习
- w or W: 跳转到下一个单词  
- $: 跳转到本行的行尾 
- {: 跳转到打开文件光标所在位置的段落最开始 
- }: 跳转到打开文件光标所在位置的段落最末尾 
- G: 跳转到打开文件最后一行的开始位置
- nG: 跳转到第n行

- d: 删除操作符 
- y: 复制操作符 
- c: 删除插入操作符
- p: 粘贴到光标后操作符 
- gU: 小写变大写操作符  

#### 4.6 vim中搜索
- normal模式(即Esc模式) 
- 直接输入`/`或者`?`，然后输入要搜索的字符进行搜索 
- 注意区别是:   
  - `/`是从光标处向下查找，这个时候输入`n` 是继续查找下一个，输入`N`是查找上一个    
  - `?`是从光标处向上查找,这个时候输入`n`是继续向上查找，输入`N`是向下开始查找

tips:item2的光标样式设置为@ Profiles -> Colors -> Cursor colors -> Cursor进行设置 
然后在vim搜索中还是不明显，这个时候将Profiles -> Colors -> Cursor colors ->Cursor guide勾选上就好很多了。 

### 五、在文件中移动

#### 5.1 字符导航
- `hjkl`: 字符导航 
- `n + hjkl`: 向左下上右移动n个行或者字符 
- `0` 跳转到本行开始  `$`跳转到本行结尾   
- `^` 跳转到本行第一个非空字符 `g_`跳转到本行最后一个非空字符串(这么看的话，`$`的使用貌似没有`g_`效率高)  
- `n|`跳转到本行第n列 
- `fs`: focusOn string 在本行内光标之后开始搜索，光标停留在字符`s`上 
- `Fs`: focusOn string 在本行内光标之前开始搜索，光标停留在字符`s`上 
- `ts` : focusOn string 在本行内光标之后开始搜索，光标停留在字符`s`之前 
- `Ts` : focusOn string 在本行内光标之前开始搜索，光标停留在字符`s`之前   
  - `;`: 为继续在本行向下搜索下一个 
  - `,`: 为继续在本行向上搜索上一个

#### 5.2 句子和段落导航 
- 句子定义是以`.?!`跟着一个换行符或者空格，tab结尾的。  
- `(`跳到前一个句子 
- `)`跳到下一个句子 

- 段落：可以从一个空行之后开始，也可以从段落选项中`字符对`所指定的段落宏的每个集合开始。  
- `{`跳到上一个段落
- `}`跳到下一个段落

#### 5.3 行号导航 
- `nG`:跳转到第n行  
- `gg`:跳转到第一行 
- `G`:跳转到最后一行  
- `n%`:跳转到文件的百分比 
- `ctrl + g`:可以看到总行数以及当前所在行数   

#### 5.4 窗格导航 
- `H`:Head 跳转到屏幕的顶部  
- `M`:Middle 跳转到屏幕的中部 
- `L`:Line   跳转到屏幕的底部 
- `nH`:跳转到距离顶部n行的位置  
- `nL`:跳转到距离底部n行的位置  

#### 5.5 屏幕滚动
- `ctrl + e`:向下滚动一行-> e,中文一，就是向下一行  
- `ctrl + d`:向下滚动半屏-> divorce 离婚分开，那么就是一人一半，而且是向后看
- `ctrl + f`:向下滚动一屏-> full screen
- `ctrl + y`:向上滚动一行-> yu,骑驴的时候让驴听一下，回大喊一声yu，也就是退一步	
- `ctrl + u`:向上滚动半屏->	u(呦)，让驴退一步，直接给退了半屏。   
- `ctrl + b`:向上滚动一屏-> before screen

#### 5.6 当前行位置指定
- `zt`:将当前行指定到窗格的顶部 
- `zz`:将当前行指定到窗格的中间 
- `zb`:将当前行指定搭配窗格的底部 

#### 5.7 位置标记(了解即可)
- `ma`:标记当前位置 
- ``a`:回到标记的位置(行与列)  
- `'a`:回到标记的行

#### 5.8 跳转
- `'a`:跳转到标记的行
- ``a`:跳转到标记的行和列 
- `nG`:跳转到第n行
- `/`:向后搜索跳转  
- `?`:向前搜索跳转  
- `n` 重复上一次搜索，相同方向
- `N` 重复上一次搜索，相反方向
- `%` 查找匹配
- `(` 跳转上一个句子
- `)` 跳转下一个句子
- `{` 跳转上一个段落
- `}` 跳转下一个段落
- `L` 跳转到当前屏幕的最后一行
- `M` 跳转到当前屏幕的中间
- `H` 跳转到当前屏幕的第一行
- `[[` 跳转到上一个小节
- `]]` 跳转到下一个小节