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
          { text: '什么是 Raptor？', link: '/guide/intro' },
          { text: '快速上手', link: '/guide/quick-start' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nexaorion/Raptor' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en',
    }
  }
})
