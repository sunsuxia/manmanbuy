$(function () {
    var brandTitle=tools.getParam('brandTitle');

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandtitle',

        success: function (data) {
            console.log(data);

            $('#category  .row .category-title').html(template('tpl',data));
        }
    })
})
