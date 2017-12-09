$(function () {
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcategorytitle",
    success: function (data) {
      $(".category-title").html(template("title_tpl",data));
      $(".category-title").on("click",">li>a", function () {
        var titleid = this.dataset.titleid;
        var that = $(this);
        $.ajax({
          type:"get",
          url:"http://127.0.0.1:9090/api/getcategory",
          data:{
            titleid:titleid
          },
          success: function (data) {
            console.log(data);
            that.next().html(template("cate_tpl",data)).stop().slideToggle(500);
          }
        });
      });
    }
  });

});