//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentDecision: {},
    currentDicisonList: [],
    awardsList: [],
    animationData: {},
    btnDisabled: '',
    result: '？？？'
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
      }, () => {
        // 绘制转盘
        var awardsConfig = that.data.currentDicisonList,
        len = awardsConfig.length,
        rotateDeg = 360 / len / 2 + 90,
        html = [],
        turnNum = 1 / len  // 文字旋转 turn 值
        that.setData({
          btnDisabled: true ? '' : 'disabled'  
        })
        var ctx = wx.createContext()
        for (var i = 0; i < len; i++) {
          // 保存当前状态
          ctx.save();
          // 开始一条新路径
          ctx.beginPath();
          // 位移到圆心，下面需要围绕圆心旋转
          ctx.translate(150, 150);
          // 从(0, 0)坐标开始定义一条新的子路径
          ctx.moveTo(0, 0);
          // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
          ctx.rotate((360 / len * i - rotateDeg) * Math.PI/180);
          // 绘制圆弧
          ctx.arc(0, 0, 150, 0,  2 * Math.PI / len, false);

          // 颜色间隔
          if (i % 2 == 0) {
              ctx.setFillStyle('rgba(255,195,0)');
          }else{
              ctx.setFillStyle('rgba(255,195,0)');
          }

          // 填充扇形
          ctx.fill();
          // 绘制边框
          ctx.setLineWidth(0.5);
          ctx.setStrokeStyle('rgba(228,55,14,.1)');
          ctx.stroke();

          // 恢复前一个状态
          ctx.restore();

          // 奖项列表
          html.push({turn: i * turnNum + 'turn', lineTurn: i * turnNum + turnNum / 2 + 'turn', award: awardsConfig[i].value});    
        }
        that.setData({
          awardsList: html
        });
        // 对 canvas 支持度太差，换种方式实现
        // wx.drawCanvas({
        //   canvasId: 'lotteryCanvas',
        //   actions: ctx.getActions()
        // });
      });
    });
  },
  gotoList: function() {
    wx.redirectTo({
      url: '../list/list'
    })
  },
  getLottery: function () {
    var that = this
    var awardIndex = Math.floor(Math.random() * that.data.currentDicisonList.length);
    // 获取奖品配置
    var awardsConfig = that.data.currentDicisonList,
        runNum = 8
    // if (awardIndex < 2) {
    //   return
    // }
    // 初始化 rotate
  /*  var animationInit = wx.createAnimation({
      duration: 10
    })
    this.animationInit = animationInit;
    animationInit.rotate(0).step()
    this.setData({
      animationData: animationInit.export(),
      btnDisabled: 'disabled'
    })*/

    // 旋转抽奖
    app.runDegs = app.runDegs || 0
    console.log('deg', app.runDegs)
    app.runDegs = app.runDegs + (360 - app.runDegs % 360) + (360 * runNum - awardIndex * (360 / that.data.currentDicisonList.length))
    console.log('deg', app.runDegs)
    var animationRun = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease'
    })
    that.animationRun = animationRun
    animationRun.rotate(app.runDegs).step()
    that.setData({
      animationData: animationRun.export(),
      btnDisabled: 'disabled'
    })

    // 中奖提示
    setTimeout(function() {
      wx.showModal({
        title: '恭喜',
        content: (that.data.currentDicisonList[awardIndex].value),
        showCancel: false
      })
      that.setData({
        btnDisabled: '',
        result: that.data.currentDicisonList[awardIndex].value
      });
    }, 4000);
  }
})