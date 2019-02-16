// pages/cart/cart.js
var com=require('../../utils/util.js');
const app = getApp();
var lick=[];
var chk2="";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartlist:[],
    cartclick:[],
    iscart:false,
    count:1,
    ischecked:[],
    sumpri:0,
    waschecked:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    com.post('cartlist', {}, 'recomd', this);
  },

  onShow:function(e){
    console.log(app.globalData.userId);
    com.post('cartclick', {}, 'cartclick', this);
  },

  recomd:function(e){
    console.log(e);
    if(e!=null){
      this.setData({
        iscart: true
      })
    }
    this.setData({
      cartlist:e,
    })
  },

  cartclick:function(e){
    console.log(e);
    lick = e;
    this.setData({
      cartclick: e,
    })
  },

  detailpage: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    });
  },
  gocart: function (e) {
    console.log(app.globalData.userId);
    var id=e.currentTarget.dataset.id;
    com.post('cart', { 'proid': id, 'userid': app.globalData.userId},'setcon',this);
  },

  setcon:function(e){
    console.log(e);
  },

  addcart:function(e){
    var id = e.currentTarget.id;
    var count = e.currentTarget.dataset.count+1;
    console.log(count);
    com.post('count', { 'id': id, 'count': count }, 'countc', this);
    com.post('cartclick', {}, 'cartclick', this);
  },

    redcart: function (e) {
    console.log(e);
    var id = e.currentTarget.id;
    var count = e.currentTarget.dataset.count - 1;
    console.log(id);
    com.post('count', { 'id': id, 'count': count },'countc',this);
    com.post('cartclick', {}, 'cartclick', this);
  },
  
  countc:function(e){
    console.log(e);
  },

  proChange:function(e){
    chk2=e.detail.value[0];
  },

  shopChange: function (e) {
    var inclu = e.currentTarget.dataset.clu;
    console.log(e);
    var chk=e.detail.value[0];
    if(chk!="true"){
      chk="";
    }
    var idx=e.currentTarget.dataset.idx;
    com.post('choice',{'caclu':inclu,'checked':chk},'choice',this);
    var arr = lick[idx][1];
    for (var value in arr){
      arr[value]['checked']=chk;
    }

    // console.log(result);
    // console.log(lick[idx][1][0]['checked']);
    this.setData({
      cartclick:lick
    })
  },

  choice:function(e){
  },
  onechecked:function(e){
    var id = e.currentTarget.id;
    if(chk2==undefined){
      chk2="";
    }
    var caclu = e.currentTarget.dataset.clu;
    console.log(e);
    com.post('onechoice',{'id':id,'checked':chk2,'caclu':caclu},'choiceres',this);
  },
  choiceres:function(e){
    this.setData({
      'ischecked':e,
    })
  },
  sumChange:function(e){
    var abb=e.detail.value[0];
    var res='';
    if(abb==undefined){
      res=0;
    }else{
      res=1;
    }
    console.log(e);
    com.post('sumprice',{'res':res},'sumpri',this);
    var resu = '';
    if (res == 1) {
      resu = 'true';
    }
    this.setData({
      'waschecked': resu
    })
  },
  sumpri:function(e){
    this.setData({
      'sumpri':e,
    });
    com.post('cartclick', {}, 'cartclick', this);
  }


})