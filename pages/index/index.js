const app = getApp()

Page({
  data: {
    motto: '一品梅',
    userInfo: {}
  },
  onLoad: function(){
    if(app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },
  bindViewTap: function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function(e){
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  }
})
