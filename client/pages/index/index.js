//index.js
var newnote
var nickName
var imageurl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //
    wx.login({
      success: function(){
        wx.getUserInfo({
          success: function(res){
            nickName = res.userInfo.nickName
            imageurl = res.userInfo.avatarUrl
          }
        })
      }
    }),
    wx.request({
      url: 'https://llm2isay.qcloud.la/list.php',
        success: function(res){
          that.setData({
            array: res.data
          })
        }
    })
  },

  //
  confirm: function(e){
    newnote = e.detail.value
  },
  //
  click: function(e){
    var that = this
    wx.request({
      url: 'https://llm2isay.qcloud.la/note.php',
      data: {
        name: nickName,
        content: newnote,
        imageurl: imageurl
      },
    header:{
      'content-type':'application/x-www-form-urlencoded'
    },
    success: function(res){
      wx.request({
        url: 'https://llm2isay.qcloud.la/list.php',
        success: function(res){
          that.setData({
            array: res.data
          })
        }
      })
    }
    })
  }
})