$(function () {
    var id = tools.getParam("couponid");
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcouponproduct',

        data:{
            couponid:id,
        },
        success: function (data) {
            console.log(data);
            $('.coupon-list').html(template('tpl',data));
        }
    })



})
