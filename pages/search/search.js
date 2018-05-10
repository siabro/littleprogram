//search.js
//获取应用实例
const app = getApp()

Page({
  data:{
    searchList: []
  },
  formSubmit: function() {
    var that = this;
    if (this.data.inputMess === '') {
      console.log('内容不能为空')
    } else {
      wx.request({
        url: 'https://api.imjad.cn/cloudmusic/',
        data: {
          type: 'search',
          s: this.data.inputMess
        },
        success: function (res) {
          // console.log(res.data)
          that.setData({
            searchList: res.data.result.songs,
            songList: res.data.result.songs
          })
          console.log(that.data.searchList)
        }
      })
    }
  },
  elect: function(e) {
    app.data.songId = e.target.id
    wx.navigateTo({
      url: '../index/index'
    })
  }
})