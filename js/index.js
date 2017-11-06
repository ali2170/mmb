/**
 * Created by TT-LOVE on 2017/11/5.
 */
$(function () {

    // 菜单栏
    $.ajax({
        type:"get",
        url:"http://192.168.1.102:9090/api/getindexmenu",
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
        url:"http://192.168.1.102/api/getmoneyctrl",
        success:function (data) {
            $(".product_info").html(template("tpl2",data));
            // console.log(data.result);
            // console.log(data);
        }
    })

});