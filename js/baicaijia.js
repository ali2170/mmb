/**
 * Created by TT-LOVE on 2017/11/8.
 */
$(function () {
    var url = "getbaicaijiatitle";
    $.ajax({
        type:"get",
        url:getUrl(url),
        dataType:"json",
        success:function (data) {
            console.log(data);
        }
    })
})