//search.js
//获取应用实例
const app = getApp()

Page({
  data:{
    searchList: [],
    inputMess: '',
    index: 0
  },
  inpMess: function (e) {
    this.setData({
      inputMess: e.detail.value
    })
  },
  formSubmit: function() {
    var that = this;
    console.log(this.data.inputMess)
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
          // console.log(res.data.result.songs)
          app.data.songList = res.data.result.songs
          that.setData({
            searchList: res.data.result.songs,
          })
          console.log(that.data.searchList)
        }
      })
    }
  },
  elect: function(e) {
    console.log(e.target.dataset)
    var that = this
    var idx = e.target.dataset.index
    app.data.songId = e.target.id
    wx.navigateTo({
      url: '../index/index'
    })
    // var idx = e.target.dataset.index;
    // this.setData({
    //   index: idx
    // })
    console.log(e.target.dataset)
    // console.log(this.idx)
  }
})