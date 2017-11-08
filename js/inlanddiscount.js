$(function () {
    var d1 = "getinlanddiscount";
    $.ajax({
        type:'get',
        data:{

        },
        url:getUrl(d1),
        dataType:"json",
        success:function (data) {
            console.log(data);
            $('.sd').html(template("tpl",data));
        }
    })
    
    
    
    // 滚动页面js
    // window.on('scroll',function () {
    //
    // })
});