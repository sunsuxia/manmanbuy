$(function () {
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getindexmenu",
    success: function (data) {
      data.result.forEach(function (ele) {
        ele.picAddr = ele.img.split('"')[1];
      });
      var html = template("menu_tpl",data);
      $(".menu ul").html(html);
    }
  });
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    success: function (data) {
      data.result.forEach(function (ele) {
        ele.count=ele.productComCount[1];
      });
      $(".product ul").html(template("pro_tpl",data));
    }
  });
  $(".menu").on("click","li:nth-child(8)", function (e) {
    e.preventDefault();
    $(this).nextAll().toggleClass("hide");
  });
});