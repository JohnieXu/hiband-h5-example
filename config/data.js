// const mode = process.env.MODE

const bankUrl = new Map([
  ['兴业','http://sp.hnascp.com/merchant/redirectSupplier?info=0818e218423948a3950cff6f6cabf8b5'],
  ['浦发','http://sp.hnascp.com/merchant/redirectSupplier?info=24a2c4c224ce40f189b03f8e25341281'],
  ['浦发白金','http://sp.hnascp.com/merchant/redirectSupplier?info=3b89cbd749184d49a902a48f33059dea'],
  ['平安','http://xinyongka.1122334455.cn/credit/6/308'],
  ['广发','http://sp.hnascp.com/merchant/redirectSupplier?info=86058352cb8a47459d5ac7d626991998'],
  ['中信','http://sp.hnascp.com/merchant/redirectSupplier?info=99aa3cd693014bf2a0821ff89651841d'],
  ['光大', 'http://sp.hnascp.com/merchant/redirectSupplier?info=cbe8f796cf7044628972d724a4ad5b34']
])

const data = {
  dev: {
    header: {
      image: 'http://static.card.xyk51.cn/upload/file/2019/05/24/fa4407b11d033613e83519f3ef705db8.png'
    },
    recommend: [
      {
        title: '光大小黄鸭童梦主题卡aaa',
        desc: '卡片有效期内免年费',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/cb93e70d71c8535066e0581b9e3d3a15.png',
        url: bankUrl.get('光大')
      },
      {
        title: '浦发简约白金卡',
        desc: '白金卡，免年费',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/d75a85cc354d79a23a49b11d2e01e69b.png',
        url: bankUrl.get('浦发白金')
      },
      {
        title: '中信颜卡锦鲤卡',
        desc: '刷卡免年费，3折购漫威耳机',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/0b79d62073825c9d1fa71e396548db1e.png',
        url: bankUrl.get('中信')
      },
      {
        title: '浦发“我”系列男性主题卡',
        desc: '白金卡，免信用卡年费',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/fbcabeb06d1d910c051e5096ea106061.png',
        url: bankUrl.get('浦发')
      },
      {
        title: '中信银行白金信用卡',
        desc: '网络、线下交易双倍积分',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/c64238169cedc554db2ad44eedfd4d08.png',
        url: bankUrl.get('中信')
      },
      {
        title: '浦发苏宁易购联名信用卡',
        desc: '一年苏宁SUPER VIP会员',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/497796ac18bb88374b55bb5e17d88e38.png',
        url: bankUrl.get('浦发')
      },
      {
        title: '平安银行不带卡',
        desc: '终身免年费',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/7c8d1fdc0de45daa88d4dc83ba8f3cf1.png',
        url: bankUrl.get('平安')
      },
    ],
    hot: [
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/195e023174c549f78bfedec2fbc24743.png',
        url: './xiaobeiapplycreditcardinfo?bankName=招商银行',
        title: '招商银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/d7fd78c44fa0571fedf9463b6d229211.png',
        url: bankUrl.get('浦发白金'),
        title: '浦发银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/698174981c7571d2dd881b4d7c110ce2.png',
        url: './xiaobeiapplycreditcardinfo?bankName=民生',
        title: '民生银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/efaf5d6fa49536ff1311c402d1eac5e6.png',
        url: bankUrl.get('平安'),
        title: '平安银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/c33f183270a103726e72c904ea9020aa.png',
        url: bankUrl.get('光大'),
        title: '光大银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/eabd3fbe2303e46177a6cee88e68351f.png',
        url: './xiaobeiapplycreditcardinfo?bankName=华夏银行',
        title: '华夏银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/a89bac2c8eb2f286ce29a8effa6aa1c0.png',
        url: bankUrl.get('兴业'),
        title: '兴业银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/e0f4eb842d3a22d98c479c50ce297559.png',
        url: bankUrl.get('中信'),
        title: '中信银行'
      },
    ],
    popular: [
      {
        title: '中信银行淘宝网卡',
        desc: '网络购物最高10倍积分',
        applyText: '申请人数：',
        applyCount: 2174,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/8f13ddb170306e2c857787daa7588355.png',
        url: bankUrl.get('中信'),
        buttonText: '立即申请'
      },
      {
        title: '光大大嘴猴街头主题信用卡',
        desc: '微信/支付宝/京东支付计积分',
        applyText: '申请人数：',
        applyCount: 2438,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/4d8eebbf891ad59ecc618f983f2e791b.png',
        url: bankUrl.get('光大'),
        buttonText: '立即申请'
      },
      {
        title: '浦发“我”系列男性主题卡',
        desc: '白金卡，免年费',
        applyText: '申请人数：',
        applyCount: 2631,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/e84657c3883616d3d3510ededd320d74.png',
        url: bankUrl.get('浦发'),
        buttonText: '立即申请'
      },
      {
        title: '中信银行颐和园信用卡',
        desc: '刷卡免年费',
        applyText: '申请人数：',
        applyCount: 2824,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/f1ccfc1af02962be7326b4f9d2dea43f.png',
        url: bankUrl.get('中信'),
        buttonText: '立即申请'
      },
      {
        title: '光大阳光白金信用卡',
        desc: '微信/支付宝/京东支付计积分',
        applyText: '申请人数：',
        applyCount: 3017,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/4d8eebbf891ad59ecc618f983f2e791b.png',
        url: bankUrl.get('光大'),
        buttonText: '立即申请'
      },
      {
        title: '浦发腾讯视频联名信用卡',
        desc: '白金卡，免年费',
        applyText: '申请人数：',
        applyCount: 3210,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/13bdbdf969ebc9e1a48cf5281f995396.png',
        url: bankUrl.get('浦发白金'),
        buttonText: '立即申请'
      },
      {
        title: '浦发美丽女人卡之花语卡',
        desc: '版面费99元，9.9元/月',
        applyText: '申请人数：',
        applyCount: 3403,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/c86cb9c72ad0bd62408de602e5e44e59.png',
        url: bankUrl.get('浦发'),
        buttonText: '立即申请'
      },
    ],
    backIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFEklEQVRoQ9VaTXIaRxT+3gCyd5GqBNvgRQK7oBNYOYHlE1haJigldAKhEwhVIFlaPoHxCSSdQHgHyUJ4C6qStZP4mZd6PTSa6RmYGZhRVVgy/fO+16+/99eEBH7Fs/vNV7npWyKugLEL4iJARe/S3AdTH4QrZuo8jTPX/eOt7+tuT6suIEK/zk3fMdk1AlVWWYfBHWKr8TjOfFkVTGwASvCNyREzakTYXEVwcw4zvhOh8TjKnscFEgtAqTU4AlN9keDM/JWADoj6APVhc18Ja4k5cRHMRQYqRPRLEHABAuJ6r1o4j6qYSADKf98X2R5/DjIVBr4QqP04yrSjas85xekeg/cIeOc7ETEtK/e++9uWo4Alv1AAP/91t0c2f/RpnfkTMrl6lE2WCSDKwXRcB9EH9zg5Dbbo4J/ft9srAyi37vYB/uhdmL/ahP1/q4VOmHbifP+pNahYjAu/edFBt7p9sWithScQKDzovFfdrsURLO7YUuuuQeAj77zFIAIBiNlYzJ+jLhJXyLDxQcqzid4HmZMPgLqw08mN2+YXTQ4TZJ3vJghFtZnsjnnnfABKrcGNl22W2+A6QobN9YEAd3rVwo57ngdAqTkU53SmB/AL2HwYCPNOMOO4d5hv6HlzAE48M7nVpiNOqXdYWClEWCSUYhrQCTE2p8THUZms1Bx0NDuJKT2Ns2+0z5kDKLeGdQAnevMpeCfqBmFalO8OTdKl625dd6v53ahzM6Ab19jTbjUv8kIBMLUP5k/dw8J+lMWjjAkQXrZeyu/muuXm4EI7O/cpKAA+2rKyb9b1sFqAJIRXMorHtie3z8AcBSgAbuaR2KZXze9F0WzYmKSE1/uUWsO2jp0kFBdGoll4fG8iCxMu7HvSwgdZyuMou0Wm15U/o0aVS9nGe2Fj23zQ2qayxcGSm32SoM40NO8G46ZUAKcC4ArAWzVoTfZJW3hlRi42AnBN5dbg1pWAz/k1zMbN7y8hvHMP3P6K+3ICrIVZNWgLCgDj8nxUhZmU7wEAG792/8iLScX6uenNmRjPScXZrPzncBcWLvWclADwRbdaOIgjWNSxywGsqDkn6Z90CPjhWZB0QPhNqDmUatmPs43Xu8Sgq7RBeC4x41vyNJoyiAAafaYlHV9EtcegcbOYP7WTMDLG0/RCiRROIjCUSDWYSxiEeYFVMCdm4EnZkg6nEwRRbg4vQVBZnI7bXiahSQDE0oRGpZQbk/6cAtcM6oLiJCOnhVldCCMOT0oJPDyNskUJ+18sqQ+otkVO6k3vK2G0J6kX9OYpJEGpplYFBIMbctJxAkcj5Z1rX0Vd3mThZQpboqyoWV/kwpYGYmQ8qUaWoXZvlPeDMsbg4q4vMEsvPF4Ewl8XxQNZ2UpocVcW/F+X17VGgrszaPQO88dhR7/O91JzeEYEo4kSs8GxFAS4YwMHSdZNZT+hSrb4zN9IXLHFpEGoJh+zlPBcyYpy5hewcqfrliAdDzs+AchTi2XggYn212ryzU9CdW3G7aD+LgNtYmrH6bY/d/lVm9VXxlT95kxuL4pyQtuspp8Aoe4/DWeUejogjW5pcsu7CGvW6Lap6LyfmDW6FzxNEK2DUXc3MMLuUywA2mO/3pjUGKgtAhK2qfldBCeopwaNqA5OrxEbgJ4477azXVv0dCAMiDIVshpxuvzmmisDcC8kYDZeTXctZmlJ7YJRdBUKtH19A0GeDlzZRJ3RU+YqrraDFPIfcWxacxruOkAAAAAASUVORK5CYII='
  },
  test: {
    header: {
      image: 'http://static.card.xyk51.cn/upload/file/2019/05/24/fa4407b11d033613e83519f3ef705db8.png'
    },
    recommend: [
      {
        title: '光大小黄鸭童梦主题卡',
        desc: '卡片有效期内免年费',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/cb93e70d71c8535066e0581b9e3d3a15.png',
        url: bankUrl.get('光大')
      },
      {
        title: '浦发简约白金卡',
        desc: '白金卡，免年费',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/d75a85cc354d79a23a49b11d2e01e69b.png',
        url: bankUrl.get('浦发白金')
      },
      {
        title: '中信颜卡锦鲤卡',
        desc: '刷卡免年费，3折购漫威耳机',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/0b79d62073825c9d1fa71e396548db1e.png',
        url: bankUrl.get('中信')
      },
      {
        title: '浦发“我”系列男性主题卡',
        desc: '白金卡，免信用卡年费',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/fbcabeb06d1d910c051e5096ea106061.png',
        url: bankUrl.get('浦发')
      },
      {
        title: '中信银行白金信用卡',
        desc: '网络、线下交易双倍积分',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/c64238169cedc554db2ad44eedfd4d08.png',
        url: bankUrl.get('中信')
      },
      {
        title: '浦发苏宁易购联名信用卡',
        desc: '一年苏宁SUPER VIP会员',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/497796ac18bb88374b55bb5e17d88e38.png',
        url: bankUrl.get('浦发')
      },
      {
        title: '平安银行不带卡',
        desc: '终身免年费',
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/7c8d1fdc0de45daa88d4dc83ba8f3cf1.png',
        url: bankUrl.get('平安')
      },
    ],
    hot: [
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/195e023174c549f78bfedec2fbc24743.png',
        url: './xiaobeiapplycreditcardinfo?bankName=招商银行',
        title: '招商银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/d7fd78c44fa0571fedf9463b6d229211.png',
        url: bankUrl.get('浦发白金'),
        title: '浦发银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/698174981c7571d2dd881b4d7c110ce2.png',
        url: './xiaobeiapplycreditcardinfo?bankName=民生',
        title: '民生银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/efaf5d6fa49536ff1311c402d1eac5e6.png',
        url: bankUrl.get('平安'),
        title: '平安银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/c33f183270a103726e72c904ea9020aa.png',
        url: bankUrl.get('光大'),
        title: '光大银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/eabd3fbe2303e46177a6cee88e68351f.png',
        url: './xiaobeiapplycreditcardinfo?bankName=华夏银行',
        title: '华夏银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/a89bac2c8eb2f286ce29a8effa6aa1c0.png',
        url: bankUrl.get('兴业'),
        title: '兴业银行'
      },
      {
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/e0f4eb842d3a22d98c479c50ce297559.png',
        url: bankUrl.get('中信'),
        title: '中信银行'
      },
    ],
    popular: [
      {
        title: '中信银行淘宝网卡',
        desc: '网络购物最高10倍积分',
        applyText: '申请人数：',
        applyCount: 2174,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/8f13ddb170306e2c857787daa7588355.png',
        url: bankUrl.get('中信'),
        buttonText: '立即申请'
      },
      {
        title: '光大大嘴猴街头主题信用卡',
        desc: '微信/支付宝/京东支付计积分',
        applyText: '申请人数：',
        applyCount: 2438,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/4d8eebbf891ad59ecc618f983f2e791b.png',
        url: bankUrl.get('光大'),
        buttonText: '立即申请'
      },
      {
        title: '浦发“我”系列男性主题卡',
        desc: '白金卡，免年费',
        applyText: '申请人数：',
        applyCount: 2631,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/e84657c3883616d3d3510ededd320d74.png',
        url: bankUrl.get('浦发'),
        buttonText: '立即申请'
      },
      {
        title: '中信银行颐和园信用卡',
        desc: '刷卡免年费',
        applyText: '申请人数：',
        applyCount: 2824,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/f1ccfc1af02962be7326b4f9d2dea43f.png',
        url: bankUrl.get('中信'),
        buttonText: '立即申请'
      },
      {
        title: '光大阳光白金信用卡',
        desc: '微信/支付宝/京东支付计积分',
        applyText: '申请人数：',
        applyCount: 3017,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/29/4d8eebbf891ad59ecc618f983f2e791b.png',
        url: bankUrl.get('光大'),
        buttonText: '立即申请'
      },
      {
        title: '浦发腾讯视频联名信用卡',
        desc: '白金卡，免年费',
        applyText: '申请人数：',
        applyCount: 3210,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/13bdbdf969ebc9e1a48cf5281f995396.png',
        url: bankUrl.get('浦发白金'),
        buttonText: '立即申请'
      },
      {
        title: '浦发美丽女人卡之花语卡',
        desc: '版面费99元，9.9元/月',
        applyText: '申请人数：',
        applyCount: 3403,
        imgUrl: 'http://static.card.xyk51.cn/upload/file/2019/05/24/c86cb9c72ad0bd62408de602e5e44e59.png',
        url: bankUrl.get('浦发'),
        buttonText: '立即申请'
      },
    ],
    backIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFEklEQVRoQ9VaTXIaRxT+3gCyd5GqBNvgRQK7oBNYOYHlE1haJigldAKhEwhVIFlaPoHxCSSdQHgHyUJ4C6qStZP4mZd6PTSa6RmYGZhRVVgy/fO+16+/99eEBH7Fs/vNV7npWyKugLEL4iJARe/S3AdTH4QrZuo8jTPX/eOt7+tuT6suIEK/zk3fMdk1AlVWWYfBHWKr8TjOfFkVTGwASvCNyREzakTYXEVwcw4zvhOh8TjKnscFEgtAqTU4AlN9keDM/JWADoj6APVhc18Ja4k5cRHMRQYqRPRLEHABAuJ6r1o4j6qYSADKf98X2R5/DjIVBr4QqP04yrSjas85xekeg/cIeOc7ETEtK/e++9uWo4Alv1AAP/91t0c2f/RpnfkTMrl6lE2WCSDKwXRcB9EH9zg5Dbbo4J/ft9srAyi37vYB/uhdmL/ahP1/q4VOmHbifP+pNahYjAu/edFBt7p9sWithScQKDzovFfdrsURLO7YUuuuQeAj77zFIAIBiNlYzJ+jLhJXyLDxQcqzid4HmZMPgLqw08mN2+YXTQ4TZJ3vJghFtZnsjnnnfABKrcGNl22W2+A6QobN9YEAd3rVwo57ngdAqTkU53SmB/AL2HwYCPNOMOO4d5hv6HlzAE48M7nVpiNOqXdYWClEWCSUYhrQCTE2p8THUZms1Bx0NDuJKT2Ns2+0z5kDKLeGdQAnevMpeCfqBmFalO8OTdKl625dd6v53ahzM6Ab19jTbjUv8kIBMLUP5k/dw8J+lMWjjAkQXrZeyu/muuXm4EI7O/cpKAA+2rKyb9b1sFqAJIRXMorHtie3z8AcBSgAbuaR2KZXze9F0WzYmKSE1/uUWsO2jp0kFBdGoll4fG8iCxMu7HvSwgdZyuMou0Wm15U/o0aVS9nGe2Fj23zQ2qayxcGSm32SoM40NO8G46ZUAKcC4ArAWzVoTfZJW3hlRi42AnBN5dbg1pWAz/k1zMbN7y8hvHMP3P6K+3ICrIVZNWgLCgDj8nxUhZmU7wEAG792/8iLScX6uenNmRjPScXZrPzncBcWLvWclADwRbdaOIgjWNSxywGsqDkn6Z90CPjhWZB0QPhNqDmUatmPs43Xu8Sgq7RBeC4x41vyNJoyiAAafaYlHV9EtcegcbOYP7WTMDLG0/RCiRROIjCUSDWYSxiEeYFVMCdm4EnZkg6nEwRRbg4vQVBZnI7bXiahSQDE0oRGpZQbk/6cAtcM6oLiJCOnhVldCCMOT0oJPDyNskUJ+18sqQ+otkVO6k3vK2G0J6kX9OYpJEGpplYFBIMbctJxAkcj5Z1rX0Vd3mThZQpboqyoWV/kwpYGYmQ8qUaWoXZvlPeDMsbg4q4vMEsvPF4Ewl8XxQNZ2UpocVcW/F+X17VGgrszaPQO88dhR7/O91JzeEYEo4kSs8GxFAS4YwMHSdZNZT+hSrb4zN9IXLHFpEGoJh+zlPBcyYpy5hewcqfrliAdDzs+AchTi2XggYn212ryzU9CdW3G7aD+LgNtYmrH6bY/d/lVm9VXxlT95kxuL4pyQtuspp8Aoe4/DWeUejogjW5pcsu7CGvW6Lap6LyfmDW6FzxNEK2DUXc3MMLuUywA2mO/3pjUGKgtAhK2qfldBCeopwaNqA5OrxEbgJ4477azXVv0dCAMiDIVshpxuvzmmisDcC8kYDZeTXctZmlJ7YJRdBUKtH19A0GeDlzZRJ3RU+YqrraDFPIfcWxacxruOkAAAAAASUVORK5CYII='
  },
  prod: {
    header: {
      image: 'http://static.card.foreverhappy.cn/upload/file/2019/05/24/fa4407b11d033613e83519f3ef705db8.png'
    },
    recommend: [
      {
        title: '光大大嘴猴街头主题信用卡',
        desc: '卡片有效期内免年费',
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/cb93e70d71c8535066e0581b9e3d3a15.png',
        url: bankUrl.get('光大')
      },
      {
        title: '浦发简约白金卡',
        desc: '白金卡，免年费',
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/d75a85cc354d79a23a49b11d2e01e69b.png',
        url: bankUrl.get('浦发白金')
      },
      {
        title: '中信颜卡锦鲤卡',
        desc: '刷卡免年费，3折购漫威耳机',
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/0b79d62073825c9d1fa71e396548db1e.png',
        url: bankUrl.get('中信')
      },
      {
        title: '浦发“我”系列男性主题卡',
        desc: '白金卡，免信用卡年费',
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/fbcabeb06d1d910c051e5096ea106061.png',
        url: bankUrl.get('浦发')
      },
      {
        title: '中信银行白金信用卡',
        desc: '网络、线下交易双倍积分',
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/c64238169cedc554db2ad44eedfd4d08.png',
        url: bankUrl.get('中信')
      },
      {
        title: '浦发苏宁易购联名信用卡',
        desc: '一年苏宁SUPER VIP会员',
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/497796ac18bb88374b55bb5e17d88e38.png',
        url: bankUrl.get('浦发')
      },
      {
        title: '平安银行不带卡',
        desc: '终身免年费',
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/7c8d1fdc0de45daa88d4dc83ba8f3cf1.png',
        url: bankUrl.get('平安')
      },
    ],
    hot: [
      {
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/24/195e023174c549f78bfedec2fbc24743.png',
        url: './xiaobeiapplycreditcardinfo?bankName=招商银行',
        title: '招商银行'
      },
      {
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/24/d7fd78c44fa0571fedf9463b6d229211.png',
        url: bankUrl.get('浦发白金'),
        title: '浦发银行'
      },
      {
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/24/698174981c7571d2dd881b4d7c110ce2.png',
        url: './xiaobeiapplycreditcardinfo?bankName=民生',
        title: '民生银行'
      },
      {
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/24/efaf5d6fa49536ff1311c402d1eac5e6.png',
        url: bankUrl.get('平安'),
        title: '平安银行'
      },
      {
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/24/c33f183270a103726e72c904ea9020aa.png',
        url: bankUrl.get('光大'),
        title: '光大银行'
      },
      {
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/24/eabd3fbe2303e46177a6cee88e68351f.png',
        url: './xiaobeiapplycreditcardinfo?bankName=华夏银行',
        title: '华夏银行'
      },
      {
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/24/a89bac2c8eb2f286ce29a8effa6aa1c0.png',
        url: bankUrl.get('兴业'),
        title: '兴业银行'
      },
      {
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/24/e0f4eb842d3a22d98c479c50ce297559.png',
        url: bankUrl.get('中信'),
        title: '中信银行'
      },
    ],
    popular: [
      {
        title: '中信银行淘宝网卡',
        desc: '网络购物最高10倍积分',
        applyText: '申请人数：',
        applyCount: 2174,
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/8f13ddb170306e2c857787daa7588355.png',
        url: bankUrl.get('中信'),
        buttonText: '立即申请'
      },
      {
        title: '光大小黄鸭童梦主题卡',
        desc: '微信/支付宝/京东支付计积分',
        applyText: '申请人数：',
        applyCount: 2438,
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/4d8eebbf891ad59ecc618f983f2e791b.png',
        url: bankUrl.get('光大'),
        buttonText: '立即申请'
      },
      {
        title: '浦发“我”系列男性主题卡',
        desc: '白金卡，免年费',
        applyText: '申请人数：',
        applyCount: 2631,
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/e84657c3883616d3d3510ededd320d74.png',
        url: bankUrl.get('浦发'),
        buttonText: '立即申请'
      },
      {
        title: '中信银行颐和园信用卡',
        desc: '刷卡免年费',
        applyText: '申请人数：',
        applyCount: 2824,
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/f1ccfc1af02962be7326b4f9d2dea43f.png',
        url: bankUrl.get('中信'),
        buttonText: '立即申请'
      },
      {
        title: '光大阳光白金信用卡',
        desc: '微信/支付宝/京东支付计积分',
        applyText: '申请人数：',
        applyCount: 3017,
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/ea811d9b19e1d8b62c093014d5e32cc5.png',
        url: bankUrl.get('光大'),
        buttonText: '立即申请'
      },
      {
        title: '浦发腾讯视频联名信用卡',
        desc: '白金卡，免年费',
        applyText: '申请人数：',
        applyCount: 3210,
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/13bdbdf969ebc9e1a48cf5281f995396.png',
        url: bankUrl.get('浦发白金'),
        buttonText: '立即申请'
      },
      {
        title: '浦发美丽女人卡之花语卡',
        desc: '版面费99元，9.9元/月',
        applyText: '申请人数：',
        applyCount: 3403,
        imgUrl: 'https://static.card.foreverhappy.cn/upload/file/2019/05/29/c86cb9c72ad0bd62408de602e5e44e59.png',
        url: bankUrl.get('浦发'),
        buttonText: '立即申请'
      },
    ],
    backIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFEklEQVRoQ9VaTXIaRxT+3gCyd5GqBNvgRQK7oBNYOYHlE1haJigldAKhEwhVIFlaPoHxCSSdQHgHyUJ4C6qStZP4mZd6PTSa6RmYGZhRVVgy/fO+16+/99eEBH7Fs/vNV7npWyKugLEL4iJARe/S3AdTH4QrZuo8jTPX/eOt7+tuT6suIEK/zk3fMdk1AlVWWYfBHWKr8TjOfFkVTGwASvCNyREzakTYXEVwcw4zvhOh8TjKnscFEgtAqTU4AlN9keDM/JWADoj6APVhc18Ja4k5cRHMRQYqRPRLEHABAuJ6r1o4j6qYSADKf98X2R5/DjIVBr4QqP04yrSjas85xekeg/cIeOc7ETEtK/e++9uWo4Alv1AAP/91t0c2f/RpnfkTMrl6lE2WCSDKwXRcB9EH9zg5Dbbo4J/ft9srAyi37vYB/uhdmL/ahP1/q4VOmHbifP+pNahYjAu/edFBt7p9sWithScQKDzovFfdrsURLO7YUuuuQeAj77zFIAIBiNlYzJ+jLhJXyLDxQcqzid4HmZMPgLqw08mN2+YXTQ4TZJ3vJghFtZnsjnnnfABKrcGNl22W2+A6QobN9YEAd3rVwo57ngdAqTkU53SmB/AL2HwYCPNOMOO4d5hv6HlzAE48M7nVpiNOqXdYWClEWCSUYhrQCTE2p8THUZms1Bx0NDuJKT2Ns2+0z5kDKLeGdQAnevMpeCfqBmFalO8OTdKl625dd6v53ahzM6Ab19jTbjUv8kIBMLUP5k/dw8J+lMWjjAkQXrZeyu/muuXm4EI7O/cpKAA+2rKyb9b1sFqAJIRXMorHtie3z8AcBSgAbuaR2KZXze9F0WzYmKSE1/uUWsO2jp0kFBdGoll4fG8iCxMu7HvSwgdZyuMou0Wm15U/o0aVS9nGe2Fj23zQ2qayxcGSm32SoM40NO8G46ZUAKcC4ArAWzVoTfZJW3hlRi42AnBN5dbg1pWAz/k1zMbN7y8hvHMP3P6K+3ICrIVZNWgLCgDj8nxUhZmU7wEAG792/8iLScX6uenNmRjPScXZrPzncBcWLvWclADwRbdaOIgjWNSxywGsqDkn6Z90CPjhWZB0QPhNqDmUatmPs43Xu8Sgq7RBeC4x41vyNJoyiAAafaYlHV9EtcegcbOYP7WTMDLG0/RCiRROIjCUSDWYSxiEeYFVMCdm4EnZkg6nEwRRbg4vQVBZnI7bXiahSQDE0oRGpZQbk/6cAtcM6oLiJCOnhVldCCMOT0oJPDyNskUJ+18sqQ+otkVO6k3vK2G0J6kX9OYpJEGpplYFBIMbctJxAkcj5Z1rX0Vd3mThZQpboqyoWV/kwpYGYmQ8qUaWoXZvlPeDMsbg4q4vMEsvPF4Ewl8XxQNZ2UpocVcW/F+X17VGgrszaPQO88dhR7/O91JzeEYEo4kSs8GxFAS4YwMHSdZNZT+hSrb4zN9IXLHFpEGoJh+zlPBcyYpy5hewcqfrliAdDzs+AchTi2XggYn212ryzU9CdW3G7aD+LgNtYmrH6bY/d/lVm9VXxlT95kxuL4pyQtuspp8Aoe4/DWeUejogjW5pcsu7CGvW6Lap6LyfmDW6FzxNEK2DUXc3MMLuUywA2mO/3pjUGKgtAhK2qfldBCeopwaNqA5OrxEbgJ4477azXVv0dCAMiDIVshpxuvzmmisDcC8kYDZeTXctZmlJ7YJRdBUKtH19A0GeDlzZRJ3RU+YqrraDFPIfcWxacxruOkAAAAAASUVORK5CYII='
  }
}

module.exports = data
