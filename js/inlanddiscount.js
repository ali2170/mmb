/**
 * Created by TT-LOVE on 2017/11/7.
 */
$(function () {
    var d1 = "getmoneyctrl";
    var search =location.search;
    console.log(search);
    if (search != ""){
        search=search.split("?")[1];
        var arr = search.split("&");
        // console.log(arr);
        var obj={};
        // console.log(obj);
        for (var i = 0 ; i <=arr.length-1 ; i++){
            var k = arr[i].split("=")[0];
            var v = arr[i].split("=")[1];
            // console.log(k);
            // console.log(v);
            obj[k] = v;
        }
        // console.log(obj);
        // console.log(category);
        var pageid = obj.pageid;
        console.log(pageid);
    }else{
        // alert("哈哈哈哈哈哈")
        var  pageid =1;
        console.log(pageid);
    }
    var totalPage=0;


    function render(pageid) {
        $.ajax({
            type:'get',
            url:getUrl(d1),
            data:{
                pageid:pageid
            },
            dataType:"json",
            success:function (data) {
                console.log(data);
                console.log(pageid);
                $('.product_info').html(template("tpl",data));
                totalPage = Math.ceil(data.totalCount/data.pagesize);
                // console.log(totalPage);
                // console.log("哈哈");
                data.totalPage=totalPage;
                // data.pageid=pageid;
                // console.log("哈哈");
                console.log(data.totalPage);
                // console.log("呵呵");
                console.log(pageid);
                $("#select").html(template("tpl2",data));
                $("#select").val(pageid);
            }
        })
    }
    render(pageid);

    // console.log(totalPage);
    // console.log("哈哈");
    $('.next').on('click',function () {
        // console.log("哈哈");
        console.log(pageid);
        // console.log("哈哈");
        if (pageid < totalPage){
            pageid++;
            console.log("呵呵");
            console.log(pageid);
            location.href="moneyctrl.html?pageid="+pageid;
            render(pageid);
            // $("#select").val(pageid);
            // return;
        }

    })
    $('.last').on('click',function () {
        if (pageid>1){
            pageid--;
            // location.href="product.html?categoryId="+categoryid+"&category="+category+"&pageid="+pageid;
            // location.href="moneyctrl.html?pageid="+pageid;
            location.href="moneyctrl.html?pageid="+pageid;
            render(pageid);
            // $("#select").val(pageid);
            // return ;

        }

    })
    $("#select").on("change",function () {
        pageid=$(this).val();
        console.log(pageid);
        // location.href="product.html?categoryId="+categoryid+"&category="+category+"&pageid="+pageid;
        location.href="moneyctrl.html?pageid="+pageid;

        render(pageid);

    })
})