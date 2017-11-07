/**
 * Created by TT-LOVE on 2017/11/5.
 */
$(function () {
   var d1 = "getindexmenu";
    var d2 = "getmoneyctrl";
    // 菜单栏
    $.ajax({
        type:"get",
        url:getUrl(d1),
        // datatype:"jsonp",
        success:function (data) {
            // var str = data.result[0].img;
            // console.log(str.split('src="'));
            console.log(data);
            $(".nav_info").html(template("tpl",data));
        }
    });


    // 折扣栏
    $.ajax({
        type:"get",
        url:getUrl(d2),
        success:function (data) {
            $(".product_info").html(template("tpl2",data));
            // console.log(data.result);
            // console.log(data);
        }
    })

});