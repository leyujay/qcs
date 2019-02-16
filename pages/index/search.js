// pages/index/search.js
var inputvalue="";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con:"面膜"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  clearSearch:function(){
    this.setData({
      con:"",
    })
  },

  inputInfo:function(e){
    console.log(inputvalue);
  },

  getSearchInfo(e){
    inputvalue=e.detail.value;
  }

  
})