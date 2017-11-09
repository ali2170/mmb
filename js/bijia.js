/**
 * Created by TT-LOVE on 2017/11/6.
 */
$(function () {
    // 获取地址栏传入的productid值
    var d1 = "getproduct";
    var d2 = "getproductcom";

    var search = location.search;
    var arr = search.split("?")[1].split("&");
    console.log(arr);
    var obj={};
    for (var i = 0; i <arr.length-1;i++){
        var k = arr[i].split('=')[0];
        var v = decodeURI(arr[i].split('=')[1]);
        obj[k] = v;
        // console.log(k);
        // console.log(v);
        // console.log("---");

    }
    // console.log(obj.productid);
    var productid = obj.productid;
    // var pageid = obj.pageid;
    // console.log(pageid);
    console.log(obj.category);
    console.log("--");
    obj[arr[2].split("=")[0]]=arr[2].split("=")[1];
    var category =decodeURI(obj.category);
    var brandName = obj.brandName;
    console.log("haha");

    console.log(category+"哈哈");
    // console.log(arr[2]);


    // 渲染面包屑导航

    $.ajax({
        type:'get',
        url:getUrl(d1),
        dataType:'json',
        data:{
            productid:productid
        },
        success:function (data) {
            // console.log(data.result[0].productName.split(" ")[0]);
            var newName = data.result[0].productName.split(" ")[0];
            data.newName = newName;
            // data.brandName=brandName;
            data.category=category;
            // data.pageid=pageid;
            console.log(data);
            $('.content>.title').html(template('tpl',data));
            $(".product_info").html(template("tpl2",data));
            console.log("呵呵");
        }
    })
    // console.log("哈哈");
    // console.log("哈哈");
    // console.log("哈哈");
    // console.log("哈哈");

    // 渲染内容
    $.ajax({
        type:"get",
        url:getUrl(d2),
        data:{
            productid:productid,
        },
        dataType:"json",
        success:function (data) {
            console.log(data);
            $('.talk_content').html(template("tpl3",data));
        }
    })


})

