//edit.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myDecision: {},
    isNewOne: false,
    currentIndex: ''
  },
  onLoad(options) {
    this.setData({
      isNewOne: !options.id  
    });
    // 热门的模板
    if (options.id) {
      let list = options.isHot === '1' ? app.globalData.hotDecisionList : app.globalData.myDecisionList;
      let currentIndex = list.findIndex((val, key) => {
        return val.id === Number(options.id);
      });
      this.setData({
        myDecision: JSON.parse(JSON.stringify(list[currentIndex])),
        currentIndex: options.index
      });
    } else { // 创建新的决定
      let obj = {
        id: Number(`2${app.globalData.myDecisionList.length + 1}`),
        title: '问题',
        list: [
          {
            id: Number(`2${app.globalData.myDecisionList.length + 1}0`),
            value: '选项',
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
    if (!this.data.isNewOne) {
      this.setData({
        [`myDecision.title`]:  e.detail.value
      });
    }
  },
  // 问题列表修改
  contentInputHandel: function (e) {
    if (!this.data.isNewOne) {
      this.setData({
        [`myDecision.list[${e.target.dataset.index}].value`]: e.detail.value
      }, function () {
        console.log(this.data.myDecision);
      })
    }
  },
  // 删除
  deleteHandel: function (e) {
    if (!this.data.isNewOne) {
      this.data.myDecision.list.splice(e.target.dataset.index, 1);
      this.setData({
        [`myDecision.list`]: this.data.myDecision.list
      });
    }
  },
  // 新增
  addNewHandel: function () {
    if (!this.data.isNewOne) {
      let obj = {
        id: Number(`1${this.data.currentIndex}${this.data.myDecision.list.length + 1}`),
        value: '',
        weight: '10%'
      }
      this.data.myDecision.list.push(obj)
      this.setData({
        myDecision: this.data.myDecision
      })
    } else {
      
    }
  },
  confirm: function() {
    if (!this.data.isNewOne) {
      let that = this;
      let currentIndex = app.globalData.hotDecisionList.findIndex((val, key) => {
        return val.id === that.data.myDecision.id;
      });
      app.globalData.hotDecisionList[currentIndex] = that.data.myDecision;
      wx.navigateBack({
        delta: 1
      });
    } else {
      app.globalData.myDecisionList.push(this.data.myDecision);
      wx.navigateTo({
        url: '../list/list',
      })
    }
  }
})
