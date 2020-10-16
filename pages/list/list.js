//list.js
//获取应用实例
const app = getApp()
Page({
  data: {
    myDecisionList: []
  },
  onReady () {
    this.setData({
      myDecisionList: app.globalData.myDecisionList
    })
  },
  linkToEdit: (e) => {
    wx.navigateTo({
      url: `../edit/edit?id=${e.currentTarget.dataset.id}&index=${e.currentTarget.dataset.index}`,
    });
  },
  linkToTemplateList: () => {
    wx.navigateTo({
      url: '../template-list/template-list',
    })
  }
})
