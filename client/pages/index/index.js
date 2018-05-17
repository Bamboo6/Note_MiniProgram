//index.js
var util = require('../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newnote:"",//留言信息
    nickName: "",//用户昵称
    imageurl: "",//头像地址
    time: "",
    authorized: false//是否获取用户信息授权

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    this.setData({
      time: time
    });  

    wx.request({
      url: 'https://llm2isay.qcloud.la/list.php',
        success: (res)=>{
          this.setData({
            array: res.data
          })
        }
    })
  },

  //输入留言
  confirm: function(e){
    this.setData({newNote:e.detail.value})
  },

  //提交留言
  click: function(e){
    
    if(!this.data.newNote.trim()){
      return
    }
    wx.request({
      url: 'https://llm2isay.qcloud.la/note.php',
      data: {
        name: this.data.nickName,
        content: this.data.newNote,
        imageurl: this.data.imageUrl,
        // time:(new Date()).toLocaleString()
        time: this.data.time
      },
    header:{
      'content-type':'application/x-www-form-urlencoded'
    },
    success: (res)=>{
      wx.request({
        url: 'https://llm2isay.qcloud.la/list.php',
        success: (res)=>{
          this.setData({
            array: res.data,
            newNote: ""
          })
        }
      })
    }
    })
    
  },
  getUserInfo:function(e){
    this.setData({
      nickName: JSON.parse(e.detail.rawData).nickName,
      imageUrl: JSON.parse(e.detail.rawData).avatarUrl,
      authorized: true 
    })
  }
  // gettime: function (e) {
  //   var time = util.formatTime(new Date());  
  //   this.setData({
  //     time: time
  //   });  
  // }
})