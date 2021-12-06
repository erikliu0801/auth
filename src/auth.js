var config = {
  method: "get",
  url: "http://192.168.222.205:8888/api/building/",
  // url: "http://35.229.203.248:8090/api/building/",

  headers: {
    "Authorization":
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ1c2VyMTIzNEAxMjMuY29tIiwicGxhdGZvcm1JZCI6MSwiaWF0IjoxNjM4Nzg3MTI4LCJleHAiOjE2MzkyMTkxMjh9.UMiZ5IFtoAzn9Pm-G364w7MKsaEtzHnmYQh20TwVAqc",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    $("#info").html("請求成功:"+ JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
    $("#info").html("請求失敗!!" + error);
});