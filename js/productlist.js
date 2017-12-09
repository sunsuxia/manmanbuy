$(function () {
  var categoryid = tools.getParam("categoryId");
  var category = tools.getParam("category");
  var pageid = tools.getParam("pageid");
  var pages;
  $(".product-title p a:last-child").text(category);
  function render() {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getproductlist",
      data: {
        categoryid: categoryid,
        pageid: pageid
      },
      success: function (data) {
        data.category = category;
        pages = Math.ceil(data.totalCount / data.pagesize);
        $(".main ul").html(template("pro_tpl", data));
        $("select").html(template("page_tpl", {pages: pages, pageid: pageid}));
      }
    });
  }

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
});