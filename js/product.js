/**
 * Created by TT-LOVE on 2017/11/6.
 */
$(function () {
    var d1 = "getcategorybyid";
    var d2 = "getproductlist";
    var search =location.search;
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
    var category = obj.category;
    console.log(category);
    // console.log(category);
    var categoryid =obj.categoryId;
    var pageid = obj.pageid;
    // console.log(pageid);
    // 渲染主题
    $.ajax({
        type:'get',
        url:getUrl(d1),
        data:{
            categoryid:categoryid
        },
        success:function (data) {
            // console.log(data);
            $('.content>.title').html(template('tpl',data));
        }
    })

    // 渲染商品详情
    var totalPage = 0;
    function render(pageid) {
        $.ajax({
            type:"get",
            url:getUrl(d2),
            data:{
                categoryid:categoryid,
                pageid:pageid
            },
            dataType:"json",
            success:function (data) {
                console.log(data);
                data.category=decodeURI(category);
                // data.categoryid=categoryid;
                // data.pageid=pageid;
                console.log(data.category+"哈哈");
                $('.list ul').html(template("tpl2",data));
                totalPage = Math.ceil(data.totalCount/data.pagesize);
                console.log('哈哈');
                // console.log(totalPage);,data
                console.log('哈哈');
                data.totalPage =totalPage;
                // data.pageid=pageid;
                console.log(data);
                $('#select').html(template("tpl3",data));
                $('#select').val(pageid);

            }
        });
    }
    render(pageid);


    // function render(pageid) {
    //     $.ajax({
    //         type:"get",
    //         url:"http://192.168.32.98:9090/api/getproductlist",
    //         data:{
    //             categoryid:categoryid,
    //             pageid:pageid
    //         },
    //         dataType:"json",
    //         success:function (data) {
    //             // data.pageid = pageid;
    //             $('.list ul').html(template("tpl2",data));
    //             console.log(data);
    //
    //         }
    //     })
    // }



    // 实现分页
    // $.ajax({
    //     type:"get",
    //     url:"http://192.168.32.98:9090/api/getproductlist",
    //     data:{
    //         categoryid:categoryid,
    //         pageid:pageid
    //     },
    //     dataType:"json",
    //     success:function (data) {
    //         console.log(data);
    //     }
    // })
    $('.next').on('click',function () {
        if (pageid < totalPage){
            pageid++;
            location.href="product.html?categoryId="+categoryid+"&category="+category+"&pageid="+pageid;
            render(pageid);
            // $("#select").val(pageid);
            // return;
        }

    })
    $('.last').on('click',function () {
        if (pageid>1){
            pageid--;
            location.href="product.html?categoryId="+categoryid+"&category="+category+"&pageid="+pageid;
            render(pageid);
            // $("#select").val(pageid);
            // return ;

        }

    })
    $("#select").on("change",function () {
        pageid=$(this).val();
        console.log(pageid);
        location.href="product.html?categoryId="+categoryid+"&category="+category+"&pageid="+pageid;
        render(pageid);

    })

})