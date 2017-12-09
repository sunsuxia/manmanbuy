$(function () {
  var id = tools.getParam("productid");
  var category = tools.getParam("category");
  var brandName = tools.getParam("brandName");
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproduct",
    data:{
      productid:id
    },
    success: function (data) {
      data.category = category;
      data.brandName = brandName;
      $(".product-bijia").html(template("pro_tpl", data));
      $(".tab2").remove();
      $(".product-plist td span").css({
        width:"2.8rem",
        height:"1.25rem",
        fontSize:"0.625rem",
        lineHeight:"1.25rem"
      });
      $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproductcom",
        data:{
          productid:id
        },
        success: function (data) {
          $(".com-list").html(template("com_tpl",data));
        }
      });
    }
  });
});