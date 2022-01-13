(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{394:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[s._v("#")]),s._v(" webpack")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("基本概念")]),s._v(" "),t("ul",[t("li",[s._v("entry :入口 webpack执行第一步从entry开始.可抽象成输入")]),s._v(" "),t("li",[s._v("Moudule: 模块,在webpack中一切皆模块,一个模块对应一个文件,webpack会从配置的entry开始,递归找出所有依赖的模块")]),s._v(" "),t("li",[s._v("chunk:代码块,一个chunk由多个模块组成,用于代码的合并和分割")]),s._v(" "),t("li",[s._v("loader:模块转换器,用于讲模块的原内容按照需求转换新内容")]),s._v(" "),t("li",[s._v("plugin:扩展插件,在webpack构建流程中的特定时机会广播对应的事件,插件可以监听这些事件的发生,在特定的时机去做对应的事情")])])]),s._v(" "),t("h2",{attrs:{id:"webpack-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-基础"}},[s._v("#")]),s._v(" Webpack 基础")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack webpack-cli -D "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装到本地依赖")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"经典问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#经典问题"}},[s._v("#")]),s._v(" 经典问题")]),s._v(" "),t("h3",{attrs:{id:"webpack运行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack运行流程"}},[s._v("#")]),s._v(" webpack运行流程")]),s._v(" "),t("ol",[t("li",[s._v("初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。")]),s._v(" "),t("li",[s._v("开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。")]),s._v(" "),t("li",[s._v("确定入口：根据配置中的 entry 找出所有的入口文件。")]),s._v(" "),t("li",[s._v("编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。")]),s._v(" "),t("li",[s._v("完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。")]),s._v(" "),t("li",[s._v("输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这是可以修改输出内容的最后机会。")]),s._v(" "),t("li",[s._v("输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统")])]),s._v(" "),t("p",[s._v("在以上过程中，webpack会在特定的时间点广播特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用webpack提供的API改变webpack的运行结果。")]),s._v(" "),t("h3",{attrs:{id:"compiler和compilation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiler和compilation"}},[s._v("#")]),s._v(" compiler和compilation")]),s._v(" "),t("p",[s._v("compiler 对象包含了webpack环境的所有的配置信息，包含options，loaders，plugins等信息，负责文件监听和启动编译，这个对象在webpack启动的时候被实例化，全局只有一个compiler实例。")]),s._v(" "),t("p",[s._v("compilation 对象包含了当前模块资源，编译生成资源，变化的文件等。\ncompilation当webpack以开发模式运行时，每当检测到文件的变化，便有一次新的compilation被创建。\ncompilation对象也提供了很多事件回调事件给插件进行扩展，通过compilation 也能读取到compiler对象")]),s._v(" "),t("p",[s._v("compiler和compilation的区别在于：compiler代表了整个weback从启动到关闭的生命周期，而compilation只代表一次新的编译")]),s._v(" "),t("h3",{attrs:{id:"webpack中的module是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack中的module是什么"}},[s._v("#")]),s._v(" webpack中的Module是什么？")]),s._v(" "),t("p",[s._v("前端模块\nwepack支持 ESModule、CommonJs、AMD、Assets(image,font,video,audio,json)")]),s._v(" "),t("ol",[t("li",[s._v("ESModule")])]),s._v(" "),t("p",[s._v("关键字 export import")]),s._v(" "),t("ol",[t("li",[s._v("Commonjs")])]),s._v(" "),t("p",[s._v("关键字 module.exports require")]),s._v(" "),t("p",[s._v("package.json")]),s._v(" "),t("p",[s._v("type:module -> ESM\ntype:commonjs -> cjs 强制使用cmj模块")]),s._v(" "),t("h3",{attrs:{id:"webpack-modules-如何表达自己的各种依赖关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-modules-如何表达自己的各种依赖关系"}},[s._v("#")]),s._v(" webpack modules,如何表达自己的各种依赖关系")]),s._v(" "),t("ul",[t("li",[s._v("ESM import 语句")]),s._v(" "),t("li",[s._v("CommonJS require() 语句")]),s._v(" "),t("li",[s._v("AMD define 和 require 语句")]),s._v(" "),t("li",[s._v("css/sass/less 文件中的 @import 语句。")]),s._v(" "),t("li",[s._v("stylesheet url(...) 或者 HTML "),t("code",[s._v("<img src=...>")]),s._v("文件中的图片链接。")])]),s._v(" "),t("h3",{attrs:{id:"常说的-chunk和bundle的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常说的-chunk和bundle的区别是什么"}},[s._v("#")]),s._v(" *常说的 chunk和bundle的区别是什么？")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("chunk(过程)\nchunk是webpack打包过程中Modules的集合，是"),t("span",{staticStyle:{color:"red"}},[s._v("打包过程中的概念")]),s._v("\nwebpack打包从一个入口模块开始，入口模块引用其他模块，其他模块又引用其他模块...\n通过引用关系逐个打包模块，这些module形成了chunk")]),s._v(" "),t("p",[s._v("如果有多个入口文件，会产生多个打包路径，每条路径都会形成各自的chunk。")])]),s._v(" "),t("li",[t("p",[s._v("bundle(结果)\n是我们最终输出的一个或多个打包好的文件。")])])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("区别")]),s._v(" "),t("p",[s._v("大多数情况下，一个chunk会产生一个bundle，但是也有例外。\n比如当我们开启source-map后, chunk和bundle就不是一对一的关系了。下面代码是一个\nchunk对应两个bundle。chunk是过程中的代码块，bundle是打包结果输出的代码块，chunk在构建完成后就会变成bundle")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        index"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/index.js"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    output"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[name].js"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    devtool"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source-map"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"loader-和-plugin-分别是做什么的-怎么工作的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader-和-plugin-分别是做什么的-怎么工作的"}},[s._v("#")]),s._v(" Loader 和 Plugin 分别是做什么的? 怎么工作的?")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Loader\n一句话描述：模块转换器(翻译官)，将非js模块转化为webpack能识别的js模块,并且一个文件可以链式的经过多个loader进行翻译")]),s._v(" "),t("p",[s._v("module   resolve")]),s._v(" "),t("p",[s._v("loader 让 webpack 能够去处理那些非 JavaScript 文件.\nloader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理。\n本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。")])]),s._v(" "),t("li",[t("p",[s._v("pligun")]),s._v(" "),t("p",[s._v("一句话描述：扩展插件，在webpack运行的各个阶段，都会广播出去相对应的事件，插件可以监听到这些事件的发生，在特定的时机做相对应的事情")]),s._v(" "),t("p",[s._v("loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务。\n插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。")]),s._v(" "),t("p",[s._v("在 webpack 运行的生命周期中会广播出各种事件，Plugin 可以监听这些事件，在触发时通过 webpack 提供的 API 改变输出结果。\n在插件中，可以拿到 Compile 和 Compilation 的引用对象，使用它们广播事件，这些事件可以被其他插件监听到，或者对他们做出一定修改，其他插件拿到的也是变化的对象。")])])]),s._v(" "),t("h3",{attrs:{id:"如何本地项目去做一些多端口服务的代理转发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何本地项目去做一些多端口服务的代理转发"}},[s._v("#")]),s._v(" 如何本地项目去做一些多端口服务的代理转发")]),s._v(" "),t("p",[s._v("proxy多写几个就行了")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  dev"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxyTable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"如何利用webpack去做依赖锁定-锁版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何利用webpack去做依赖锁定-锁版本"}},[s._v("#")]),s._v(" 如何利用webpack去做依赖锁定？锁版本")]),s._v(" "),t("p",[s._v("锁依赖固定板本 script标签写死")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HtmlWebpackPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.html'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      template"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.html'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      inject"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"静态文件的移动-赋值-用哪个plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态文件的移动-赋值-用哪个plugin"}},[s._v("#")]),s._v(" 静态文件的移动&赋值,用哪个plugin")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CopyWebpackPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../static'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        to"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("assetsSubDirectory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//移动到指定位置")]),s._v("\n        ignore"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[s._v("#")]),s._v(" 性能优化")]),s._v(" "),t("ul",[t("li",[s._v("视图渲染")]),s._v(" "),t("li",[s._v("网络层 减少请求")]),s._v(" "),t("li",[s._v("代码 | 结构\n"),t("ul",[t("li",[s._v("tree shaking 引入包的按需引入")]),s._v(" "),t("li",[s._v("模块懒加载 vue-router+trunk|noparse")]),s._v(" "),t("li",[s._v("文件指纹 消除缓存\n分chunk 性能优化\n路由懒加载")])])])]),s._v(" "),t("h2",{attrs:{id:"文件指纹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹"}},[s._v("#")]),s._v(" 文件指纹")]),s._v(" "),t("p",[s._v("文件指纹是在chunk上加hash 值,主要针对每个在使用cdn的时候,缓存问题,有了文件名+hash文件名更改,\n不会再走缓存")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("占位符")]),s._v(" "),t("th",[s._v("解释")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ext")]),s._v(" "),t("td",[s._v("文件后缀名")])]),s._v(" "),t("tr",[t("td",[s._v("path")]),s._v(" "),t("td",[s._v("文件相对路径")])]),s._v(" "),t("tr",[t("td",[s._v("folder")]),s._v(" "),t("td",[s._v("文件所在文件夹")])]),s._v(" "),t("tr",[t("td",[s._v("hash")]),s._v(" "),t("td",[s._v("每次构建生成的唯一 hash 值")])]),s._v(" "),t("tr",[t("td",[s._v("chunkhash")]),s._v(" "),t("td",[s._v("根据 chunk 生成 hash 值")])]),s._v(" "),t("tr",[t("td",[s._v("contenthash")]),s._v(" "),t("td",[s._v("根据文件内容生成hash 值")])])])]),s._v(" "),t("ul",[t("li",[s._v("hash ：任何一个文件改动，整个项目的构建 hash 值都会改变；")]),s._v(" "),t("li",[s._v("chunkhash：文件的改动只会影响其所在 chunk 的 hash 值；")]),s._v(" "),t("li",[s._v("contenthash：每个文件都有单独的 hash 值，文件的改动只会影响自身的 hash 值；")])]),s._v(" "),t("h2",{attrs:{id:"函数式编程理论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程理论"}},[s._v("#")]),s._v(" 函数式编程理论")]),s._v(" "),t("h3",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[s._v("#")]),s._v(" 特点")]),s._v(" "),t("ul",[t("li",[s._v("vue3 react 16.8 全面化函数的推动")]),s._v(" "),t("li",[s._v("函数式编程使代码单元测试更独立 tree shaking过程流畅 方便做ut")]),s._v(" "),t("li",[s._v("减少对this依赖")]),s._v(" "),t("li",[s._v("js天生友好的函数式编程 ramda loadsh")])]),s._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("ul",[t("li",[s._v("抽象运算过程")]),s._v(" "),t("li",[s._v("并非过程运算 是一种函数的映射")]),s._v(" "),t("li",[s._v("幂等 相同的输入始终得到相同的输出")])]),s._v(" "),t("h3",{attrs:{id:"纯函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纯函数"}},[s._v("#")]),s._v(" 纯函数")]),s._v(" "),t("h3",{attrs:{id:"数组长度未知-取最后一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组长度未知-取最后一项"}},[s._v("#")]),s._v(" 数组长度未知，取最后一项")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("first")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("reverse")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("arr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" last"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("compose")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("first"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("module.exports.pitch")]),s._v(" "),t("p",[s._v("babel")]),s._v(" "),t("p",[s._v("loader过程中添油加醋")]),s._v(" "),t("p",[s._v("plugin")]),s._v(" "),t("ul",[t("li",[s._v("loader提供的方法 是动词 翻译馆")]),s._v(" "),t("li",[s._v("plugins 插件 是类class")])])])}),[],!1,null,null,null);a.default=e.exports}}]);