/**
 * Created by TT-LOVE on 2017/11/8.
 */
$(function () {
    var url = "getcoupon";
    $.ajax({
        type:"get",
        url:getUrl(url),
        dataType:"json",
        success:function (data) {
            console.log(data);
            $('.content>ul').html(template("tpl",data));
        }
    })
})