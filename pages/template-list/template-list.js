//template.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotDecisionList: []
  },
  onShow () {
    this.setData({
      hotDecisionList: app.globalData.hotDecisionList
    });
  },
  hotTemplateClick: function(e) {
    wx.navigateTo({
      url: `../edit/edit?item=${JSON.stringify(e.currentTarget.dataset.item)}&index=${e.currentTarget.dataset.index}`,
    });
  },
  // 创建新的决定
  createNewOne: function(e) {
    wx.navigateTo({
      url: '../edit/edit?isNewOne=1'
    });
  },
  // 选择模板
  chooseTemplate: e => {
    app.globalData.myDecisionList.unshift(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../list/list',
    })
  }
})
