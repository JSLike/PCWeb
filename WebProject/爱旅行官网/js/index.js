//头部轮播图选项卡框
 tab("#tab1");
 tab("#tab1-sub");
    function tab(id){
        let $li= $(id+">.nav-list>li");
        let $div=$(id+">.nav-cont>div");

        $div.hide().eq(0).show();
        $li.click(function () {
           let $index=$(this).index();
           $li.removeClass("active").eq($index).addClass("active");
           $div.hide().eq($index).show();
       })
    }



    //双层选项卡组件js
 let news;
 $.ajax({
     async:false,
     url:"json/datanews.json",
     success:function (data) {
//news.data1数据1
// news.data1.length父级选项卡长度    //news.data1[0].title  父级选项卡标题
//news.data1[0].listsub.length      子选项卡长度
//news.data1[0].listsub[0].title    子选项卡标题
//news.data1[0].listsub[0].content 内容数组
//news.data1[0].listsub[0].content[0].img 单个内容img路径src
//news.data1[0].listsub[0].content[0].text  单个内容文本内容
         news=data;
         console.log(news.data1);

         tab1("#cont-tab1",news.data1);
         tab1("#cont-tab2",news.data2);
         tab1("#cont-tab3",news.data3);
         tab1("#cont-tab4",news.data1);
//创建fn 传递参数id，每次调用创建一个新的vue
         function tab1(id,datanum){
             new Vue({
                 el: id,
                 components: {
                     'tab':{
                         data () {
                             return {
                                 jNow:0,
                                 iNow: 0,
                                 news:datanum,
                             }
                         },
                         template: `#tabTmp`
                     }
                 }
             })
         }



     }
 });


//滚动条监听事件
//滚动监听
$(function () {
    let contH=$(document).height();
    let $text=$("#fixbox .text");
    let $fa=$("#fixbox .fa");
    let $scrollGroup=$(".scrollgrouup");
    $(document).scroll(function () {
        let scrH=$(document).scrollTop();
        // console.log(contH,scrH,document.scrollHeight);
        if (scrH >= 500) {
            $("#fixbox").css("display","block")
        }else{
            $("#fixbox").css("display","none")
        }

        $scrollGroup.map(function (index,ele) {
            ele.oindex=index;
            if (ele.offsetTop <= scrH+100) {     //适应锚链接跳转点
                $fa.css("display","flex").eq(index).css("display","none");
                $text.css("display","none").eq(index).css("display","block");
            }


        })

        // if(scrH/contH<1/4){
        //     $fa.css("display","flex").eq(0).css("display","none");
        //     $text.css("display","none").eq(0).css("display","block");
        // }else if(1/2>scrH/contH&&scrH/contH>1/4){
        //     $fa.css("display","flex").eq(1).css("display","none");
        //     $text.css("display","none").eq(1).css("display","block");
        // }else if(3/4>scrH/contH&&scrH/contH>1/2){
        //     $fa.css("display","flex").eq(2).css("display","none");
        //     $text.css("display","none").eq(2).css("display","block");
        // }else if(scrH/contH>3/4){
        //     $fa.css("display","flex").eq(3).css("display","none");
        //     $text.css("display","none").eq(3).css("display","block");
        // }



    })
});


$("#date").datetime({
    type:"date",
    value:[2019,9,31],
    success:function(res){
        console.log(res)
    }
})
$("#datetime").datetime({
    type:"datetime",
    value:[2019,7,15,15,30]
})