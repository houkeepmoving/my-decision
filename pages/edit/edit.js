//edit.js
//获取应用实例
const app = getApp()
const pages = getCurrentPages()
Page({
  data: {
    myDecision: {},
    currentIndex: ''
  },
  onLoad(options) {
    // 热门的模板
    if (options.item) {
      this.setData({
        myDecision: JSON.parse(options.item),
        currentIndex: options.index
      });
    } else { // 创建新的决定
      let obj = {
        id: Number(`2${app.globalData.myDecisionList.length + 1}`),
        title: '',
        list: [
          {
            id: Number(`2${app.globalData.myDecisionList.length + 1}0`),
            value: '',
            weight: '10%'
          }
        ]
      }
      this.setData({
        myDecision: obj
      })
    }
  },
  titleInputHandel: function (e) {
    console.log(e.detail.value);
    this.setData({
      [`myDecision.title`]:  e.detail.value
    });
  },
  // 问题列表修改
  contentInputHandel: function (e) {
    this.setData({
      [`myDecision.list[${e.target.dataset.index}].value`]: e.detail.value
    }, function () {
      console.log(this.data.myDecision);
    })
  },
  // 删除
  deleteHandel: function (e) {
    this.data.myDecision.list.splice(e.target.dataset.index, 1);
    this.setData({
      [`myDecision.list`]: this.data.myDecision.list
    });
  },
  // 新增
  addNewHandel: function () {
    let obj = {
      id: Number(`2${this.data.currentIndex}${this.data.myDecision.list.length + 1}`),
      value: '',
      weight: '10%'
    }
    this.data.myDecision.list.push(obj)
    this.setData({
      myDecision: this.data.myDecision
    })
  },
  confirm: function() {
    let that = this;
    let flag = that.data.myDecision.list && that.data.myDecision.list.length && that.data.myDecision.list.every((val, key) => {
      return !val.value;
    });
    if (!that.data.myDecision.title) {
      wx.showToast({
        title: '请输入令您疑惑的问题',
        icon: 'success',
        duration: 2000
      });
      return
    } else if (flag) {
      wx.showToast({
        title: '请输入令您疑惑的内容',
        icon: 'success',
        duration: 2000
      });
      return
    }
    let index = app.globalData.myDecisionList.findIndex((val, key) => {
      console.log(val)
      return Number(val.id) === Number(that.data.myDecision.id);
    });
    index >= 0 && app.globalData.myDecisionList.splice(index, 1);
    app.globalData.myDecisionList.unshift(this.data.myDecision);
    wx.navigateBack({
      delta: 2,
    })
  }
})
