/**
 * Created by TT-LOVE on 2017/11/8.
 */
$(function () {
    var search = location.search;
    // console.log(search);
    search = search.slice(1);
    console.log(search);
    var arr = search.split("=");
    console.log(arr[1]);
    var obj={};
    obj[arr[0]]=arr[1];
    var id = obj.couponid;
    var url = "getcouponproduct"
    console.log(obj.couponid);
    $.ajax({
        type:"get",
        url:getUrl(url),
        data:{
            couponid:id
        },
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".content>.product>ul").html(template("tpl",data));
        }
    })
    $('.product').on("click",".bd",function () {
        $(this).addClass("now");
    })
})