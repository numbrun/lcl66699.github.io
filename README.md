---
home: true
modules: # 指定首页展示模块
  - bannerBrand
  # - MdContent
  - Footer
  
banner: # banner 模块的配置
  heroText: 几百前端
  tagline: 百龙的前端记录
  heroImage: /homepage.jpg
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: '/bg.svg'
  bgImageStyle:
    # height: 450px

bannerBrand: # bannerBrand 模块的配置
  heroText: 前端笔记
  tagline: 百龙的前端记录
  heroImage: /homepage.jpg
  heroImageStyle:
    maxWidth: '200px'
    width: '100%'
    display: block
    margin: '0 auto 2rem'
    borderRadius: '1rem'
  bgImage: '/bg.svg'
  buttons:
    - { text: 点我搬砖 →, link: '/views/js/' }
    # - { text: Default, link: '/docs/style-default-api/introduce', type: 'plain' }

isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:
- title: 过去
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 当下
  details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
- title: 未来
  details: 吸引更多的朋友参与到开发中来，继续强大功能。 

footer: # 底部模块的配置
  record: 黑ICP备20003708号-1
  recordLink: https://beian.miit.gov.cn/
  # cyberSecurityRecord: 公安备案
  # cyberSecurityLink: https://beian.miit.gov.cn/#/Integrated/index
  startYear: 2020
---

<!-- MdContent -->
## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
