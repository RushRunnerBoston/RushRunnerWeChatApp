//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    txt: '该应用公众号将获取你的公开信息',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.redirectTo({
      url: '../index/User/New/newUser'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    wx.setNavigationBarTitle({
      title: 'Rushrunner',
      success: function(res) {
        // success
      }
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
