$(function () {
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
        async:false,
        success: function (data) {
            $(".bcj-title ul").html(template("nav_tpl",data));
            var lis = $(".bcj-title").find("li");
            var width = 0;
            lis.each(function (index,ele) {
                width += ele.offsetWidth;
            });
            width += 1;
            $(".bcj-title ul").css({
                width: width
            });
            lis.on("click", function () {
                var id = $(this).data("id");
                $(this).addClass("now").siblings().removeClass("now");
                ul.style.transition = "transform 0.5s";
                ul.style.transform = "translateX(" + -this.offsetLeft + "px)";
                $.ajax({
                    type:"get",
                    url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
                    data:{
                        titleid:id
                    },
                    success: function (data) {
                        $(".bcj-list ul").html(template("pro_tpl",data));
                    }
                });
            });
        }
    });
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
        data:{
            titleid:1
        },
        success: function (data) {
            $(".bcj-list ul").html(template("pro_tpl",data));
        }
    });
    var bcjTitle = document.querySelector(".bcj-title");
    var ul = bcjTitle.querySelector("ul");
    var max = -(ul.offsetWidth - bcjTitle.offsetWidth + 50);
    var startX = 0;
    var tempX = 0;
    bcjTitle.addEventListener("touchstart", function (e) {
        ul.style.transition = "none";
        startX = e.changedTouches[0].clientX;
    });
    bcjTitle.addEventListener("touchmove", function (e) {
        var dx = e.changedTouches[0].clientX - startX;
        var moveX = tempX + dx;
        if (moveX >= 50) {
            moveX = 50;
        }
        if (moveX <= max) {
            moveX = max;
        }
        ul.style.transform = "translateX(" + moveX + "px)";
    });
    bcjTitle.addEventListener("touchend", function (e) {
        var dx = e.changedTouches[0].clientX - startX;
        tempX += dx;
        if (tempX > 0) {
            tempX = 0;
            ul.style.transition = "transform .5s";
            ul.style.transform = "translateX(" + tempX + "px)";
        }
        if (tempX < -(ul.offsetWidth - bcjTitle.offsetWidth)) {
            tempX = -(ul.offsetWidth - bcjTitle.offsetWidth);
            ul.style.transition = "transform .5s";
            ul.style.transform = "translateX(" + tempX + "px)";
        }
    });
});