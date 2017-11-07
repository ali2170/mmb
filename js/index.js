/**
 * Created by TT-LOVE on 2017/11/5.
 */


$(function () {

    var detail = "getindexmenu";
    console.log(getUrl(detail));

    // 菜单栏
    $.ajax({
        type:"get",
        url:getUrl(detail),
        // datatype:"jsonp",
        success:function (data) {
            // var str = data.result[0].img;
            // console.log(str.split('src="'));
            console.log(data);
            $(".nav_info").html(template("tpl",data));
        }
    });

    // 折扣栏
    var detail2 = "getmoneyctrl";
    $.ajax({
        type:"get",
        url:getUrl(detail2),
        success:function (data) {
            $(".product_info").html(template("tpl2",data));
            // console.log(data.result);
            // console.log(data);
        }
    })

});