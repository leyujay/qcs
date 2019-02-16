// pages/vip/vip.js
var com=require('../../utils/util.js');
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viplist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    com.post('vipPro',{},'vipProt',this);
  },

  vipProt:function(e){
    console.log(e);
    this.setData({
      'viplist':e[1]
    })
  },

  gocart: function (e) {
    console.log(app.globalData.userId);
    var id = e.currentTarget.dataset.id;
    com.post('cart', { 'proid': id, 'userid': app.globalData.userId }, 'setcon', this);
  },
  setcon:function(e){
    console.log(e);
  },

  detailpage: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    });
  },


})