// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  //定义全局变量
  globalData: {
    userInfo: null,
    name: "hanma"
  },

  //笔记----练习
  onLaunch(options) {
    console.log('onLaunch', options)
  },
  onShow(options) {
    console.log('onShow', options)
  },
  onHide() {
    console.log('onHide')
  },
  onError(msg) {
    console.log('onError', msg)
  }
})