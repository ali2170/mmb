/**
 * Created by TT-LOVE on 2017/11/6.
 */
$(function () {


    $.ajax({
        type:"get",
        url:"http://192.168.1.102/api/getcategorytitle",
        dataType:"json",
        success:function (data) {
            // console.log(data);
            $(".content").html(template('tpl',data));
        }
    });
    $('.content').on("click",".first",function () {
        // console.log("哈哈");
        var id = $(this).data("id");
        // console.log(id);
        $.ajax({
            type:"get",
            url:"http://192.168.1.102:9090/api/getcategory",
            data:{
                titleid:id
            },
            dataType:"json",
            success:function (data) {
                console.log(data);
                $(".inner").html(template("tpl2",data));
            }
        })
        $(this).siblings().toggleClass("hidde");
    });
})