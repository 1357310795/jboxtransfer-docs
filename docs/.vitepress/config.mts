import { DefaultTheme, defineConfig } from 'vitepress'
import defineVersionedConfig, { Versioned } from 'vitepress-versioning-plugin'
import * as url from 'url';
import { loadEnv } from 'vitepress';

const env = loadEnv('', process.cwd());

export default defineVersionedConfig({
  title: "JboxTransfer 说明文档",
  description: "高效、安全、便捷地转移您的文件",
  base: env.VITE_BASE_URL,
  themeConfig: {
    logo: "/assets/jboxtransfer.png",
    siteTitle: 'JboxTransfer 说明文档',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/download' },
      { 
        component: 'VersionSwitcher', 
      }, 
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/1357310795/JboxTransfer' }
    ],
    versionSwitcher: false,
    sidebar: {
      "/" : [
        {
          "text": "开始",
          "items": [
            { "text": "下载安装指南", "link": "/download" },
            { "text": "快速上手", "link": "/quickstart" }
          ]
        },
        {
          "text": "使用",
          "items": [
            {"text": "开始页", "link": "/page-start" },
            {"text": "任务列表页", "link": "/page-list" },
            {"text": "任务查询页", "link": "/page-query" },
            {"text": "设置页", "link": "/page-settings" },
            {"text": "异常处理", "link": "/error-dealing" }
          ]
        },
        {
          "text": "高级",
          "items": [
            { "text": "数据库模型与转移逻辑介绍", "link": "/internal" }
          ]
        },
        {
          "text": "更多",
          "items": [
            { "text": "Q&A", "link": "/qa" },
            { "text": "问题反馈", "link": "/feedback" }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
  },
  versioning: {
    latestVersion: "2.0.0",
    sidebars: {
      processSidebarURLs: true,
    }
  },
  ignoreDeadLinks: [
    /\/bin/
  ],
}, url.fileURLToPath(new URL('.', import.meta.url)))
