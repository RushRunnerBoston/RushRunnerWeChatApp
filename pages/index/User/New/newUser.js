var app = getApp()
Page({
  data: {
    userInfo: {},
    FirstName: "First Name",
    LastName: "Last Name",
    Email: "Email",
    Password : "Password",
    ConfirmPassword : "Confirm Password",
    Zipcode: "Zipcode"

  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../index/User/New/newUser'
    // })
  },

  onLoad: function () {
    console.log('onLoad')
    wx.hideNavigationBarLoading()
    wx.setNavigationBarTitle({
      title: 'Sign Up',
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  formSubmit: function(){
      
  },
  formReset: function(){
      console.log('form reset事件')

  }
})
