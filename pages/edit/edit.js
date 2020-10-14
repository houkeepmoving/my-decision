//edit.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myDecision: {},
    currentIndex: ''
  },
  onLoad(options) {
    let currentIndex = app.globalData.myDecisionList.findIndex((val, key) => {
      return val.id === Number(options.id);
    });
    this.setData({
      myDecision: JSON.parse(JSON.stringify(app.globalData.myDecisionList[currentIndex])),
      currentIndex: options.index
    });
  },
  titleInputHandel: function (e) {
    console.log(e.detail.value);
    this.setData({
      [`myDecision.title`]:  e.detail.value
    });
  },
  // 问题列表修改
  contentInputHandel: function (e) {
    // console.log(e);
    this.setData({
      [`myDecision.list[${e.target.dataset.index}].value`]: e.detail.value
    }, function () {
      console.log(this.data.myDecision);
    })
  },
  // 删除
  deleteHandel: function (e) {
    console.log(e.target.dataset.index)
    this.data.myDecision.list.splice(e.target.dataset.index, 1);
    this.setData({
      [`myDecision.list`]: this.data.myDecision.list
    });
  },
  // 新增
  addNewHandel: function () {
    let obj = {
      id: Number(`${this.data.currentIndex}${this.data.myDecision.list.length + 1}`),
      value: '',
      weight: '10%'
    }
    this.data.myDecision.list.push(obj)
    this.setData({
      myDecision: this.data.myDecision
    })
  },
  confirm: function() {
    console.log(this.data);
    let that = this;
    let currentIndex = app.globalData.myDecisionList.findIndex((val, key) => {
      return val.id === that.data.myDecision.id;
    });
    app.globalData.myDecisionList[currentIndex] = that.data.myDecision;
    wx.navigateBack({
      delta: 1
    });
  }
})
