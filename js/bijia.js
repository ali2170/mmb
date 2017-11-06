/**
 * Created by TT-LOVE on 2017/11/6.
 */
$(function () {
    // 获取地址栏传入的productid值

    var search = location.search;
    var arr = search.split("?")[1].split("&");
    console.log(arr);
    var obj={};
    for (var i = 0; i <arr.length-1;i++){
        var k = arr[i].split('='[0]);
        var v = arr[i].split('='[1]);

    }
    console.log(obj.productid);
    var productid = obj.productid;



    // 渲染页面

    // $.ajax({
    //     type:'get',
    //     url:"http://192.168.32.98:9090/api/getproduct",
    //     dataType:'json',
    //     data:{
    //         productid:productid
    //     },
    //     success:function (data) {
    //         console.log(data);
    //     }
    // })
})