//index.js
//获取应用实例
const app = getApp() 

Page({
  data: {
  },
  onShow() {
  },
  clickHandel: () => {
    wx.navigateTo({
      url: '../list/list',
      success: (res) => {
        console.log(res);
      }
    });
  }
})
