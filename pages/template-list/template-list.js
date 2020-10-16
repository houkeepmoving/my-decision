//template.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotDecisionList: []
  },
  onReady () {
    this.setData({
      hotDecisionList: app.globalData.hotDecisionList
    });
  },
  hotTemplateClick: function(e) {
    wx.navigateTo({
      url: `../edit/edit?id=${e.currentTarget.dataset.id}&index=${e.currentTarget.dataset.index}&isHot=1`,
    });
  },
  // 创建新的决定
  createNewOne: function(e) {
    wx.navigateTo({
      url: '../edit/edit'
    });
  }
})
