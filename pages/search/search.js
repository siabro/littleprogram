const app = getApp()


Page({
  data:{
    inputMess: '',
    hold: '请输入内容'
  },
  formSubmit: function() {

  },
  inpMess: function(e) {
    this.setData({
      inputMess: e.detail.value
    })
  },
  formReset: function() {
    // if (this.data.inputMess !== '') {
    //   console.log(this.data)
    //   this.setData({
    //     inputMess: ''
    //   })  
    // }
  }
})