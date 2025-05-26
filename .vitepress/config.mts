import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Raptor",
  description: "The Next Generation CTF Competition Problem Solving Aids",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitlab', link: 'https://git.nexaorion.cn/nexaorion/raptor-website' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en',
    }
  }
})
