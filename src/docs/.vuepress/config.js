module.exports = {
  title: '业务组件库',
  description: '常用的业务组件',
  dest: './build',
  port: 1234,
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      },
    ],
    sidebar: {
      '/components/': [{
        collapsable: true,
        children: [
          'card'
        ]
      }]
    }
  }
}
