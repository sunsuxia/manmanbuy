$(function () {
  var pageid = 1;
  var pages;
  render();
  $(".prev").on("click", function () {
    if (pageid <= 1) {
      return false;
    }
    pageid--;
    render();
    location.href = "#";
  });
  $(".next").on("click", function () {
    if (pageid >= pages) {
      return false;
    }
    pageid++;
    render();
    location.href = "#";
  });
  $("select").on("change", function () {
    pageid = $(this).val();
    render();
    location.href = "#";
  });
  function render() {
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getmoneyctrl",
      data:{
        pageid:pageid
      },
      success: function (data) {
        console.log(data);
        data.result.forEach(function (ele) {
          ele.count=ele.productComCount[1];
        });
        pages = Math.ceil(data.totalCount / data.pagesize);
        $(".product ul").html(template("pro_tpl",data));
        $("select").html(template("page_tpl", {pages: pages, pageid: pageid}));
      }
    });
  }
});