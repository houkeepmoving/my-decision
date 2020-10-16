//list.js
//获取应用实例
const app = getApp()
Page({
  data: {
    myDecisionList: []
  },
  onShow () {
    this.setData({
      myDecisionList: app.globalData.myDecisionList
    })
  },
  linkToEdit: (e) => {
    wx.navigateTo({
      url: `../edit/edit?item=${JSON.stringify(e.currentTarget.dataset.item)}&index=${e.currentTarget.dataset.index}`,
    });
  },
  linkToTemplateList: () => {
    wx.navigateTo({
      url: '../template-list/template-list',
    })
  }
})
