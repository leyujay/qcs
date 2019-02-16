// pages/detail/detail.js
var id="";
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
    id=options.id;
    console.log(id);
  },

  test:function(e){
    console.log(id);
  }
  


})