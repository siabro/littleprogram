//index.js
//获取应用实例
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
// innerAudioContext.autoplay = true

Page({
  data: {
    index: 0,
    selectType: ['song', 'lyric', 'comments', 'detail', 'artist', 'album', 'playlist', 'record', 'mv', 'djradio', 'dj', 'detail_dj', 'search']
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value.type)
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/',
      method: 'GET',
      data:{
        type: this.data.selectType[e.detail.value.type],
        id: parseInt(e.detail.value.cont)
      },
      success:function(data) {
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
      },
      
    })
  },
  start:function() {
    innerAudioContext.play()
  },
  pause: function () {
    innerAudioContext.pause()
  },
  stop: function() {
    innerAudioContext.stop()
  }
})


