App({
  onLaunch: function(){
    //本地存储
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //登录
    wx.login({
      success: res => {}
    })
    //获取用户信息
    wx.getSetting({
      success: res => {
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo

              if(this.userInfoReadyCallback){
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    urlPrefix: 'https://user.oneapm.com'
  }
})