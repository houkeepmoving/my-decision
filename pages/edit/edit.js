//edit.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myDecision: {}
  },
  onReady() {
    this.setData({
      myDecision: app.globalData.currentItem
    });
  }
})
