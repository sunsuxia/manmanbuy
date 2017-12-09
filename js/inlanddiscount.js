$(function () {
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getinlanddiscount",
    success: function (data) {
      $(".product-list ul").html(template("tpl",data));
    }
  });
});
