//index.js
//获取应用实例
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true

Page({
  data: {
    
  },
  onLoad: function() {
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/',
      method: 'GET',
      data: {
        type: 'song',
        // id: app.data.songId
        id: 28314062
      },
      success: function (data) {
        innerAudioContext.src = data.data.data[0].url
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
        })
        innerAudioContext.onError((res) => {
          console.log(res.errMsg)
          console.log(res.errCode)
        })
        innerAudioContext.onPause(() => {
          console.log('暂停')
        })
        innerAudioContext.onStop(() => {
          console.log('停止')
        })
      }
    })
  },
  start: function() {
    innerAudioContext.play()
  },
  pause: function () {
    innerAudioContext.pause()
  },
  stop: function() {
    innerAudioContext.stop()
  }
})


