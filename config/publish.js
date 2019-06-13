/**
 * 发布到后台系统的相关配置
 * page：描述上传到后台系统的一些配置
 * file：描述页面上需要上传到后台系统的文件配置
 */
const _exports = {
  page: {
    test: [
      {
        id: '88',
        title: '小贝优品-办信用卡信息录入页面',
        name: 'xiaobeiapplycreditcardinfo',
        content: 'info.page.test.html',
        layout: 'app-download'
      },
      {
        id: '83',
        title: '小贝优品-办信用卡',
        name: 'xiaobeiapplycreditcard',
        content: 'index.page.test.html',
        layout: 'app-download'
      }
    ],
    prod: [
      {
        // id: '88',
        title: '小贝优品-办信用卡信息录入页面',
        name: 'xiaobeiapplycreditcardinfo',
        content: 'info.page.test.html',
        layout: 'app-download'
      },
      {
        // id: '83',
        title: '小贝优品-办信用卡',
        name: 'xiaobeiapplycreditcard',
        content: 'index.page.test.html',
        layout: 'app-download'
      }
    ]
  },
  file: [
    {
      title: "今日推荐1@3x.png",
      path: "/dist/assets/今日推荐1@3x.png"
    },
    {
      title: "今日推荐2@3x.png",
      path: "/dist/assets/今日推荐2@3x.png"
    },
    {
      title: "今日推荐3@3x.png",
      path: "/dist/assets/今日推荐3@3x.png"
    },
    {
      title: "今日推荐4@3x.png",
      path: "/dist/assets/今日推荐4@3x.png"
    },
    {
      title: "今日推荐5@3x.png",
      path: "/dist/assets/今日推荐5@3x.png"
    },
    {
      title: "今日推荐6@3x.png",
      path: "/dist/assets/今日推荐6@3x.png"
    },
    {
      title: "今日推荐7@3x.png",
      path: "/dist/assets/今日推荐7@3x.png"
    },
    {
      title: "最受欢迎1@3x.png",
      path: "/dist/assets/最受欢迎1@3x.png"
    },
    {
      title: "最受欢迎2@3x.png",
      path: "/dist/assets/最受欢迎2@3x.png"
    },
    {
      title: "最受欢迎3@3x.png",
      path: "/dist/assets/最受欢迎3@3x.png"
    },
    {
      title: "最受欢迎4@3x.png",
      path: "/dist/assets/最受欢迎4@3x.png"
    },
    {
      title: "最受欢迎5@3x.png",
      path: "/dist/assets/最受欢迎5@3x.png"
    },
    {
      title: "最受欢迎6@3x.png",
      path: "/dist/assets/最受欢迎6@3x.png"
    },
    {
      title: "最受欢迎7@3x.png",
      path: "/dist/assets/最受欢迎7@3x.png"
    },
  ]
}

module.exports = {
  page: _exports.page,
  file: _exports.file
}