//edit.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myDecision: {}
  },
  onReady() {
    let that = this;
    wx.getStorage({
      key: 'currentItem',
      success (res) {
        that.setData({
          myDecision: JSON.parse(res.data)
        });
      }
    });
  }
})
