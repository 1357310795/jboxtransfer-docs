import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JboxTransfer 说明文档",
  description: "高效、安全、便捷地转移您的文件",
  base: '/jboxtransfer/',
  themeConfig: {
    logo: "/assets/jboxtransfer.png",
    siteTitle: 'JboxTransfer 说明文档',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/download' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '下载安装指南', link: '/download' },
          { text: '快速上手', link: '/quickstart' },
        ]
      },
      {
        text: '使用',
        items: [
          { text: '开始页', link: '/page-start' },
          { text: '传输列表页', link: '/page-list' },
          { text: '设置页', link: '/page-settings' },
          { text: '数据库操作页', link: '/page-dbop' },
          { text: '异常处理', link: '/error-dealing' },
        ]
      },
      {
        text: '高级',
        items: [
          // { text: 'jBox 数据接口', link: '/jbox' },
          // { text: '腾讯 SMH 数据接口', link: '/tbox' },
          { text: '数据库模型与转移逻辑介绍', link: '/internal' },
        ]
      },
      {
        text: '更多',
        items: [
          { text: 'Q&A', link: '/qa' },
          { text: '问题反馈', link: '/feedback' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1357310795/JboxTransfer' }
    ]
  }
})
