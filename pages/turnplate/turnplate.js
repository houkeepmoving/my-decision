//index.js
//获取应用实例
const app = getApp() 

Page({
  data: {
    currentDecision: {},
    currentDicisonList: [],
    turnNum: 2
  },
  onLoad(options) {
    let that = this;
    this.setData({
      currentDecision: JSON.parse(options.item)
    }, () => {
      that.data.currentDecision.list && that.data.currentDecision.list.length && that.data.currentDecision.list.map((val, key, arr) => {
        arr[key].turn = key * that.data.turnNum;
        arr[key].lineTurn = (key * that.data.turnNum + that.data.turnNum / 2) * 360 + 'deg';
      })
      that.setData({
        currentDicisonList: that.data.currentDecision.list
      });
    });
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
