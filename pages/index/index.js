//index.js
//获取应用实例
var com=require('../../utils/util.js');
const app = getApp();
var total_time=1000;
Page({
  data: {
    time:1,
    second:'00',
    minute:'00',
    hour:'00',
    info:"",
    scrolist:[],
    bigad:[],
    sekill:[]
  },
  //事件处理函数
  goSearch: function() {
    wx.navigateTo({
      url: 'search'
    })
  },
  onLoad: function () {
    this.timeout();
    com.post('scrollimg',{},'scrollpic',this);
    com.post('bigad', {}, 'adpict', this);
    com.post('sekill', {}, 'seckill', this);
  },
  scrollpic:function(e){
    this.setData({
      scrolist:e
    })
  },
  adpict:function(e){
    this.setData({
      bigad: e
    })
  },
  seckill:function(e){
    console.log(e);
    var nowtime=new Date().getTime();
    total_time=Math.floor(e[0]['end_time']-(nowtime/1000));
    console.log(total_time); 
    this.setData({
      sekill: e[1]
    })
  },

  timeout:function(){
    if(total_time<0){
      this.setData({
        info: "秒杀活动结束!",
        time:0
      });
    }else{
      this.setData({
        time: total_time
      });
      var that = this;
      setTimeout(function () {
        total_time -= 1;
        that.timeout();
      }, 1000);
      this.maketime(total_time);
    }
    
  },

  maketime:function(e){
    var se = e % 60;
    var min = Math.floor(e / 60) % 60;
    var hou = Math.floor(e / 3600);
    if(se.toString().length==1){
      se = '0' + se.toString();
    };
    if (min.toString().length == 1) {
      min = '0' + min.toString();
    };
    if (hou.toString().length == 1) {
      hou = '0' + hou.toString();
    };
    this.setData({
      second: se,
      minute:min,
      hour: hou
    })
  },
  detailpage:function(e){
    var id=e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    });
  }

})
