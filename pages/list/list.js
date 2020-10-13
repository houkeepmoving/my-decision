//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myDecisionList: [
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
  },
  linkToEdit: (e) => {
    wx.setStorage({
      key: 'currentItem',
      data: JSON.stringify(e.currentTarget.dataset.item)
    });
    wx.navigateTo({
      url: '../edit/edit',
    });
  }
})
