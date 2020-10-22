//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    hotDecisionList: [ // 热门决定列表数据
      {
        id: 11,
        title: '怎么样原谅男盆友？',
        isHot: 1,
        list: [
          {
            id: 111,
            value: '写1000个我爱你',
            weight: '10%'
          },
          {
            id: 112,
            value: '鬼搓衣板',
            weight: '10%'
          },
          {
            id: 113,
            value: '海底捞',
            weight: '10%'
          },
          {
            id: 114,
            value: '无条件原谅',
            weight: '10%'
          }
        ]
      },
      {
        id: 12,
        title: '谁来做家务',
        isHot: 1,
        list: [
          {
            id: 121,
            value: '老公',
            weight: '10%'
          },
          {
            id: 122,
            value: '老婆',
            weight: '10%'
          }
        ]
      },
      {
        id: 13,
        title: '掷骰子',
        isHot: 1,
        list: [
          {
            id: 131,
            value: 1,
            weight: '10%'
          },
          {
            id: 132,
            value: 2,
            weight: '10%'
          },
          {
            id: 133,
            value: 3,
            weight: '10%'
          },
          {
            id: 134,
            value: 4,
            weight: '10%'
          },
          {
            id: 135,
            value: 5,
            weight: '10%'
          },
          {
            id: 136,
            value: 6,
            weight: '10%'
          }
        ]
      },
      {
        id: 14,
        title: '你是什么垃圾？',
        isHot: 1,
        list: [
          {
            id: 141,
            value: '可回收垃圾',
            weight: '10%'
          },
          {
            id: 142,
            value: '干垃圾',
            weight: '10%'
          },
          {
            id: 143,
            value: '有害垃圾',
            weight: '10%'
          }
        ]
      }
    ],
    myDecisionList: [], // 我的历史决定
    runDegs: 0
  }
})