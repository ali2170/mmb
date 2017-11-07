/**
 * Created by TT-LOVE on 2017/11/6.
 */
$(function () {

    var d1 = "getcategorytitle";
    var d2 = "getcategory";
    $.ajax({
        type:"get",
        url:getUrl(d1),
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
            url:getUrl(d2),
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