$(function () {
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getgsshop",
        async:false,
        success: function (data) {
            $(".shop ul").html(template("shop_tpl",data));
            $(".pro-title ul li:first-child a").text(data.result[0].shopName);
            $(".pro-title ul li:first-child a")[0].dataset.shopid = data.result[0].shopId;
        }
    });
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getgsshoparea",
        async:false,
        success: function (data) {
            $(".address ul").html(template("address_tpl",data));
            $(".pro-title ul li:nth-child(2) a").text(data.result[0].areaName.slice(0,2));
            $(".pro-title ul li:nth-child(2) a")[0].dataset.areaid = data.result[0].areaId;
        }
    });
    render();
    $(".pro-title ul li").each(function (i,e) {
        $(e).on("click", function () {
            $(".second").eq(i).stop().slideToggle(500);
        });
    });
    $(".second.shop").on("click","li", function () {
        $(this).addClass("now").siblings().removeClass("now");
        $(".pro-title ul li:first-child a")[0].dataset.shopid = $(this).data("id");
        render();
        $(".second").slideUp(500);
    });
    $(".second.address").on("click","li", function () {
        $(this).addClass("now").siblings().removeClass("now");
        $(".pro-title ul li:nth-child(2) a")[0].dataset.areaid = $(this).data("id");
        render();
        $(".second").slideUp(500);
    });
    $(".price.second").on("click","li", function () {
        $(".second").slideUp(500);
    });
    function render() {
        var shopid = $(".pro-title ul li:first-child a")[0].dataset.shopid;
        var areaid = $(".pro-title ul li:nth-child(2) a")[0].dataset.areaid;
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getgsproduct",
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success: function (data) {
                console.log(data);
                $(".pro-content ul").html(template("pro_tpl",data));
            }
        });
    }
});