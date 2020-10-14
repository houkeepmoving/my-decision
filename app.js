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
    myDecisionList: [ // 我的决定列表数据
      {
        id: 1,
        title: '怎么样原谅男盆友？',
        list: [
          {
            id: 11,
            value: '写1000个我爱你',
            weight: '10%'
          },
          {
            id: 12,
            value: '鬼搓衣板',
            weight: '10%'
          },
          {
            id: 13,
            value: '海底捞',
            weight: '10%'
          },
          {
            id: 14,
            value: '无条件原谅',
            weight: '10%'
          }
        ]
      },
      {
        id: 2,
        title: '谁来做家务',
        list: [
          {
            id: 21,
            value: '老公',
            weight: '10%'
          },
          {
            id: 22,
            value: '老婆',
            weight: '10%'
          }
        ]
      },
      {
        id: 3,
        title: '掷骰子',
        list: [
          {
            id: 31,
            value: 1,
            weight: '10%'
          },
          {
            id: 32,
            value: 2,
            weight: '10%'
          },
          {
            id: 33,
            value: 3,
            weight: '10%'
          },
          {
            id: 34,
            value: 4,
            weight: '10%'
          },
          {
            id: 35,
            value: 5,
            weight: '10%'
          },
          {
            id: 36,
            value: 6,
            weight: '10%'
          }
        ]
      },
      {
        id: 4,
        title: '你是什么垃圾？',
        list: [
          {
            id: 41,
            value: '可回收垃圾',
            weight: '10%'
          },
          {
            id: 42,
            value: '干垃圾',
            weight: '10%'
          },
          {
            id: 43,
            value: '有害垃圾',
            weight: '10%'
          }
        ]
      }
    ]
  }
})