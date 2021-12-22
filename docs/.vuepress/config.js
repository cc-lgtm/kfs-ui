module.exports = {
  lang: 'zh-CN',
  title: 'Uninterest',
  description: '自己学习vue3，写着玩的一个组件库.',
  plugins: [
    ['vuepress-plugin-demoblock-plus', {
      scriptImports: ["import * as KfsUi from 'kfs-ui'"],
      scriptReplaces: [
        { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        },
        { searchValue: /import ({.*}) from 'kfs-ui'/g,
          replaceValue: (s, s1) => `const ${s1} = kfs-ui`
        }
      ]
    }]
  ],
  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/guide/button' },
      { text: 'npm', link: 'https://www.npmjs.com/package/kfs-ui' },
      { text: 'Github', link: 'https://github.com/cc-lgtm/v3-compoents' }
    ],
    sidebar: [
      {
        text: '通用',
        children: [
          { text: '按钮 Button', link: '/guide/button' },
          { text: '卡片 Card', link: '/guide/card' },
          { text: '文字提示 Tips', link: '/guide/tips' },
        ]
      },
      {
        text: '表单',
        children: [
          { text: '输入框 Input', link: '/guide/input' },
          { text: '评分 Rating', link: '/guide/rating' },
          { text: '选择器 Select', link: '/guide/select' },
          { text: '日历时间选择 DatePicker', link: '/guide/datepicker' }
        ]
      },
      {
        text: '数据展示',
        children: [
          { text: '骨架屏 Skeleton', link: '/guide/skeleton' }
        ]
      },
      {
        text: '布告',
        children: [
          { text: '消息提示 Message', link: '/guide/message' },
          { text: '弹框 Popup', link: '/guide/popup' },
          { text: '加载 Loading', link: '/guide/loading' },
          { text: '步骤条 steps', link: '/guide/steps' },
          { text: '抽屉 Drawer', link: '/guide/drawer' }
        ]
      },
      {
        text: '导航',
        children: [
          { text: '选项卡 Tabs', link: '/guide/tabs' },
          { text: '分页 Pagination', link: '/guide/pagination' }
        ]
      }
    ]
  }
}
