(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{380:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("h2",{attrs:{id:"服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[t._v("#")]),t._v(" 服务器")]),t._v(" "),a("p",[t._v("谈到部署, 肯定得先有一个自己的服务器. 因为咱们是上课教学, 我就随便找个便宜的演示一下..")]),t._v(" "),a("p",[t._v("https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=fyhp3q4t")]),t._v(" "),a("p",[t._v("选ecs服务器, 按量付费/月/年 都行, 随便选个镜像即可.")]),t._v(" "),a("h2",{attrs:{id:"linux安装nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux安装nodejs"}},[t._v("#")]),t._v(" Linux安装Nodejs")]),t._v(" "),a("ol",[a("li",[t._v("下载安装包")])]),t._v(" "),a("p",[a("code",[t._v("wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.xz")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("解压")])]),t._v(" "),a("p",[a("code",[t._v("tar xf node-v10.9.0-linux-x64.tar.xz")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("设置软链接")])]),t._v(" "),a("p",[a("code",[t._v("ln -s /root/node-v10.9.0-linux-x64/bin/node /usr/local/bin/node")]),t._v(" "),a("code",[t._v("ln -s /root/node-v10.9.0-linux-x64/bin/npm /usr/local/bin/npm")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("查看Node版本和npm版本")])]),t._v(" "),a("p",[a("code",[t._v("node -v")]),t._v(" "),a("code",[t._v("npm -v")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("设置npm源")])]),t._v(" "),a("p",[a("code",[t._v("npm config set registry https://registry.npm.taobao.org")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("服务器安装pm2")])]),t._v(" "),a("p",[a("code",[t._v("npm install -g pm2")]),t._v(" "),a("code",[t._v("ln -s /root/node-v10.9.0-linux-x64/bin/pm2 /usr/local/bin/")])]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("配置ssh")])]),t._v(" "),a("ul",[a("li",[t._v("本地生成秘钥对: "),a("code",[t._v("ssh-keygen -t rsa")]),t._v("  demo_id_rsa")]),t._v(" "),a("li",[t._v("将公钥放到服务器上: "),a("code",[t._v("scp ~/.ssh/demo_id_rsa.pub root@39.107.238.161:/root/.ssh/authorized_keys")])]),t._v(" "),a("li",[t._v("修改ssh配置 "),a("code",[t._v("vi ~/.ssh/config")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Host lubai\nHostName 39.107.238.161\nUser root\nPort 22\nIdentityFile ~/.ssh/demo_id_rsa\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("服务器上修改ssh配置 "),a("code",[t._v("vim /etc/ssh/sshd_config")])])]),t._v(" "),a("p",[t._v("PubkeyAuthentication yes\nAuthorizedKeysFile .ssh/authorized_keys")]),t._v(" "),a("ul",[a("li",[t._v("最后就可以ssh登录了! "),a("code",[t._v("ssh lubai")])])]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("将本地代码同步到服务器")])]),t._v(" "),a("p",[a("code",[t._v('rsync -avzp -e "ssh" ./Internet/ lubai:/root/app')])]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[t._v("服务器上启动http")])]),t._v(" "),a("p",[a("code",[t._v("pm2 start /root/app/http-server.js")])]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[t._v("本地修改发布命令")])]),t._v(" "),a("p",[t._v("10.1 新建deploy.sh文件")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lubai\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -avzp -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ssh"')]),t._v(" ./Internet/ "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOST")]),t._v(":/root/app\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pm2 restart /root/app/http-server.js"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy success'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("10.2 初始化npm命令")]),t._v(" "),a("p",[a("code",[t._v("npm init")]),t._v('\n新增scripts "deploy": "./deploy.sh"')]),t._v(" "),a("p",[t._v("10.3 发布")]),t._v(" "),a("p",[a("code",[t._v("npm run deploy")])]),t._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[t._v("修改http-server的监听host")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Server running at http://")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ol",{attrs:{start:"12"}},[a("li",[t._v("ECS安全组添加80端口")]),t._v(" "),a("li",[t._v("查看服务器上是否已正常监听80端口")])]),t._v(" "),a("p",[a("code",[t._v("netstat -tpln")])]),t._v(" "),a("ol",{attrs:{start:"14"}},[a("li",[t._v("通过ip+端口访问")])]),t._v(" "),a("p",[t._v("39.107.238.161:80")])])}),[],!1,null,null,null);s.default=e.exports}}]);