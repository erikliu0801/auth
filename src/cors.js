
$.ajax({
  // url: 'http://35.229.203.248:8090/api/building/', // i7
  url: 'http://192.168.222.205:8888/api/base/', // linux
  // url: 'http://localhost:8888/api/building/',
  type: "GET",
  crossDomain: true,
  success: function (data) {
      console.log(data);
      $("#info").html("跨網域請求成功:"+ data);
  },
  error: function (err) {
      console.log(err);
      $("#info").html("跨網域請求失敗!!");
  }
})