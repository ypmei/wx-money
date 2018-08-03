const app = getApp()
const { fetchAppList } = require('../../actions/overview')

const baseOptions = {
  data: {
    motto: '一品梅',
    userInfo: {}
  },
  onLoad: function(){
    if(app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo
      })
      fetchAppList({
        userId: app.globalData.userInfo.city
      }).then((res) => {
        console.log(res)
      })
    }
  },
  getUserInfo: function(e){
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  }
}

const pageEvents = {
  bindViewTap: function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
}

Page(Object.assign(baseOptions, pageEvents))
