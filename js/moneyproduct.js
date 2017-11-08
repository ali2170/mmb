/**
 * Created by TT-LOVE on 2017/11/7.
 */
$(function () {
    var d1 = "getmoneyctrlproduct";
    var search = location.href;
    search = search.split("?")[1];
    var arr = search.split("=");
    var obj ={};
    // console.log(arr[0]);
    obj[arr[0]]=arr[1];
    // console.log(obj.productid);
    var productid = obj.productid;

    // 渲染页面
    $.ajax({
        type:"get",
        url:getUrl(d1),
        data:{
            productid:productid
        },
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".center").html(template("tpl",data));
        }
    })

})