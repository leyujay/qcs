var requestUrl ="https://www.leyu0.com/api.php/home/"

function post(url,data,fun,that){
  if(url=='undefined'){
    return false;
  }
  var posturl=requestUrl+url;
  wx.request({
    url: posturl,
    data:data,
    method:"POST",
    header:{
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success:function(res){
      // console.log('1111111');
      // console.log(res);
      // console.log('2222222');
      that[fun](res.data.result);
    },
    fail:function(res){
      console.log('请求失败，请重试');
    }
  })
}
module.exports.post = post