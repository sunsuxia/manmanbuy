$(function () {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcoupon',
        success: function (data) {
            console.log(data);
            $('.coupon-title').html(template('tpl',data));

        }
    })




})
