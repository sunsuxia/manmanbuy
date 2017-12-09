$(function () {
  var id = tools.getParam("productid");
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getdiscountproduct",
    data:{
      productid:id
    },
    success: function (data) {
      console.log(data);
      $(".pro-all").html(template("tpl",data));
    }
  });
});