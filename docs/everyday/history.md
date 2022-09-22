---
title: 2022-09
---
<div align="right" style="color:#512DA8">day3</div> 

> 无所畏惧（fearless）不是没有恐惧；而是你依然心怀恐惧，但无论如何都决定要跳进去。

<details>
<summary><b>2022-09-21</b></summary>

<p style="color:blue">1.在地址栏里输入一个 URL,到这个页面呈现出来，中间会发生什么？</p>
<details>
<summary><b>参考答案</b></summary>
<p>

参考答案[见这里](https://blog.liugezhou.online/A1%E9%98%B6%E6%AE%B5%E4%B8%80%EF%BC%9A%E5%AE%8F%E8%A7%82%E8%A7%86%E8%A7%92%E4%B8%8B%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8/#03%EF%BD%9CHTTP%E8%AF%B7%E6%B1%82%E6%B5%81%E7%A8%8B%EF%BC%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E7%AB%99%E7%82%B9%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%89%93%E5%BC%80%E9%80%9F%E5%BA%A6%E4%BC%9A%E5%BE%88%E5%BF%AB)
</p>
</details>

<p style="color:blue">2. HTML5 和 CSS3 用的多吗？你了解它们的新属性吗？有在项目中用过吗？	</p>
<details>
<summary><b>参考答案</b></summary>
<p>

**HTML5**
- 8 个语义元素： header section footer aside nav main article figure(经测试，只要figure有样式，其它语义标签只是display:block)
- 内容元素： 
    - mark 高亮 { background-color:mark;color:marktext }
    - progress 进度新的表单控件 
    - input type新加属性 date time search color datetime-local
- canvas 绘图  
- 支持内联 SVG。   
- 多媒体元素 audio(audio中source) video  embed track
- 本地离线存储，把需要离线存储在本地的文件列在一个 manifest 配置文件  
- web 存储 localStorage、SessionStorage  

**CSS3**  
- CSS3 边框如 border-radius，box-shadow 等；
- CSS3 背景如 background-size，background-origin 等；
- CSS3 2D，3D 转换如 transform 等；CSS3 动画如 animation等。

</p>
</details>

<p style="color:blue">3. CSS的重绘和重排的区别，以及需要注意什么？哪些属性会导致重绘和重排</p>
<details>
<summary><b>参考答案</b></summary>
<p>

一、重绘不一定需要重排，重排必然会导致重绘
1. 重排：当渲染树的一部分必须更新并且节点的尺寸发生了变化，浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。
  1.1 添加、删除可见的dom 
  1.2 元素的位置改变 
  1.3 元素的尺寸改变（外边距、内边距、边框厚度、宽高等几何属性）
  1.4 页面渲染初始化 
  1.5 浏览器窗口尺寸改变
2. 重绘：是在一个元素的外观被改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

二、注意点：减少reflow、repaint
1. 不要一条一条的修改DOM的样式，可以先定义好css的class，然后修改DOM的className。
2. 不要把DOM结点的属性值放在一个循环里当成循环里的变量。
3. 为动画的HTML元件适用fixed或absolute的position，那么修改他们的css是不会reflow

三、尽量使用重绘操作
- visibility=hidden不改变页面布局，仍然占位，但不会触发绑定的事件(重绘操作)
- opacity=0 不改变页面布局，仍然占位，可以触发绑定的事件(重绘操作)
- display: none改变页面布局，不再占位(重排操作)

</p>
</details>

<p style="color:blue">4. transform属性使用 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

用于元素的2D或3D转换，允许你将元素旋转,缩放,移动,倾斜等。 [详细transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
```
{
    transform:rotate(7deg);
    -ms-transform:rotate(7deg); 	/* IE 9 */
    -moz-transform:rotate(7deg); 	/* Firefox */
    -webkit-transform:rotate(7deg); /* Safari 和 Chrome */
    -o-transform:rotate(7deg); 	/* Opera */
}
```
transform: none | rotate | scale | skew | translate | matrix;

</p>
</details>

<p style="color:blue">5. js中数组的方法有哪些</p>

<details>
<summary><b>参考答案</b></summary>
<p>

参考答案[见这里](https://blog.liugezhou.online/012-JS%E6%95%B0%E7%BB%84/)
</p>
</details>
</details>

<div align="right" style="color:#512DA8">day2</div> 

> 人心中的成见是一座大山，任你怎么努力都休想搬动，一生中能改变命运的机会可不多呀。

<details>
<summary><b>2022-09-20</b></summary>
<p>

<p style="color:blue">1.你知道哪几种状态码? 都表示什么？【HTML】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 200 请求成功  
- 301 资源(网页)等被永久转移到其它URL
- 302 Found 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI
- 304 Not Modified 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
- 400 客户端请求的语法错误，服务器无法理解
- 401 请求要求用户的身份认证
- 403 服务器理解请求客户端的请求，但是拒绝执行此请求
- 404 请求的资源不存在
- 500 内部服务器错误
- 502 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
- 505 服务器不支持请求的HTTP协议的版本，无法完成处理

</p>
</details>

<p style="color:blue">2.使用css画一条0.5px的线 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

.line{
  border:1px solid gray;
  transform:scaleY(0.5);
}

</p>
</details>

<p style="color:blue">3. link标签和import标签的区别 【html】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- link 属于 html 标签，而@import 是 css 提供的
- 页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面加载结束后加载。
- link 方式样式的权重高于@import 

</p>
</details>

<p style="color:blue">4. CSS选择器有哪些，优先级排序以及CSS的三大特性 【CSS】 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

- id 选择器，class 选择器，标签选择器，伪元素选择器，伪类选择器等 
- 优先级：important > 内敛样式 > id 选择器 > class 选择器 > 标签选择器

</p>
</details>

<p style="color:blue">5. "use strict"的作用是什么？【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

use strict 出现在 JavaScript 代码的顶部或函数的顶部，可以帮助你写出更安全的 JavaScript 代码。如果你错误地创建了全局变量，它会通过抛出错误的方式来警告你。例如，以下程序将抛出错误：
```
function doSomething(val) {
 "use strict"; 
 x = val + 10;
}
```
它会抛出一个错误，因为 x 没有被定义，并使用了全局作用域中的某个值对其进行赋值，而 use strict 不允许这样做。下面的小改动修复了这个错误：
```
function doSomething(val) {
 "use strict"; 
 var x = val + 10;
}
```

</p>
</details>

</p>
</details>

<div align="right" style="color:#512DA8">day1</div> 

> 人生就是这样，求上得中求中得下，求下而不得。职场黄金期，没几年的，你年轻，要跟优秀的人一起做事，学会他们的工作方法，待人处事，不要一直想着要好好做，就单纯的好好去做。所有的学习，最开始都像是在照镜子，无非是学到了，再换一个老师，换一面镜子，直到有一天你发现，新的镜子里是你自己，你就有你自己的方法了，你就可以做别人的镜子了。  
>
<details>
<summary><b>2022-09-19</b></summary>
<p style="color:blue">1.使用代码画一个三角形 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

```
.triangle{
  width:0;
  height:0;
  border:100px solid red;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

```
</p>
</details>

<p style="color:blue">2. 1rem、1em、1vh、1vw、1px各自代表的含义？vw和vh与百分比的区别？vw和%可以同时使用吗，比如宽度用vw，padding用%？ 讲讲viewport和移动端布局 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

- 1rem与网站根标签font-size有关，若html根标签设置font-size:20px,那么这里的1rem为20px；  
- 1em与父元素有关，若父元素设置的font-size:20px;那么在子组件中2em就表示为40px；   
- 1vh(Viewport Height)表示可视化窗口高度的的1%；
- 1vw(Viewport Width)表示可视化窗口宽度的的1% ；
- 1px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的；

- vw和%同时使用可能会发生宽度自动滑动的问题，建议尽量宽度使用%。  

- 

</p>
</details>

<p style="color:blue">3. 普通文档流的布局规则和BFC布局规则？BFC的理解？清除浮动的方式？ 【CSS】</p>
<details>
<summary><b>参考答案</b></summary>
<p>

普通文档流奇怪问题：
1. 两个相邻元素的margin会重叠
2. 父子元素相邻时，子元素的margin属性会传递到父元素中
3. 普通文档流存在的问题可以通过触发BFC机制去解决

* 触发BFC机制：
1. float:left | right (父元素若没给定高度，使用float布局、会有高度坍缩问题)
2. overflow:auto| hidden| scroll
3. display:flex | inline-block | table-cells
4. position:absolute | fixed

</p>
</details>

<p style="color:blue">4. 说一下图片懒加载和预加载 </p>

<details>
<summary><b>参考答案</b></summary>
<p>

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。  
懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。  

两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。

</p>
</details>

<p style="color:blue">5. JS哪些操作会引起内存泄漏  【JS】</p>

<details>
<summary><b>参考答案</b></summary>
<p>

1. 意外的全局变量；在js文件开头添加 ‘use strict’，开启严格模式；
2. 未清理的DOM元素引用；
    var a = document.getElementById('id');
    document.body.removeChild(a);
解决：a = null；
3. 被遗忘的定时器或者回调；
解决：调用clearInterval或者clearTimeout
4. 闭包

</p>
</details>
</details>


