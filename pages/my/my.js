// pages/my/my.js
var com=require("../../utils/util.js");
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg:"",
    userName:"",
    haslogin:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.useid){
      this.setData({
        userImg: app.userImg,
        userName: app.userName,
        haslogin:true,
      });
    }
  },
  getUserInfo:function(e){
    var info=e.detail.userInfo;
    com.post('info',{
        pic:info.avatarUrl,
        city: info.city,
        country: info.country,
        gender: info.gender,
        nickname: info.nickName,
        province: info.province,
    },'setcon',this)
  },

  // test:function(){
  //   com.post('Userinfo/info',{id:1},'setcon',this);
  // },
  setcon:function(e){
    console.log(e.id);
    app.globalData.userId=e.id;
    app.globalData.userName = e.nickname;
    app.globalData.userImg = e.pic;
    this.setData({
      userImg: e.pic,
      userName: e.nickname,
      haslogin: true
    });
  }
  
})