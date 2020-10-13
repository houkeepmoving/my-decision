//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  clickHandel: () => {
    console.log('哈哈');
    wx.navigateTo({
      url: '../list/list',
      success: (res) => {
        console.log(res);
      }
    });
  }
})
