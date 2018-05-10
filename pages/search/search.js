const app = getApp()


Page({
  data:{
    inputMess: '',
    searchList: []
  },
  inpMess: function (e) {
    this.setData({
      inputMess: e.detail.value
    })
  },
  formSubmit: function() {
    var that = this;
    wx.request({
      url: 'https://api.imjad.cn/cloudmusic/',
      data: {
        type: 'search',
        s: this.data.inputMess
      },
      success: function(res) {
        // console.log(res.data)
        that.setData({
          searchList: res.data.result.songs,
          songList: res.data.result.songs
        })
        console.log(that.data.searchList)
      }
    })
  },
  elect: function(e) {
    app.data.songId = e.target.id
    console.log(app.data.songId)
    wx.navigateTo({
      url: '../index/index'
    })
  }
})