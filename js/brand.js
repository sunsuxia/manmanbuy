$(function () {
    var id=tools.getParam('brandtitleid');
    var pagesize = tools.getParam("pagesize");

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{
            brandtitleid:id
        },
        success: function (data) {
            //console.log(data);
            $('.brand-list').html(template('tpl',data));


            $.ajax({
                type:'get',
                url:'http://127.0.0.1:9090/api/getbrandproductlist',
                data:{
                    brandtitleid:id,
                    pagesize:4,

                },
                success: function (data) {
                    //console.log(data);
                    $('.product-list').html(template('tpl2',data));
                    var info = data;
                   
                    $.ajax({
                        type:'get',
                        url:'http://127.0.0.1:9090/api/getproductcom',
                        data:{
                            productid:data.result[0].productId
                        },
                        success: function (data) {
                            data.img = info.result[0].productImg;
                            //console.log(data);
                            $('.product-com').html(template('tpl3',data))
                        }
                    })

                }
            })
        }
    })
})
